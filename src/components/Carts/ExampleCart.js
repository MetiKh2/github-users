import {VictoryAxis, VictoryBar, VictoryChart, VictoryStack, VictoryTheme} from "victory";
import React from "react";


const ExampleCart=()=> {
    return <VictoryChart
        theme={VictoryTheme.material}
    >
        <VictoryBar
            style={{ data: { fill: "#c43a31" } }}
            alignment="start"
            data={[
                { x: 1, y: 2, y0: 1 },
                { x: 2, y: 3, y0: 2 },
                { x: 3, y: 5, y0: 2 },
                { x: 4, y: 4, y0: 3 },
                { x: 5, y: 6, y0: 3 }
            ]}
        />
    </VictoryChart>
}
export default ExampleCart;