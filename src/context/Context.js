import React, {useEffect, useState} from "react";
import mockUsers from "./mockData/mockUsers";
import mockFollowers from "./mockData/mockFollowers";
import mockRepos from "./mockData/mockRepos";
import axios from "axios";

const rootUrl='https://api.github.com/';
export const GitHubContext=React.createContext()

//Provider , Consumer -GithubContext.Provider

export const GithubProvider=({children})=>{
    const [gitHubUser,setGitHubUser]=useState(mockUsers)
    const [gitHubFollowers,setGitHubFollowers]=useState(mockFollowers)
    const [gitHubRepos,setGitHubRepos]=useState(mockRepos)
    //request loading
    const [requests,setRequests]=useState(0)
    const [loading,setLoading]=useState(false)
    //errors
    const [error,setError]=useState({show:false,msg:''})
    //check rate
    const checkRequests = () => {
      axios(rootUrl+'rate_limit').then(res=>{
          setRequests(res.data.rate.remaining)
          if(res.data.rate.remaining==0){
            toggleError(true,'Sorry! your hourly limit is finished')
          }
      }).catch(err=>{
      })
    }
    const searchGithubUser = async (user) => {
        setLoading(true)
        const response =await axios(rootUrl+'users/'+user)
            .catch(err=>{
                console.log(err)
            })
        if(response){
            toggleError(false,'')
            setGitHubUser(response.data)
            setLoading(false)
            const {login,followers_url}=response.data;
            //repos
           // await axios(rootUrl+'users/'+login+'/repos?per_page=100')
           //      .then(res=>{
           //          setGitHubRepos(res.data)
           //      })
           //  // followers
           // await axios(followers_url+'?per_page=100')
           //      .then(res=>{
           //        setGitHubFollowers(res.data)
           //      })

            await Promise
                .allSettled
                ([axios(rootUrl+'users/'+login+'/repos?per_page=100'),
                    axios(followers_url+'?per_page=100')])
                .then((results)=>{
                    const [repos,followers]=results
                    const status='fulfilled';
                    if(repos.status==status) setGitHubRepos(repos.value.data)
                    if(followers.status==status) setGitHubFollowers(followers.value.data)
                    })

        }
        else{
            toggleError(true,'there is no user with that username')
            setLoading(false)
        }
        checkRequests()
    }
    const toggleError = (show,msg) => {
      setError({show,msg});
    }
    //error
    useEffect(()=>{
        checkRequests()
    },[])
    return <GitHubContext.Provider value={{searchGithubUser,loading,error,requests,gitHubUser,gitHubFollowers,gitHubRepos}}>
        {children}</GitHubContext.Provider>
}
