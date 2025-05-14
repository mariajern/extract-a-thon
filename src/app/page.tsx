
import TopSectorSpotlight from '@/components/TopSectorSpotlight';
import SectorBubbleChart from '@/components/SectorBubbleChart';
import Footer from '@/components/Footer'; // Import Footer
import type { SectorData, BubbleChartDataPoint } from '@/lib/types';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Separator } from "@/components/ui/separator";
import { Cpu, HeartPulse, Landmark, TrendingUp, Zap, ShoppingBag, Factory, Trophy } from 'lucide-react';
import ConfettiAnimation from '@/components/ConfettiAnimation'; // Import ConfettiAnimation

// Mock Data
const topSectorsData: SectorData[] = [
  {
    id: 'tech',
    name: 'Technology',
    performanceMetricName: '5-Year Growth*',
    currentValue: 22,
    comparisonValue: 15,
    valueUnit: '%',
    iconName: 'Trophy', // Updated icon
    topCompanies: ['Ginko (150%)', 'Freepik (120%)', 'Billtrust (110%)'],
    description: "Leading the charge with groundbreaking innovations and strong market adoption.",
    dataAiHint: "technology award"
  },
  {
    id: 'health',
    name: 'Market Insights',
    performanceMetricName: '5-Year Growth*',
    currentValue: 22,
    comparisonValue: 15,
    valueUnit: '%',
    iconName: 'TrendingUp', // Changed to TrendingUp
    topCompanies: ['GeneDX (1650%)', 'Rigetti (1426%)', 'D-wave Quantum (854%)'],
    description: "Leading the charge with groundbreaking innovations and strong market adoption.",
    dataAiHint: "healthcare medical"
  },
  {
    id: 'energy',
    name: 'Segment Performance',
    performanceMetricName: 'Capacity Increase',
    currentValue: 1500,
    comparisonValue: 1200,
    valueUnit: '%', // Changed to %
    iconName: 'Zap',
    topCompanies: ['GreenVolt Ltd.', 'Solaris Energy', 'WindPower Co.'],
    description: "Rapid expansion fueled by global sustainability initiatives and tech improvements.",
    dataAiHint: "renewable energy"
  },
];

const bubbleChartSectors: SectorData[] = [
  { ...topSectorsData[0], id: 'bubble_tech', iconName: 'Trophy' },
  { ...topSectorsData[1], id: 'bubble_health', iconName: 'TrendingUp' },
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

// Generate data for the segment performance table
const segmentPerformanceData = segments.map(segment => ({
  segment, growth: generateRandomGrowth() }));

function generateRandomGrowth() {
  // Ensure this function runs only on the client or is consistent
  return Math.floor(Math.random() * (250 - (-20) + 1)) + (-20);
}


const bubbleChartData: BubbleChartDataPoint[] = [
  { id: 'tech_bubble', name: 'Technology', privatePerformance: 85, publicPerformance: 75, relativeStrength: 120, fill: 'hsl(var(--chart-1))' },
  { id: 'health_bubble', name: 'Market Insights', privatePerformance: 70, publicPerformance: 65, relativeStrength: 90, fill: 'hsl(var(--chart-2))' },
  { id: 'finance_bubble', name: 'FinTech', privatePerformance: 78, publicPerformance: 80, relativeStrength: 105, fill: 'hsl(var(--chart-3))' },
  // Add more bubble chart data as needed
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <ConfettiAnimation /> {/* Render confetti directly here for testing */}
      {/* Page Header */}
      <header className="py-12 sm:py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-header-main-title mb-4 animate-fade-in-down">
            The EQT Sector Race
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground animate-fade-in-up delay-200 mb-6">
            Tracking the Front-Runners and Laggards in the Market Arena
          </p>
          <Separator className="my-8 h-1 bg-muted-foreground" />
        </div>
      </header>

      <main className="flex-grow">
        {/* Section 1: Top Sector Spotlight - Best Performing */}
        <section className="min-h-screen w-full flex flex-col items-center justify-center py-12 px-6 sm:py-12 sm:px-12 relative">
          <TopSectorSpotlight sector={topSectorsData[0]} showConfetti={false} /> {/* Pass showConfetti=false */}
        </section>

        {/* Section 2: Sector Bubble Chart */}
        <section className="min-h-screen w-full flex flex-col items-center justify-center py-12 px-6 sm:py-12 sm:px-12 relative bg-background">
          <div className="text-center mb-8">
            <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-2">Sector Landscape</h2>
            <p className="text-lg text-muted-foreground">Top Sectors vs. Public Market Performance</p>
          </div>
          <SectorBubbleChart data={bubbleChartData} />
        </section>

        {/* Section 3: Top Sector Spotlight - Second Best */}
        <section className="min-h-screen w-full flex flex-col items-center justify-center py-12 px-6 sm:py-12 sm:px-12 relative bg-background">
           <TopSectorSpotlight sector={topSectorsData[1]} />
        </section>


        <section className="min-h-screen w-full flex flex-col items-center justify-center p-6 sm:p-12 relative bg-background">
           <TopSectorSpotlight sector={topSectorsData[2]} />
        </section>

        {/* Section 5: Segment Performance Table */}
        <section className="w-full flex flex-col items-center justify-center p-6 sm:p-12 relative bg-background">
          <div className="text-center mb-8">
            <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-2">Segment Performance</h2>
            <p className="text-lg text-muted-foreground">Growth Overview by Segment</p>
          </div>
          {/* Added styling for light grey background and width */}
          <div className="bg-gray-100 p-4 rounded-lg" style={{ width: '372px' }}> 
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Segments</TableHead>
                  <TableHead>Growth</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {segmentPerformanceData.map(({ segment, growth }) => (
                  <TableRow key={segment}>
                    <TableCell className="font-medium">{segment}</TableCell>
                    <TableCell>{growth}%</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
