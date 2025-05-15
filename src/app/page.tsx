
'use client';

import { useState, useEffect, useMemo } from 'react';
import TopSectorSpotlight from '@/components/TopSectorSpotlight';
import SectorBubbleChart from '@/components/SectorBubbleChart';
import Footer from '@/components/Footer';
import type { SectorData } from '@/lib/types';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Separator } from "@/components/ui/separator";
import { ArrowDown } from 'lucide-react';
import { bubbleChartData } from '@/lib/chart-config'; // Import configured chart data
import ConfettiAnimation from '@/components/ConfettiAnimation';


// Mock Data
const topSectorsData: SectorData[] = [
  {
    id: 'tech',
    name: bubbleChartData[0].name, // Use name from the first entry of bubbleChartData
    performanceMetricName: '5-Year Growth*',
    currentValue: 22,
    comparisonValue: 15,
    valueUnit: '%',
    iconName: 'Trophy',
    topCompanies: ['Ginko (150%)', 'Freepik (120%)', 'Billtrust (110%)'],
    description: "Leading the charge with groundbreaking innovations and strong market adoption.",
    dataAiHint: "technology award"
  },
  {
    id: 'market-insights',
    name: `${bubbleChartData[0].name} Market Insights`, // Updated name
    performanceMetricName: 'YoY Growth',
    currentValue: 22,
    comparisonValue: 15,
    valueUnit: '%',
    iconName: 'TrendingUp',
    topCompanies: ['GeneDX (1650%)', 'Rigetti (1426%)', 'D-wave Quantum (854%)'],
    description: "Median market growth for the top segments*.",
    dataAiHint: "market analysis"
  },
  {
    id: 'segment-performance',
    name: 'Segment Performance',
    performanceMetricName: 'Capacity Increase',
    currentValue: 1500,
    comparisonValue: 1200,
    valueUnit: '%',
    iconName: 'Zap',
    topCompanies: ['GreenVolt Ltd.', 'Solaris Energy', 'WindPower Co.'],
    description: "Growth Overview by Segment",
    dataAiHint: "segment growth"
  },
];

// This variable seems related but not directly used by SectorBubbleChart.
// If it's part of the bubble chart configuration, it might also need to move.
// For now, leaving it as the request was specific to the chart's direct data.
const bubbleChartSectors: SectorData[] = [
  { ...topSectorsData[0], id: 'bubble_tech', iconName: 'Trophy', dataAiHint: "technology award" },
  { ...topSectorsData[1], id: 'bubble_market_insights', iconName: 'TrendingUp', dataAiHint: "market analysis" },
  {
    id: 'bubble_finance',
    name: 'FinTech',
    performanceMetricName: 'Adoption Rate',
    currentValue: 30,
    comparisonValue: 20,
    valueUnit: '%',
    iconName: 'Landmark',
    topCompanies: ['PaySwift', 'CryptoSecure', 'InvestEasy'],
    description: "Disrupting traditional finance with innovative payment and investment solutions.",
    dataAiHint: "finance technology"
  }
];

const segments = [
  'Advertising & Marketing',
  'Artificial Intelligence & Machine Learning',
  'Climate',
  'Con/Prosumer Tech',
  'Consumer',
  'Consumer Goods',
  'Debt investments',
  'Digital',
  'Digital Business Process Solution (BPS)',
  'Digital Health',
  'Drug Development',
  'Ecommerce & Services',
  'Education',
  'Energy',
  'Enterprise Tech',
  'Entertainment Social',
  'Environmental',
  'Finance Insurance',
  'Financial Services',
  'HR',
  'Health',
  'Healthcare',
  'Industrial Technology',
  'Industrials',
  'Medical Devices',
  'Ops & Dev tools',
  'Other',
  'Real Estate & Construction',
  'Resources & Construction',
  'Scout Program',
  'Services',
  'Social',
  'Software',
  'Software Development',
  'Tech Services',
  'Technology',
  'Telecom',
  'Transport & Logistics',
  'Transportation & Tourism',
];

function generateRandomGrowth() {
  // Ensure this function only runs on the client
  if (typeof window === 'undefined') {
    return 0; // Or some default server value
  }
  return Math.floor(Math.random() * (250 - (-20) + 1)) + (-20);
}

// bubbleChartData is now imported from '@/lib/chart-config.ts'

