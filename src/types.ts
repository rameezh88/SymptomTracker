export enum SymptomSeverity {
  VeryHigh = "VeryHigh",
  High = "High",
  Medium = "Medium",
  Low = "Low",
  VeryLow = "VeryLow",
}

export enum SymptomEntryType {
  Name = "name",
  Date = "date",
  Severity = "severity",
  Description = "description",
}

export type Symptom = {
  id?: string;
  name: SymptomEntryType | null;
  severity: SymptomSeverity | null;
  description?: string;
  date: string | null;
};
