
'use client';

import TopSectorSpotlight from '@/components/TopSectorSpotlight';
import SectorBubbleChart from '@/components/SectorBubbleChart';
import Footer from '@/components/Footer';
import type { SectorData } from '@/lib/types';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Separator } from "@/components/ui/separator";
import { ArrowDown } from 'lucide-react';
import { bubbleChartData } from '@/lib/chart-config'; // Import configured chart data


// Mock Data
const topSectorsData: SectorData[] = [
  {
    id: 'tech',
    name: bubbleChartData[0].name, // Use name from the first entry of bubbleChartData
    performanceMetricName: '5-Year Growth*',
    currentValue: bubbleChartData[0].privatePerformance,
    comparisonValue: 15,
    valueUnit: '%',
    iconName: 'Trophy',
    topCompanies: bubbleChartData[0].topEQTPerformingCompanies || [], // Use EQT specific companies for tech
    description: "Leading the charge with groundbreaking innovations and strong market adoption.",
    dataAiHint: "technology award"
  },
  {
    id: 'market-insights',
    name: `${bubbleChartData[0].name} Market Insights`,
    performanceMetricName: 'YoY Growth',
    currentValue: bubbleChartData[1].publicPerformance,
    comparisonValue: 15,
    valueUnit: '%',
    iconName: 'TrendingUp',
    topCompanies: bubbleChartData[0].topPerformingCompanies || [], // Updated to fetch from bubbleChartData[0]
    description: "Median market growth for the top segments*.",
    dataAiHint: "market analysis"
  },
  {
    id: 'segment-performance',
    name: 'Sector Performance',
    performanceMetricName: 'Capacity Increase',
    currentValue: 1500,
    comparisonValue: 1200,
    valueUnit: '%',
    iconName: 'Zap',
    topCompanies: bubbleChartData[2].topPerformingCompanies || [],
    description: "Growth Overview by Sector",
    dataAiHint: "segment growth"
  },
];

const topPerformingSectorsFromConfig = bubbleChartData.slice(0, 3).map(item => ({
  segment: item.name,
  growth: item.privatePerformance,
}));

const leastPerformingSectorsFromConfig = bubbleChartData.slice(3, 6).map(item => ({
  segment: item.name,
  growth: item.publicPerformance,
}));


export default function HomePage() {
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
               <div className="flex flex-col md:flex-row gap-6 mt-12 w-full max-w-4xl mx-auto mb-12">
                <div className="flex-1 bg-card p-4 rounded-lg shadow-xl">
                  <h3 className="text-xl font-semibold mb-4 text-center text-primary">Top 3 Sectors</h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-muted-foreground font-semibold text-left">Sectors</TableHead>
                        <TableHead className="text-muted-foreground text-right font-semibold">Growth</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {topPerformingSectorsFromConfig.map(({ segment, growth }) => (
                        <TableRow key={segment}>
                          <TableCell className="font-medium text-foreground text-left">{segment}</TableCell>
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
                  <h3 className="text-xl font-semibold mb-4 text-center text-primary">Bottom 3 Sectors</h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-muted-foreground font-semibold text-left">Sectors</TableHead>
                        <TableHead className="text-muted-foreground text-right font-semibold">Growth</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {leastPerformingSectorsFromConfig.map(({ segment, growth }) => (
                        <TableRow key={segment}>
                          <TableCell className="font-medium text-foreground text-left">{segment}</TableCell>
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
           </TopSectorSpotlight>
        </section>
      </main>

      <Footer />
    </div>
  );
}
