import {
  DollarSign,
  Zap,
  Users,
  Globe,
  Shield,
  Activity,
  TrendingUp,
} from "lucide-react";
import { Chapter } from "@/types/insights";

export const chapters: Chapter[] = [
  {
    id: "revenue-growth",
    name: "Revenue & Growth",
    icon: DollarSign,
    storyIds: [7, 3, 10, 21, 18],
  },
  {
    id: "product-engineering",
    name: "Product & Engineering",
    icon: Zap,
    storyIds: [13, 23, 5, 8, 25, 17],
  },
  {
    id: "customer-success",
    name: "Customer Success",
    icon: Users,
    storyIds: [16, 20, 6, 4],
  },
  {
    id: "marketing-content",
    name: "Marketing & Content",
    icon: Globe,
    storyIds: [12, 14, 24, 22],
  },
  {
    id: "operations-infrastructure",
    name: "Operations & Infrastructure",
    icon: Shield,
    storyIds: [15, 9, 26],
  },
  {
    id: "people-culture",
    name: "People & Culture",
    icon: Activity,
    storyIds: [11, 2],
  },
  {
    id: "analytics-insights",
    name: "Analytics & Insights",
    icon: TrendingUp,
    storyIds: [1, 19],
  },
];
