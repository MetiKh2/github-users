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
    container: {
    width: '90vw',
    maxWidth: '600px',
    textAlign: 'center',
},
    loginTitle:{
        margin:'1.5rem 0',
        fontSize:'2.5rem'
    }
}));

export default useStyle;


