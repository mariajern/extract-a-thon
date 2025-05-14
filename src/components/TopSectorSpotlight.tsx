
"use client";

import type { SectorData } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, TrendingDown, Cpu, HeartPulse, Zap, Landmark, Trophy, type LucideIcon } from 'lucide-react';
import ConfettiAnimation from './ConfettiAnimation';

interface TopSectorSpotlightProps {
  sector: SectorData;
}

const iconComponents: Record<string, LucideIcon> = {
  Cpu,
  HeartPulse,
  Zap,
  Landmark,
  Trophy,
};

export default function TopSectorSpotlight({ sector }: TopSectorSpotlightProps) {
  const performanceChange = sector.currentValue - sector.comparisonValue;
  const isPositiveChange = performanceChange >= 0;
  const valueSuffix = sector.valueUnit || "";

  const IconToRender = sector.iconName ? iconComponents[sector.iconName] : null;

  return (
    <div className="w-full max-w-4xl text-center flex flex-col items-center justify-center p-4">
      <div className="relative flex flex-col items-center justify-center mb-6"> {/* Wrapper for icon and confetti */}
        {IconToRender && (
          <IconToRender className="w-24 h-24 md:w-32 md:h-32 text-accent" />
        )}
        {sector.id === 'tech' && <ConfettiAnimation />}
      </div>
      
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4">{sector.name}</h1>
      <p className="text-lg sm:text-xl text-muted-foreground mb-8">{sector.description || `Key insights for the ${sector.name} sector.`}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl mb-8"> {/* Changed max-w-2xl to max-w-3xl */}
        <Card className="bg-card/80 backdrop-blur-sm shadow-xl">
          <CardHeader className="p-3"> {/* Adjusted padding */}
            <CardTitle className="text-primary flex items-center justify-center text-2xl">
              {sector.performanceMetricName}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center p-3 pt-0"> {/* Adjusted padding */}
            <p className="text-5xl font-bold text-accent">{sector.currentValue}{valueSuffix}</p>
            <p className={`text-lg flex items-center justify-center mt-2 ${isPositiveChange ? 'text-accent' : 'text-destructive'}`}>
              {isPositiveChange ? <TrendingUp className="mr-2 h-5 w-5" /> : <TrendingDown className="mr-2 h-5 w-5" />}
              {Math.abs(performanceChange).toFixed(valueSuffix === "%" ? 1 : 0)}{valueSuffix} vs Market
            </p>
            <p className="text-xs text-muted-foreground mt-4">* Gross margin</p>
          </CardContent>
        </Card>
        <Card className="bg-card/80 backdrop-blur-sm shadow-xl">
          <CardHeader className="p-3"> {/* Adjusted padding */}
            <CardTitle className="text-primary text-2xl text-center">Top EQT Sector companies</CardTitle>
          </CardHeader>
          <CardContent className="p-3 pt-0"> {/* Adjusted padding */}
            <ul className="space-y-2 text-center">
              {sector.topCompanies.slice(0, 3).map((company) => (
                <li key={company} className="text-lg text-foreground">{company}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
      
    </div>
  );
}
