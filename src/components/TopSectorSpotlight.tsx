
"use client";

import type { SectorData } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, TrendingDown, Cpu, HeartPulse, Zap, Landmark, Trophy, type LucideIcon } from 'lucide-react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table" // Import table components
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
      <div className="relative flex flex-col items-center justify-center mb-6">
        {IconToRender && (
          <IconToRender className="w-24 h-24 md:w-32 md:h-32 text-accent" />
        )}
      </div>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4">{sector.name}</h1>
      <p className="text-lg sm:text-xl text-muted-foreground mb-8">{sector.description || `Key insights for the ${sector.name} sector.`}</p>

        // 2x2 Grid for Tech Sector
          {/* Item 4: Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <div className="rounded-md overflow-hidden shadow-xl h-full bg-card/80">
            <Image
              src="https://placehold.co/600x400.png" 
              alt="Technology Sector Visual"
              width={600} 
              height={400} 
              className="rounded-md object-cover w-full h-full"
              data-ai-hint="medical scan"
            />
          </div>
        </div>

      <div className="w-full flex flex-col md:flex-row gap-6 mt-8">
        {/* Column 1: Performance Metric Card */}
        <div className="w-full flex-1">
          <Card className="bg-card/80 backdrop-blur-sm shadow-xl h-full">
            <CardHeader className="p-3">
              <CardTitle className="text-primary text-2xl text-center">
                {sector.performanceMetricName}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center p-3 pt-0">
              <p className="text-5xl font-bold text-accent">
                {sector.currentValue}
                {valueSuffix}
              </p>
              <p
                className={`text-lg flex items-center justify-center mt-2 ${
                  isPositiveChange ? "text-accent" : "text-destructive"
                }`}
              >
                {isPositiveChange ? (
                  <TrendingUp className="mr-2 h-5 w-5" />
                ) : (
                  <TrendingDown className="mr-2 h-5 w-5" />
                )}
                {Math.abs(performanceChange).toFixed(valueSuffix === "%" ? 1 : 0)}
                {valueSuffix} vs Market
              </p>
            </CardContent>
          </Card>
        </div>
        {/* Column 2: Top EQT Sector companies Card */}
        <Card className="bg-card/80 backdrop-blur-sm shadow-xl h-full">
          <CardHeader className="p-3">
            <CardTitle className="text-primary text-2xl text-center">Top EQT Sector Companies</CardTitle>
          </CardHeader>
          <CardContent className="p-3 pt-0">
            <ul className="space-y-2 text-center">
              {sector.topCompanies.slice(0, 3).map((companyName) => (<li key={companyName} className="text-lg text-foreground">{companyName}</li>))}</ul></CardContent></Card>
      </div>
    </div>
  );
}
