
"use client";

import { useRef, useEffect, useState } from 'react';
import type { SectorData } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, TrendingDown, Cpu, HeartPulse, Zap, Landmark, Trophy, type LucideIcon } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import ConfettiAnimation from './ConfettiAnimation';

interface TopSectorSpotlightProps {
  sector: SectorData;
  showConfetti?: boolean;
  children?: React.ReactNode;
}

const iconComponents: Record<string, LucideIcon> = {
  Cpu,
  HeartPulse,
  Zap,
  Landmark,
  Trophy,
  TrendingUp,
};

export default function TopSectorSpotlight({ sector, showConfetti = true, children }: TopSectorSpotlightProps) {
  const performanceChange = sector.currentValue - sector.comparisonValue;
  const isPositiveChange = performanceChange >= 0;
  const valueSuffix = sector.valueUnit || "";

  const IconToRender = sector.iconName ? iconComponents[sector.iconName] : null;
  const shouldShowDetailedLayout = sector.id === 'tech';

  const spotlightRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Unobserve after it becomes visible
        }
      },
      {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1, // 10% of the item is visible
      }
    );

    if (spotlightRef.current) {
      observer.observe(spotlightRef.current);
    }

    return () => {
      if (spotlightRef.current) {
        observer.unobserve(spotlightRef.current);
      }
    };
  }, []);

  return (
    <div ref={spotlightRef} className="w-full max-w-4xl text-center flex flex-col items-center justify-center p-4">
      <div className="relative flex flex-col items-center justify-center mb-6">
        {IconToRender && (
          <IconToRender className={`w-24 h-24 md:w-32 md:h-32 ${sector.id === 'tech' ? 'text-[#f3fa76]' : 'text-accent'}`} />
        )}
        {sector.id === 'tech' && showConfetti && isVisible && <ConfettiAnimation />}
      </div>
      <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold ${sector.id === 'tech' ? 'text-[#f3fa76]' : 'text-primary'} mb-4 animate-fade-in-down`}>{sector.name}</h1>
      <p className="text-lg sm:text-xl text-muted-foreground mb-8 animate-fade-in-up delay-200">{sector.description || `Key insights for the ${sector.name} sector.`}</p>

      {!shouldShowDetailedLayout && children}

      {shouldShowDetailedLayout ? (
        // 2x2 Grid for Tech Sector
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {/* Item 1: Performance Metric Card */}
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
              <p className="text-xs text-muted-foreground mt-2">* Gross margin</p>
            </CardContent>
          </Card>

          {/* Item 2: Top Segment companies Card */}
          <Card className="bg-card/80 backdrop-blur-sm shadow-xl h-full">
            <CardHeader className="p-3">
              <CardTitle className="text-primary text-2xl text-center">Top Segment Companies</CardTitle>
            </CardHeader>
            <CardContent className="p-3 pt-0">
              <ul className="space-y-2 text-center">
                {sector.topCompanies.slice(0, 3).map((companyName) => (<li key={companyName} className="text-lg text-foreground">{companyName}</li>))}
              </ul>
            </CardContent>
          </Card>

          {/* Item 3: "At a glance" Card */}
          <Card className="bg-[#85215D] text-white border-[#85215D] shadow-xl h-full">
            <CardHeader className="p-3 pb-1">
              <CardTitle className="text-white text-xl text-left">At a glance</CardTitle>
            </CardHeader>
            <CardContent className="text-left p-3 pt-0">
              <div className="space-y-2 text-sm">
                <div>
                  <p className="font-semibold">Sector Size</p>
                  <p>$1.2T Global Market</p>
                  <Separator className="my-1 bg-white/30" />
                </div>
                <div>
                  <p className="font-semibold">Sector companies</p>
                  <p>250+ in EQT Portfolio</p>
                  <Separator className="my-1 bg-white/30" />
                </div>
                <div>
                  <p className="font-semibold">Average Deal Size</p>
                  <p>$50M - $200M</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Item 4: Image */}
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
      ) : (
        // Default layout for other sectors
        <>
          {children}
          <div className="w-full flex flex-col md:flex-row gap-6 mt-8 max-w-3xl">
            <div className="flex-1">
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
                  <p className="text-xs text-muted-foreground mt-2">* Gross margin</p>
                </CardContent>
              </Card>
            </div>
            <div className="flex-1">
              <Card className="bg-card/80 backdrop-blur-sm shadow-xl h-full">
                <CardHeader className="p-3">
                  <CardTitle className="text-primary text-2xl text-center">Top Segment Companies</CardTitle>
                </CardHeader>
                <CardContent className="p-3 pt-0">
                  <ul className="space-y-2 text-center">
                    {sector.topCompanies.slice(0, 3).map((companyName) => (<li key={companyName} className="text-lg text-foreground">{companyName}</li>))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

