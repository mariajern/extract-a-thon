// src/lib/chart-config.ts
import type { BubbleChartDataPoint } from '@/lib/types';

export const bubbleChartData: BubbleChartDataPoint[] = [
  { 
    id: 'tech_bubble', 
    name: 'Technology', 
    privatePerformance: 85, 
    publicPerformance: 75, 
    relativeStrength: 120, 
    fill: 'hsl(var(--chart-1))' 
  },
  { 
    id: 'market_insights_bubble', 
    name: 'Market Insights', 
    privatePerformance: 70, 
    publicPerformance: 65, 
    relativeStrength: 90, 
    fill: 'hsl(var(--chart-2))' 
  },
  { 
    id: 'finance_bubble', 
    name: 'FinTech', 
    privatePerformance: 78, 
    publicPerformance: 80, 
    relativeStrength: 105, 
    fill: 'hsl(var(--chart-3))' 
  },
  // You can add or modify more data points here
];
