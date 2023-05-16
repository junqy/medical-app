import React from "react";
import { ResponsivePie } from "@nivo/pie";

function PieChart({ data }) {
    return (
        <ResponsivePie
            data={data}
            colors={({data}) => data.color}
            isInteractive={false}
            margin={{
                top: 40,
                right: 80,
                bottom: 40,
                left: 80,
            }}
            innerRadius={0.1}
            padAngle={2}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            borderWidth={1}
            borderColor={{
                from: "color",
                modifiers: [["darker", 0.2]],
            }}
            arcLinkLabel="label"
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor="#ffffff"
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: "color" }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor="#ffffff"
        />
    );
}

export default PieChart;
