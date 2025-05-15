// src/lib/chart-config.ts
import type { BubbleChartDataPoint } from '@/lib/types';

export const bubbleChartData: BubbleChartDataPoint[] = [
  {
    id: 'tech_bubble',
    name: 'Telecommunication Services',
    privatePerformance: 38,
    publicPerformance: 12,
    relativeStrength: 120,
    fill: 'hsl(var(--chart-1))',
    topPerformingCompanies: ['Ginko (150%)', 'Freepik (120%)', 'Billtrust (110%)']
  },
  {
    id: 'market_insights_bubble',
    name: 'Software & Services',
    privatePerformance: 24,
    publicPerformance: 8,
    relativeStrength: 90,
    fill: 'hsl(var(--chart-2))',
    topPerformingCompanies: ['GeneDX (1650%)', 'Rigetti (1426%)', 'D-wave Quantum (854%)']
  },
  {
    id: 'finance_bubble',
    name: 'Media & Entertainment',
    privatePerformance: 35,
    publicPerformance: 12,
    relativeStrength: 105,
    fill: 'hsl(var(--chart-3))',
    topPerformingCompanies: ['Media Streaming Co (140%)', 'Entertainment Hub (122%)', 'Gaming World (105%)']
  },
  {
    id: 'sector4',
    name: 'Banks',
    privatePerformance: 29,
    publicPerformance: 12,
    relativeStrength: 105,
    fill: 'hsl(var(--chart-3))',
    topPerformingCompanies: ['Global Bank Corp (95%)', 'SecureTrust Bank (88%)', 'DigitalFin (80%)']
  },
  {
    id: 'sector5',
    name: 'Telecommunication Services', // Note: Duplicate name, consider uniqueness if needed for other logic
    privatePerformance: 28,
    publicPerformance: 12,
    relativeStrength: 105,
    fill: 'hsl(var(--chart-3))',
    topPerformingCompanies: ['ConnectAll (110%)', 'SpeedLink (102%)', 'DataWave (98%)']
  },
  {
    id: 'sector6',
    name: 'Insurance',
    privatePerformance: 19,
    publicPerformance: 12,
    relativeStrength: 105,
    fill: 'hsl(var(--chart-3))',
    topPerformingCompanies: ['InsurePro (70%)', 'SafeGuard (65%)', 'Assurance Plus (60%)']
  }
  // You can add or modify more data points here
];
