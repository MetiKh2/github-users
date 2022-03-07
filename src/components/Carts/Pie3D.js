import React from 'react';
import {VictoryChart, VictoryPie, VictoryTheme} from "victory";

const Pie3D = ({languages}) => {
    return <VictoryPie
        colorScale={["#29a8b4","#F2726F","#5D62B5", "#8D6E63", "gold", "red", "gray",'yellow','pink' ]}

        data={languages}
        />
};

export default Pie3D;