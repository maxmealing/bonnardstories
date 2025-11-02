import { LucideIcon } from "lucide-react";

export interface Metric {
  label: string;
  value: string;
}

export interface DataPoint {
  day: string;
  value: number;
}

export interface Schedule {
  enabled: boolean;
  frequency: string;
  channel: "slack" | "email";
  slackChannel?: string;
}

export interface Owner {
  name: string;
  avatar?: string;
  email?: string;
}

export interface StoryRun {
  id: string;
  timestamp: string;
  content: string;
  metrics: Metric[];
  data: DataPoint[];
}

export interface Insight {
  id: number;
  title: string;
  summary: string;
  details: string;
  metrics: Metric[];
  data: DataPoint[];
  icon: LucideIcon;
  status: string;
  progress: number;
  duration: number;
  owner: Owner;
  schedule?: Schedule;
  lastUpdated: string;
  timesPlayed: number;
  runs?: StoryRun[];
}

export interface Chapter {
  id: string;
  name: string;
  icon: LucideIcon;
  storyIds: number[];
}
