import React, {useContext} from 'react';
import styled from "styled-components";
import ExampleCart from "./Carts/ExampleCart";
import {GitHubContext} from "../context/Context";
import Pie3D from "./Carts/Pie3D";
import {object} from "@amcharts/amcharts5";
import Doughnut2D from "./Carts/Doughnut2D";
import Bar3D from "./Carts/Bar3D";
import Column3D from "./Carts/Column3D";
const Repos = () => {
    const {gitHubRepos}=useContext(GitHubContext)
    let languages=gitHubRepos.reduce((total,item)=>{
        const {language,stargazers_count,watchers_count,name}=item
        if(!language)return total
        if(!total[language])
        total[language]={x:1,y:1,label:language,stars:stargazers_count,
        };
        else total[language]={...total[language],y:total[language].y+1,
        stars:total[language].stars+stargazers_count,
        }
        return total
    },{})
    languages=Object.values(languages)
    let {stars,forks}=gitHubRepos.reduce((total,item)=>{
        const {stargazers_count,name,forks}=item
        total.stars[stargazers_count]={label:name,value:stargazers_count}
        total.forks[forks]={label:name,value:forks};
        return total
    },{stars:{},forks:{}})
    stars=Object.values(stars).slice(-5).reverse();
    forks=Object.values(forks).slice(-5)
    return <section className={'section'}>
        <Wrapper className={'section-center'}>
        <div className={'doughnut-container'}>
            <p>Languages</p>
            <Pie3D languages={languages}/>
        </div>
            <div className={'doughnut-container bar'}>
                <p>Most Popular</p>
                <Bar3D mostPopular={stars}/>
            </div>
            <div className={'doughnut-container'}>
                <p>Star Per Language</p>
            <Doughnut2D languages={languages}/>
        </div>
            <div style={{paddingLeft:'3rem'}} className={'doughnut-container bar'}>
                <p>Most Forks</p>
                <Column3D forks={forks}/>
            </div>
        </Wrapper>
        </section>;
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }
  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
  .doughnut-container{
    background: #fff;
    padding: 2rem;
    background: #fff;
    border-radius:10px;
    padding:2.5rem
  }
  .doughnut-container svg{
    overflow: visible;
  }
  .doughnut-container.bar tspan{
    font-size: 7px !important;
  }
`;

export default Repos;