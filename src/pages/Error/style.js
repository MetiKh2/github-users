import { makeStyles} from '@mui/styles';
import React from 'react';


const useStyle=makeStyles(theme=>({
    root:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        background:' var(--clr-primary-10)',
        minHeight:'100vh',
        padding:'1.5rem'
    },
    errorTitle:{
        fontSize:'6rem'
    },
    errorInfo:{
        fontSize:'1.5rem',
        fontWeight:"bold",
        color:'#000',
        textAlign:'center'
    }


}));

export default useStyle;


