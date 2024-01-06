export enum SymptomSeverity {
  VeryHigh = "VeryHigh",
  High = "High",
  Medium = "Medium",
  Low = "Low",
  VeryLow = "VeryLow",
}

export type Symptom = {
  id: string;
  name: string;
  severity: SymptomSeverity;
  description?: string;
  time: string;
};
