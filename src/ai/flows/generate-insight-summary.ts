// src/ai/flows/generate-insight-summary.ts
'use server';

/**
 * @fileOverview Generates a summary of insights based on sector performance data.
 *
 * - generateInsightSummary - A function that generates a summary of insights.
 * - GenerateInsightSummaryInput - The input type for the generateInsightSummary function.
 * - GenerateInsightSummaryOutput - The return type for the generateInsightSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateInsightSummaryInputSchema = z.object({
  sector: z.string().describe('The sector being analyzed.'),
  performanceMetric: z.string().describe('The key performance metric for the sector (e.g., revenue growth, profit margin).'),
  currentValue: z.number().describe('The current value of the performance metric.'),
  comparisonValue: z.number().describe('The value of the performance metric compared to a benchmark or previous period.'),
  topCompanies: z.array(z.string()).describe('A list of the top-performing companies in the sector.'),
});
export type GenerateInsightSummaryInput = z.infer<typeof GenerateInsightSummaryInputSchema>;

const GenerateInsightSummaryOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the sector performance insights.'),
});
export type GenerateInsightSummaryOutput = z.infer<typeof GenerateInsightSummaryOutputSchema>;

export async function generateInsightSummary(input: GenerateInsightSummaryInput): Promise<GenerateInsightSummaryOutput> {
  return generateInsightSummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateInsightSummaryPrompt',
  input: {schema: GenerateInsightSummaryInputSchema},
  output: {schema: GenerateInsightSummaryOutputSchema},
  prompt: `You are an AI assistant that summarizes sector performance data for business professionals.

  Given the following information about a specific sector, generate a concise and informative summary highlighting key insights and significant data points. Emphasize the sector's performance compared to a benchmark, and mention the top-performing companies.

  Sector: {{{sector}}}
  Performance Metric: {{{performanceMetric}}}
  Current Value: {{{currentValue}}}
  Comparison Value: {{{comparisonValue}}}
  Top Companies: {{#each topCompanies}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}

  Summary:`,
});

const generateInsightSummaryFlow = ai.defineFlow(
  {
    name: 'generateInsightSummaryFlow',
    inputSchema: GenerateInsightSummaryInputSchema,
    outputSchema: GenerateInsightSummaryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
