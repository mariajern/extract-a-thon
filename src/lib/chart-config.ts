// src/lib/chart-config.ts
import type { BubbleChartDataPoint } from '@/lib/types';

export const bubbleChartData: BubbleChartDataPoint[] = [
  { 
    id: 'tech_bubble', 
    name: 'Telecommunication Services', 
    privatePerformance: 38, 
    publicPerformance: 12, 
    relativeStrength: 120, 
    fill: 'hsl(var(--chart-1))' 
  },
  { 
    id: 'market_insights_bubble', 
    name: 'Software & Services', 
    privatePerformance: 24, 
    publicPerformance: 8, 
    relativeStrength: 90, 
    fill: 'hsl(var(--chart-2))' 
  },
  { 
    id: 'finance_bubble', 
    name: 'Media & Entertainment', 
    privatePerformance: 35, 
    publicPerformance: 12, 
    relativeStrength: 105, 
    fill: 'hsl(var(--chart-3))' 
  },
  { 
    id: 'sector4', 
    name: 'Banks', 
    privatePerformance: 29, 
    publicPerformance: 12, 
    relativeStrength: 105, 
    fill: 'hsl(var(--chart-3))' 
  },
  { 
    id: 'sector5', 
    name: 'Telecommunication Services', 
    privatePerformance: 28, 
    publicPerformance: 12, 
    relativeStrength: 105, 
    fill: 'hsl(var(--chart-3))' 
  },
  { 
    id: 'sector6', 
    name: 'Insurance', 
    privatePerformance: 19, 
    publicPerformance: 12, 
    relativeStrength: 105, 
    fill: 'hsl(var(--chart-3))' 
  }
  // You can add or modify more data points here
];