export default function HomePage() {
  const [segmentPerformanceData, setSegmentPerformanceData] = useState<{segment: string, growth: number}[]>([]);

  useEffect(() => {
    const data = segments.map(segment => ({
      segment, growth: generateRandomGrowth()
    }));
    setSegmentPerformanceData(data);
  }, []);

  const sortedSegmentData = useMemo(() => {
    return [...segmentPerformanceData].sort((a, b) => b.growth - a.growth);
  }, [segmentPerformanceData]);

  const topPerformingSegments = useMemo(() => {
    return sortedSegmentData.slice(0, 15);
  }, [sortedSegmentData]);

  const leastPerformingSegments = useMemo(() => {
    return sortedSegmentData.slice(-15).sort((a, b) => a.growth - b.growth);
  }, [sortedSegmentData]);


  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="bg-card py-24 sm:py-32 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-primary mb-4 animate-fade-in-down">
            The EQT Sector Race
          </h1>
          <Separator className="my-8 h-1 bg-muted-foreground" />
          <p className="text-lg sm:text-xl text-muted-foreground animate-fade-in-up delay-300 mt-6">
            Understand how EQT sectors and portfolio companies perform against market competitors
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 text-center">
        <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary text-center mt-6 mb-32 animate-fade-in-up delay-300">
          The best performing sector is ...
        </p>
      </div>

      <div className="text-center mb-4">
        <ArrowDown className="w-24 h-24 text-[#deacd6] mx-auto invisible" />
      </div>

      <main className="flex-grow">
        <section className="min-h-screen w-full flex flex-col items-center justify-center py-12 px-6 sm:py-12 sm:px-12 relative">
          <TopSectorSpotlight sector={topSectorsData[0]} showConfetti={true} />
        </section>

        <section className="min-h-screen w-full flex flex-col items-center justify-center py-12 px-6 sm:py-12 sm:px-12 relative bg-background">
           <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4 text-center">Sector Landscape</h2>
            <p className="text-lg text-muted-foreground text-center mb-8">Top Sectors vs. Public Market Performance</p>
          <SectorBubbleChart data={bubbleChartData} />
        </section>

        <section className="min-h-screen w-full flex flex-col items-center justify-center py-12 px-6 sm:py-12 sm:px-12 relative bg-background">
           <TopSectorSpotlight sector={topSectorsData[1]} />
        </section>

        <section className="w-full flex flex-col items-center justify-center p-6 sm:p-12 relative bg-background">
           <TopSectorSpotlight sector={topSectorsData[2]}>
             {segmentPerformanceData.length === 0 ? (
                <div className="w-full text-center text-muted-foreground py-10 col-span-1 md:col-span-2">
                  Loading segment data...
                </div>
             ) : (
               <div className="flex flex-col md:flex-row gap-6 mt-12 w-full max-w-4xl mx-auto mb-12">
                <div className="flex-1 bg-card p-4 rounded-lg shadow-xl">
                  <h3 className="text-xl font-semibold mb-4 text-center text-primary">Top 15 Segments</h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-muted-foreground font-semibold">Segments</TableHead>
                        <TableHead className="text-muted-foreground text-right font-semibold">Growth</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {topPerformingSegments.map(({ segment, growth }) => (
                        <TableRow key={segment}>
                          <TableCell className="font-medium text-foreground">{segment}</TableCell>
                          <TableCell 
                            className={`text-right font-medium ${
                              growth >= 0 ? 'text-accent' : 'text-[#ff6600]'
                            }`}
                          >
                            {growth}%
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                <div className="flex-1 bg-card p-4 rounded-lg shadow-xl">
                  <h3 className="text-xl font-semibold mb-4 text-center text-primary">Bottom 15 Segments</h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-muted-foreground font-semibold">Segments</TableHead>
                        <TableHead className="text-muted-foreground text-right font-semibold">Growth</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {leastPerformingSegments.map(({ segment, growth }) => (
                        <TableRow key={segment}>
                          <TableCell className="font-medium text-foreground">{segment}</TableCell>
                          <TableCell 
                            className={`text-right font-medium ${
                              growth >= 0 ? 'text-accent' : 'text-[#ff6600]'
                            }`}
                          >
                            {growth}%
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
               </div>
             )}
           </TopSectorSpotlight>
        </section>
      </main>

      <Footer />
    </div>
  );
}

