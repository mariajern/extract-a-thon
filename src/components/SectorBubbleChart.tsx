
"use client"

import type { BubbleChartDataPoint } from "@/lib/types";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, ZAxis, LabelList, ResponsiveContainer } from "recharts"

interface SectorBubbleChartProps {
  data: BubbleChartDataPoint[];
}

export default function SectorBubbleChart({ data }: SectorBubbleChartProps) {
  const chartConfig = data.reduce((acc, sector) => {
    acc[sector.id] = {
      label: sector.name,
      color: sector.fill,
    };
    return acc;
  }, {} as ChartConfig);

  return (
    // Changed background to bg-card (white) and removed backdrop-blur
    <div className="w-full h-[500px] max-w-4xl p-4 bg-card rounded-lg shadow-xl">
      <ChartContainer config={chartConfig} className="w-full h-full">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart
            margin={{
              top: 40, 
              right: 20,
              bottom: 40, 
              left: 20,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              type="number" 
              dataKey="privatePerformance" 
              name="EQT owned Company Performance" 
              unit="" 
              stroke="hsl(var(--muted-foreground))"
              label={{ value: "EQT owned Company Performance", position: 'insideBottom', offset: -20, fill: "hsl(var(--foreground))" }}
            />
            <YAxis 
              type="number" 
              dataKey="publicPerformance" 
              name="Public Co. Performance" 
              unit="" 
              stroke="hsl(var(--muted-foreground))"
              label={{ value: "Public Company Performance Index", angle: -90, position: 'insideLeft', offset: 0, fill: "hsl(var(--foreground))" }}
              domain={[0, 25]} // Adjusted Y-axis domain
            />
            <ZAxis type="number" dataKey="relativeStrength" range={[100, 2000]} name="Relative Strength" unit="" />
            <ChartTooltip
              cursor={{ strokeDasharray: '3 3' }}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const dataPoint = payload[0].payload as BubbleChartDataPoint;
                  return (
                    <ChartTooltipContent className="bg-popover text-popover-foreground rounded-lg shadow-lg p-3">
                      <p className="font-bold text-lg" style={{color: dataPoint.fill}}>{dataPoint.name}</p>
                      <p>EQT owned Performance: {dataPoint.privatePerformance}</p>
                      <p>Public Performance: {dataPoint.publicPerformance}</p>
                      <p>Relative Strength: {dataPoint.relativeStrength}</p>
                    </ChartTooltipContent>
                  );
                }
                return null;
              }}
            />
            {data.map((point) => (
              <Scatter key={point.id} name={point.name} data={[point]} fill={point.fill} shape="circle">
                 <LabelList 
                  dataKey="name" 
                  position="top" // Changed position from "center" to "top"
                  offset={8} // Added offset to push label slightly above the bubble
                  fill="hsl(var(--foreground))" // Changed fill to main foreground color
                  fontSize={10}
                  formatter={(value: string) => {
                    // Shorten name if too long for bubble
                    return value.length > 10 ? value.substring(0,7) + '...' : value;
                  }}
                />
              </Scatter>
            ))}
          </ScatterChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  );
}

