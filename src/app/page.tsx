
import TopSectorSpotlight from '@/components/TopSectorSpotlight';
import SectorBubbleChart from '@/components/SectorBubbleChart';
import Footer from '@/components/Footer'; // Import Footer
import type { SectorData, BubbleChartDataPoint } from '@/lib/types';
import { Cpu, HeartPulse, Landmark, TrendingUp, Zap, ShoppingBag, Factory, Trophy } from 'lucide-react'; 
import { Separator } from '@/components/ui/separator';

// Mock Data
const topSectorsData: SectorData[] = [
  {
    id: 'tech',
    name: 'Technology',
    performanceMetricName: 'YoY Growth',
    currentValue: 22,
    comparisonValue: 15,
    valueUnit: '%',
    iconName: 'Trophy', 
    topCompanies: ['Innovate Corp', 'Future Solutions', 'Digital Dynamics'],
    description: "Leading the charge with groundbreaking innovations and strong market adoption.",
    dataAiHint: "technology award"
  },
  {
    id: 'health',
    name: 'Healthcare',
    performanceMetricName: 'Investment Inflow',
    currentValue: 580,
    comparisonValue: 450,
    valueUnit: 'M USD',
    iconName: 'HeartPulse',
    topCompanies: ['WellCare Inc.', 'VitaHealth', 'MedPioneers'],
    description: "Significant advancements in medical tech and patient care driving sector growth.",
    dataAiHint: "healthcare medical"
  },
  {
    id: 'energy',
    name: 'Renewable Energy',
    performanceMetricName: 'Capacity Increase',
    currentValue: 1500,
    comparisonValue: 1200,
    valueUnit: 'MW',
    iconName: 'Zap',
    topCompanies: ['GreenVolt Ltd.', 'Solaris Energy', 'WindPower Co.'],
    description: "Rapid expansion fueled by global sustainability initiatives and tech improvements.",
    dataAiHint: "renewable energy"
  },
];

const bubbleChartSectors: SectorData[] = [
  { ...topSectorsData[0], id: 'bubble_tech', iconName: 'Trophy' }, 
  { ...topSectorsData[1], id: 'bubble_health', iconName: 'HeartPulse' }, 
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


const bubbleChartData: BubbleChartDataPoint[] = [
  { id: 'tech_bubble', name: 'Technology', privatePerformance: 85, publicPerformance: 75, relativeStrength: 120, fill: 'hsl(var(--chart-1))' },
  { id: 'health_bubble', name: 'Healthcare', privatePerformance: 70, publicPerformance: 65, relativeStrength: 90, fill: 'hsl(var(--chart-2))' },
  { id: 'finance_bubble', name: 'FinTech', privatePerformance: 78, publicPerformance: 80, relativeStrength: 105, fill: 'hsl(var(--chart-3))' },
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Page Header */}
      <header className="py-12 sm:py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-header-main-title mb-4 animate-fade-in-down">
            The EQT Sector Race
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground animate-fade-in-up delay-200 mb-6">
            Tracking the Front-Runners and Laggards in the Market Arena
          </p>
          <Separator className="my-6 sm:my-8 h-1 bg-muted-foreground" />
        </div>
      </header>

      <main className="flex-grow">
        {/* Section 1: Top Sector Spotlight - Best Performing */}
        <section className="min-h-screen w-full flex flex-col items-center justify-center p-6 sm:p-12 relative overflow-hidden">
          <TopSectorSpotlight sector={topSectorsData[0]} />
        </section>

        {/* Section 2: Sector Bubble Chart */}
        <section className="min-h-screen w-full flex flex-col items-center justify-center p-6 sm:p-12 relative bg-background overflow-hidden">
          <div className="text-center mb-8">
            <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-2">Sector Landscape</h2>
            <p className="text-lg text-muted-foreground">Top Sectors vs. Public Market Performance</p>
          </div>
          <SectorBubbleChart data={bubbleChartData} />
        </section>

        {/* Section 3: Top Sector Spotlight - Second Best */}
        <section className="min-h-screen w-full flex flex-col items-center justify-center p-6 sm:p-12 relative bg-background overflow-hidden">
           <TopSectorSpotlight sector={topSectorsData[1]} />
        </section>
        
        {/* Section 4: Top Sector Spotlight - Third Best */}
        <section className="min-h-screen w-full flex flex-col items-center justify-center p-6 sm:p-12 relative bg-background overflow-hidden">
           <TopSectorSpotlight sector={topSectorsData[2]} />
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
