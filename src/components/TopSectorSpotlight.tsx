"use client";

import type { SectorData } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'; // Removed CardDescription as it's not used
import { TrendingUp, TrendingDown, Cpu, HeartPulse, Zap, Landmark, type LucideIcon } from 'lucide-react';
import Image from 'next/image';

interface TopSectorSpotlightProps {
  sector: SectorData;
}

const iconComponents: Record<string, LucideIcon> = {
  Cpu,
  HeartPulse,
  Zap,
  Landmark, // Added Landmark for completeness, though not directly used by topSectorsData in page.tsx
  // Add other icons here if SectorData might use them with this component
};

export default function TopSectorSpotlight({ sector }: TopSectorSpotlightProps) {
  const performanceChange = sector.currentValue - sector.comparisonValue;
  const isPositiveChange = performanceChange >= 0;
  const valueSuffix = sector.valueUnit || "";

  const IconToRender = sector.iconName ? iconComponents[sector.iconName] : null;

  return (
    <div className="w-full max-w-4xl text-center flex flex-col items-center justify-center p-4">
      {IconToRender && <IconToRender className="w-24 h-24 md:w-32 md:h-32 text-accent mb-6" />}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4">{sector.name}</h1>
      <p className="text-lg sm:text-xl text-muted-foreground mb-8">{sector.description || `Key insights for the ${sector.name} sector.`}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl mb-8">
        <Card className="bg-card/80 backdrop-blur-sm shadow-xl">
          <CardHeader>
            <CardTitle className="text-primary flex items-center justify-center text-2xl">
              {sector.performanceMetricName}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-5xl font-bold text-accent">{sector.currentValue}{valueSuffix}</p>
            <p className={`text-lg flex items-center justify-center mt-2 ${isPositiveChange ? 'text-green-400' : 'text-red-400'}`}>
              {isPositiveChange ? <TrendingUp className="mr-2 h-5 w-5" /> : <TrendingDown className="mr-2 h-5 w-5" />}
              {Math.abs(performanceChange).toFixed(valueSuffix === "%" ? 1 : 0)}{valueSuffix} vs comparison
            </p>
          </CardContent>
        </Card>
        <Card className="bg-card/80 backdrop-blur-sm shadow-xl">
          <CardHeader>
            <CardTitle className="text-primary text-2xl text-center">Top Performers</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-center">
              {sector.topCompanies.slice(0, 3).map((company) => (
                <li key={company} className="text-lg text-foreground">{company}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
      
      <Image
        src={`https://placehold.co/800x400.png`}
        alt={`${sector.name} sector visualization placeholder`}
        width={800}
        height={400}
        className="rounded-lg shadow-2xl object-cover opacity-30 mix-blend-overlay"
        data-ai-hint={sector.dataAiHint}
      />
    </div>
  );
}
