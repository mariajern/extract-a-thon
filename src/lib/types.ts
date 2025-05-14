import type { LucideIcon } from 'lucide-react';

export interface SectorData {
  id: string;
  name: string;
  performanceMetricName: string;
  currentValue: number;
  comparisonValue: number;
  valueUnit?: string; // e.g., "%", "M USD"
  iconName: string; // Changed from icon: LucideIcon to iconName: string
  topCompanies: string[];
  description?: string; // Optional brief description or context
  dataAiHint: string; // For placeholder image
}

export interface BubbleChartDataPoint {
  id: string;
  name: string; // Sector name
  privatePerformance: number; // x-axis or a performance metric
  publicPerformance: number; // y-axis or another performance metric
  relativeStrength: number; // z-axis / bubble size (e.g., market cap, growth rate)
  fill: string; // color for the bubble
}
