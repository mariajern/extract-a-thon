import TopSectorSpotlight from '@/components/TopSectorSpotlight';
import SectorBubbleChart from '@/components/SectorBubbleChart';
import InsightSummary from '@/components/InsightSummary';
import type { SectorData, BubbleChartDataPoint } from '@/lib/types';
import { Cpu, HeartPulse, Landmark, TrendingUp, Zap, ShoppingBag, Factory } from 'lucide-react'; // Imports remain for other uses or future use

// Mock Data
const topSectorsData: SectorData[] = [
  {
    id: 'tech',
    name: 'Technology',
    performanceMetricName: 'YoY Growth',
    currentValue: 22,
    comparisonValue: 15,
    valueUnit: '%',
    iconName: 'Cpu',
    topCompanies: ['Innovate Corp', 'Future Solutions', 'Digital Dynamics'],
    description: "Leading the charge with groundbreaking innovations and strong market adoption.",
    dataAiHint: "technology future"
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
  { ...topSectorsData[0], id: 'bubble_tech' }, // Technology - will inherit iconName: 'Cpu'
  { ...topSectorsData[1], id: 'bubble_health' }, // Healthcare - will inherit iconName: 'HeartPulse'
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
    <main className="flex flex-col bg-background text-foreground">
      {/* Page Header */}
      <header className="py-12 sm:py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-primary mb-4 animate-fade-in-down">
            The EQT Sector Race
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground animate-fade-in-up delay-200">
            Tracking the Front-Runners and Laggards in the Market Arena
          </p>
        </div>
      </header>

      {/* Section 1: Top Sector Spotlight - Best Performing */}
      <section className="min-h-screen w-full flex flex-col items-center justify-center p-6 sm:p-12 relative overflow-hidden">
        <TopSectorSpotlight sector={topSectorsData[0]} />
        <div className="absolute bottom-4 sm:bottom-8 w-full max-w-lg sm:max-w-xl md:max-w-2xl px-4">
          <InsightSummary 
            input={{
              sector: topSectorsData[0].name,
              performanceMetric: topSectorsData[0].performanceMetricName,
              currentValue: topSectorsData[0].currentValue,
              comparisonValue: topSectorsData[0].comparisonValue,
              topCompanies: topSectorsData[0].topCompanies,
            }}
            title={`AI Insights: ${topSectorsData[0].name}`}
          />
        </div>
      </section>

      {/* Section 2: Top Sector Spotlight - Second Best */}
      <section className="min-h-screen w-full flex flex-col items-center justify-center p-6 sm:p-12 relative bg-background overflow-hidden">
         <TopSectorSpotlight sector={topSectorsData[1]} />
         <div className="absolute bottom-4 sm:bottom-8 w-full max-w-lg sm:max-w-xl md:max-w-2xl px-4">
          <InsightSummary
            input={{
              sector: topSectorsData[1].name,
              performanceMetric: topSectorsData[1].performanceMetricName,
              currentValue: topSectorsData[1].currentValue,
              comparisonValue: topSectorsData[1].comparisonValue,
              topCompanies: topSectorsData[1].topCompanies,
            }}
            title={`AI Insights: ${topSectorsData[1].name}`}
           />
        </div>
      </section>
      
      {/* Section 3: Top Sector Spotlight - Third Best */}
      <section className="min-h-screen w-full flex flex-col items-center justify-center p-6 sm:p-12 relative bg-background overflow-hidden">
         <TopSectorSpotlight sector={topSectorsData[2]} />
         <div className="absolute bottom-4 sm:bottom-8 w-full max-w-lg sm:max-w-xl md:max-w-2xl px-4">
          <InsightSummary
            input={{
              sector: topSectorsData[2].name,
              performanceMetric: topSectorsData[2].performanceMetricName,
              currentValue: topSectorsData[2].currentValue,
              comparisonValue: topSectorsData[2].comparisonValue,
              topCompanies: topSectorsData[2].topCompanies,
            }}
            title={`AI Insights: ${topSectorsData[2].name}`}
           />
        </div>
      </section>

      {/* Section 4: Sector Bubble Chart */}
      <section className="min-h-screen w-full flex flex-col items-center justify-center p-6 sm:p-12 relative bg-background overflow-hidden">
        <div className="text-center mb-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-2">Sector Landscape</h2>
          <p className="text-lg text-muted-foreground">Top Sectors vs. Public Market Performance</p>
        </div>
        <SectorBubbleChart data={bubbleChartData} />
        <div className="absolute bottom-4 sm:bottom-8 w-full max-w-lg sm:max-w-xl md:max-w-2xl px-4 mt-4">
          <InsightSummary
            input={{
              sector: "Overall Market (Top 3)", // Generic sector name for bubble chart
              performanceMetric: "Relative Strength and Performance",
              currentValue: bubbleChartData.reduce((sum, item) => sum + item.privatePerformance, 0) / bubbleChartData.length, // Average private performance
              comparisonValue: bubbleChartData.reduce((sum, item) => sum + item.publicPerformance, 0) / bubbleChartData.length, // Average public performance
              topCompanies: bubbleChartSectors.flatMap(s => s.topCompanies).slice(0,3), // Sample companies from sectors in chart
            }}
            title="AI Insights: Sector Comparison"
          />
        </div>
      </section>
    </main>
  );
}
