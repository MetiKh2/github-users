import React from 'react';
import {VictoryPie} from "victory";

const Doughnut2D = ({languages}) => {
    const starPerLanguages=languages.sort((a,b)=>{
        return b.stars - a.stars
    }).slice(0,5).map(p=>{return{
        label:p.label,
        x:1,
        y:p.stars
    }})
    return <VictoryPie
        colorScale={["#29a8b4","#F2726F","#5D62B5", "#8D6E63", "gold", "red", "gray",'yellow','pink' ]}
        data={starPerLanguages}
    />
};

export default Doughnut2D;