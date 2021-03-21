import { InjectionToken } from '@angular/core';

export const SAMPLE_CONFIG = new InjectionToken('SAMPLE_CONFIG');

export interface SampleConfig {
  value?: string;
  color?: string;
}
