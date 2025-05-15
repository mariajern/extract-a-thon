// src/lib/chart-config.ts
import type { BubbleChartDataPoint } from '@/lib/types';

export const bubbleChartData: BubbleChartDataPoint[] = [
  { 
    id: 'tech_bubble', 
    name: 'Transportation', 
    privatePerformance: 26, 
    publicPerformance: 10, 
    relativeStrength: 120, 
    fill: 'hsl(var(--chart-1))' 
  },
  { 
    id: 'market_insights_bubble', 
    name: 'Media & Entertainment', 
    privatePerformance: 24, 
    publicPerformance: 12, 
    relativeStrength: 90, 
    fill: 'hsl(var(--chart-2))' 
  },
  { 
    id: 'finance_bubble', 
    name: 'Software Services', 
    privatePerformance: 19, 
    publicPerformance: 8, 
    relativeStrength: 105, 
    fill: 'hsl(var(--chart-3))' 
  },
  // You can add or modify more data points here
];
