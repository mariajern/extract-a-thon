// src/lib/chart-config.ts
import type { BubbleChartDataPoint } from '@/lib/types';

export const bubbleChartData: BubbleChartDataPoint[] = [
  {
    id: 'tech_bubble',
    name: 'Telecommunication Services',
    privatePerformance: 36,
    publicPerformance: 12,
    relativeStrength: 120,
    fill: 'hsl(var(--chart-1))',
    topPerformingCompanies: ['Reintel (77%)', 'Intelsat (74%)', 'Lyntia Networks (66%)'],
    topEQTPerformingCompanies: ['Melita (67%)', 'GlobalConnect (50%)', 'DeltaFiber (49%)']
  },
  {
    id: 'market_insights_bubble',
    name: 'Media & Entertainment',
    privatePerformance: 32,
    publicPerformance: 12,
    relativeStrength: 110,
    fill: 'hsl(var(--chart-2))',
    topPerformingCompanies: ['GeneDX (1650%)', 'Rigetti (1426%)', 'D-wave Quantum (854%)'],
    topEQTPerformingCompanies: ['EQT Cloud Solutions (210%)', 'EQT Data Analytics (190%)', 'EQT AI Platform (170%)']
  },
  {
    id: 'finance_bubble',
    name: 'Software & Services',
    privatePerformance: 24,
    publicPerformance: 9,
    relativeStrength: 105,
    fill: 'hsl(var(--chart-3))',
    topPerformingCompanies: ['Media Streaming Co (140%)', 'Entertainment Hub (122%)', 'Gaming World (105%)'],
    topEQTPerformingCompanies: ['EQT Studios (155%)', 'EQT Gaming (135%)', 'EQT Media Network (115%)']
  },
  {
    id: 'sector4',
    name: 'Capital Goods',
    privatePerformance: 21,
    publicPerformance: 10,
    relativeStrength: 100,
    fill: 'hsl(var(--chart-3))',
    topPerformingCompanies: ['Global Bank Corp (95%)', 'SecureTrust Bank (88%)', 'DigitalFin (80%)'],
    topEQTPerformingCompanies: ['EQT Investment Bank (100%)', 'EQT Retail Bank (90%)', 'EQT Digital Finance (85%)']
  },
  {
    id: 'sector5',
    name: 'Transportation', // Note: Duplicate name, consider uniqueness if needed for other logic
    privatePerformance: 2,
    publicPerformance: 10,
    relativeStrength: 95,
    fill: 'hsl(var(--chart-3))',
    topPerformingCompanies: ['ConnectAll (110%)', 'SpeedLink (102%)', 'DataWave (98%)'],
    topEQTPerformingCompanies: ['EQT Infra Comms (115%)', 'EQT Mobile (105%)', 'EQT Broadband (95%)']
  },
  {
    id: 'sector6',
    name: 'Commercial & Professional Services',
    privatePerformance: 20,
    publicPerformance: 10,
    relativeStrength: 90,
    fill: 'hsl(var(--chart-3))',
    topPerformingCompanies: ['InsurePro (70%)', 'SafeGuard (65%)', 'Assurance Plus (60%)'],
    topEQTPerformingCompanies: ['EQT InsureTech (75%)', 'EQT Life Assurance (68%)', 'EQT General Insurance (62%)']
  }
  // You can add or modify more data points here
];
