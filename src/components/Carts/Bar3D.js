import React from 'react';
import {VictoryBar, VictoryChart, VictoryTheme} from "victory";

const Bar3D = ({mostPopular}) => {
    const mostPopularsBar=mostPopular.map(p=>{return  {
        x:p.label,
        y0:1,
        y:p.value
    }})
    return (
        <VictoryChart
            theme={VictoryTheme.material}
        >
            <VictoryBar
                style={{ data: { fill: "#c43a31",width:12 } }}
                alignment="start"
                data={mostPopularsBar}
                labels={({ datum }) => `${datum.x}`}
            />
        </VictoryChart>
    );
};

export default Bar3D;