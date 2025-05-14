
"use client";

import type { SectorData } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, TrendingDown, Cpu, HeartPulse, Zap, Landmark, Trophy, type LucideIcon } from 'lucide-react';
import ConfettiAnimation from './ConfettiAnimation';
import Image from 'next/image'; // Import next/image

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
      
      {sector.id === 'tech' ? (
        // 2x2 Grid for Tech Sector
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl mb-8">
          {/* Item 1: Performance Metric Card */}
          <Card className="bg-card/80 backdrop-blur-sm shadow-xl h-full">
            <CardHeader className="p-3">
              <CardTitle className="text-primary flex items-center justify-center text-2xl">
                {sector.performanceMetricName}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center p-3 pt-0">
              <p className="text-5xl font-bold text-accent">{sector.currentValue}{valueSuffix}</p>
              <p className={`text-lg flex items-center justify-center mt-2 ${isPositiveChange ? 'text-accent' : 'text-destructive'}`}>
                {isPositiveChange ? <TrendingUp className="mr-2 h-5 w-5" /> : <TrendingDown className="mr-2 h-5 w-5" />}
                {Math.abs(performanceChange).toFixed(valueSuffix === "%" ? 1 : 0)}{valueSuffix} vs Market
              </p>
              <p className="text-xs text-muted-foreground mt-4">* Gross margin</p>
            </CardContent>
          </Card>

          {/* Item 2: Top EQT Sector companies Card */}
          <Card className="bg-card/80 backdrop-blur-sm shadow-xl h-full">
            <CardHeader className="p-3">
              <CardTitle className="text-primary text-2xl text-center">Top EQT Sector companies</CardTitle>
            </CardHeader>
            <CardContent className="p-3 pt-0">
              <ul className="space-y-2 text-center">
                {sector.topCompanies.slice(0, 3).map((company) => (
                  <li key={company} className="text-lg text-foreground">{company}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Item 3: "At a glance" Card */}
          <Card className="bg-[#85215D] text-white shadow-xl border border-[#85215D] h-full">
            <CardHeader className="p-3">
              <CardTitle className="text-white text-2xl text-left">At a glance</CardTitle>
            </CardHeader>
            <CardContent className="p-3 pt-0 space-y-2 text-left">
              <div>
                <div className="flex justify-between items-center text-sm">
                  <span>Sector Size</span>
                  <span className="font-semibold">10-60M EUR</span>
                </div>
                <hr className="border-white/30 my-1" />
              </div>
              <div>
                <div className="flex justify-between items-center text-sm">
                  <span>Sector companies</span>
                  <span className="font-semibold">65+</span>
                </div>
                <hr className="border-white/30 my-1" />
              </div>
              <div>
                <div className="flex justify-between items-center text-sm">
                  <span>Investment Advisory Professionals</span>
                  <span className="font-semibold">30+</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Item 4: Image */}
          <div className="rounded-md overflow-hidden shadow-xl h-full bg-card/80"> {/* Added bg for consistency if image doesn't load */}
            <Image
              src="https://placehold.co/600x400.png" 
              alt="Technology Sector Visual"
              width={300} 
              height={200} // These are for aspect ratio hint, actual size controlled by CSS
              className="rounded-md object-cover w-full h-full"
              data-ai-hint="technology innovation"
            />
          </div>
        </div>
      ) : (
        // Original 2-column layout for other sectors
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl mb-8">
          {/* Column 1: Performance Metric Card */}
          <div className="flex flex-col gap-6 h-full"> {/* Ensured h-full for consistency */}
            <Card className="bg-card/80 backdrop-blur-sm shadow-xl h-full"> {/* Ensured h-full */}
              <CardHeader className="p-3">
                <CardTitle className="text-primary flex items-center justify-center text-2xl">
                  {sector.performanceMetricName}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center p-3 pt-0">
                <p className="text-5xl font-bold text-accent">{sector.currentValue}{valueSuffix}</p>
                <p className={`text-lg flex items-center justify-center mt-2 ${isPositiveChange ? 'text-accent' : 'text-destructive'}`}>
                  {isPositiveChange ? <TrendingUp className="mr-2 h-5 w-5" /> : <TrendingDown className="mr-2 h-5 w-5" />}
                  {Math.abs(performanceChange).toFixed(valueSuffix === "%" ? 1 : 0)}{valueSuffix} vs Market
                </p>
                <p className="text-xs text-muted-foreground mt-4">* Gross margin</p>
              </CardContent>
            </Card>
          </div>

          {/* Column 2: Top EQT Sector companies Card */}
          <div className="flex flex-col gap-6 h-full"> {/* Ensured h-full for consistency */}
            <Card className="bg-card/80 backdrop-blur-sm shadow-xl h-full">
              <CardHeader className="p-3">
                <CardTitle className="text-primary text-2xl text-center">Top EQT Sector companies</CardTitle>
              </CardHeader>
              <CardContent className="p-3 pt-0">
                <ul className="space-y-2 text-center">
                  {sector.topCompanies.slice(0, 3).map((company) => (
                    <li key={company} className="text-lg text-foreground">{company}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}

