import React from 'react';
import {VictoryBar, VictoryChart, VictoryTheme} from "victory";

const Column3D = ({forks}) => {
    const mostPopularsBar=forks.map(p=>{return  {
        x:p.label,
        y0:1,
        y:p.value
    }})
    return (
        <VictoryChart
            theme={VictoryTheme.material}
        >
            <VictoryBar horizontal
                style={{ data: { fill: "#c43a31",width:12 } }}
                alignment="start"
                data={mostPopularsBar}
                labels={({ datum }) => `${datum.x}`}
            />
        </VictoryChart>
    );
};

export default Column3D;