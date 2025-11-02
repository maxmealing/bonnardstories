import {
  CheckCircle,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  DollarSign,
  Users,
  Target,
  Zap,
  Shield,
  Globe,
  Activity,
  Mail,
} from "lucide-react";
import { Insight } from "@/types/insights";
import { generateMockData } from "./mockData";

/**
 * Get all insights data
 * In a production app, this would be fetched from an API
 */
export function getInsights(): Insight[] {
  return [
  {
    id: 1,
    title: "Usage Forecast",
    summary: "Projected to use 120 credits this month (60% of limit). Daily average of 3.87 credits is stable with healthy 40% buffer remaining.",
    details:
      "Current usage projects to 120 credits for the month—well within your 200-credit limit. Daily burn averages 3.87 credits with minimal fluctuation, leaving a comfortable 40% cushion for growth or experimentation.",
    metrics: [
      { label: "Daily average", value: "3.87 credits/day" },
      { label: "Monthly projection", value: "120 credits (60%)" },
      { label: "Buffer remaining", value: "80 credits (40%)" },
      { label: "Trend", value: "Stable, no spikes" }
    ],
    data: generateMockData(4, 'up'),
    icon: CheckCircle,
    status: "Within limits",
    progress: 62,
    duration: 8,
    owner: {
      name: "Sarah Chen",
      email: "sarah@company.com"
    },
    schedule: {
      enabled: true,
      frequency: "Daily at 9:00 AM",
      channel: "slack",
      slackChannel: "#finance-team"
    },
    lastUpdated: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2 hours ago
    timesPlayed: 1247,
    runs: [
      {
        id: "run-1",
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2 hours ago
        content: "Current usage projects to 120 credits for the month—well within your 200-credit limit. Daily burn averages 3.87 credits with minimal fluctuation, leaving a comfortable 40% cushion for growth or experimentation.",
        metrics: [
          { label: "Daily average", value: "3.87 credits/day" },
          { label: "Monthly projection", value: "120 credits (60%)" },
          { label: "Buffer remaining", value: "80 credits (40%)" },
          { label: "Trend", value: "Stable, no spikes" }
        ],
        data: generateMockData(4, 'up')
      },
      {
        id: "run-2",
        timestamp: new Date(Date.now() - 26 * 60 * 60 * 1000).toISOString(), // 1 day ago
        content: "",
        metrics: [],
        data: []
      },
      {
        id: "run-3",
        timestamp: new Date(Date.now() - 50 * 60 * 60 * 1000).toISOString(), // 2 days ago
        content: "",
        metrics: [],
        data: []
      },
      {
        id: "run-4",
        timestamp: new Date(Date.now() - 74 * 60 * 60 * 1000).toISOString(), // 3 days ago
        content: "",
        metrics: [],
        data: []
      }
    ]
  },
  {
    id: 2,
    title: "Team Activity Overview",
    summary: "188 workflow runs this week, up 19%. Customer Signals Digest drives 34% of activity with Julia and Max as top contributors.",
    details:
      "Team ran 188 workflows this week (+19%), with Wednesday as peak day at 42 runs. Customer Signals Digest accounts for 34% of all activity. Automation now represents 67% of runs, showing the team is building sustainable data habits.",
    metrics: [
      { label: "Total runs", value: "188 (+19% WoW)" },
      { label: "Top contributors", value: "Julia (24), Max (22)" },
      { label: "Peak day", value: "Wednesday (42 runs)" },
      { label: "Top workflow", value: "Customer Signals (34%)" }
    ],
    data: generateMockData(5, 'up'),
    icon: CheckCircle,
    status: "Healthy automation",
    progress: 72,
    duration: 8,
    owner: {
      name: "Max Weber",
      email: "max@company.com"
    },
    schedule: {
      enabled: true,
      frequency: "Weekly on Monday at 8:00 AM",
      channel: "slack",
      slackChannel: "#team-updates"
    },
    lastUpdated: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(), // 5 hours ago
    timesPlayed: 892,
    runs: [
      {
        id: "run-1",
        timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
        content: "Team ran 188 workflows this week (+19%), with Wednesday as peak day at 42 runs. Customer Signals Digest accounts for 34% of all activity. Automation now represents 67% of runs, showing the team is building sustainable data habits.",
        metrics: [
          { label: "Total runs", value: "188 (+19% WoW)" },
          { label: "Top contributors", value: "Julia (24), Max (22)" },
          { label: "Peak day", value: "Wednesday (42 runs)" },
          { label: "Top workflow", value: "Customer Signals (34%)" }
        ],
        data: generateMockData(5, 'up')
      },
      {
        id: "run-2",
        timestamp: new Date(Date.now() - 29 * 60 * 60 * 1000).toISOString(),
        content: "",
        metrics: [],
        data: []
      },
      {
        id: "run-3",
        timestamp: new Date(Date.now() - 53 * 60 * 60 * 1000).toISOString(),
        content: "",
        metrics: [],
        data: []
      }
    ]
  },
  {
    id: 3,
    title: "Revenue Impact Analysis",
    summary: "$47K in AI-attributed revenue (23% of total). Lead scoring ROI at 320%, and AI-assisted deals close 12 days faster.",
    details:
      "AI features influenced $47K across 18 deals this quarter (23% of total revenue). Lead scoring delivered 320% ROI by helping reps prioritize high-intent prospects. Deals using AI closed 12 days faster on average—potentially enabling 2-3 additional deals per quarter from velocity gains alone.",
    metrics: [
      { label: "Attributed revenue", value: "$47.3K (23% of total)" },
      { label: "Influenced deals", value: "18 of 78 closed" },
      { label: "Avg deal velocity", value: "12 days faster" },
      { label: "Lead scoring ROI", value: "320%" }
    ],
    data: generateMockData(3, 'up'),
    icon: CheckCircle,
    status: "High impact",
    progress: 85,
    duration: 10,
    owner: {
      name: "Julia Martinez",
      email: "julia@company.com"
    },
    schedule: {
      enabled: true,
      frequency: "Monthly on 1st at 10:00 AM",
      channel: "slack",
      slackChannel: "#sales-insights"
    },
    lastUpdated: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
    timesPlayed: 2134,
    runs: [
      {
        id: "run-1",
        timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
        content: "AI features influenced $47K across 18 deals this quarter (23% of total revenue). Lead scoring delivered 320% ROI by helping reps prioritize high-intent prospects. Deals using AI closed 12 days faster on average—potentially enabling 2-3 additional deals per quarter from velocity gains alone.",
        metrics: [
          { label: "Attributed revenue", value: "$47.3K (23% of total)" },
          { label: "Influenced deals", value: "18 of 78 closed" },
          { label: "Avg deal velocity", value: "12 days faster" },
          { label: "Lead scoring ROI", value: "320%" }
        ],
        data: generateMockData(3, 'up')
      },
      {
        id: "run-2",
        timestamp: new Date(Date.now() - 25 * 60 * 60 * 1000).toISOString(),
        content: "",
        metrics: [],
        data: []
      },
      {
        id: "run-3",
        timestamp: new Date(Date.now() - 49 * 60 * 60 * 1000).toISOString(),
        content: "",
        metrics: [],
        data: []
      }
    ]
  },
  {
    id: 4,
    title: "Customer Support Efficiency",
    summary: "Response times down 34% to 2.8 hours while CSAT jumped to 4.6/5.0. Smart routing and automation handle 42% of Tier-1 queries.",
    details:
      "Support metrics improved across the board: response time dropped from 4.2 to 2.8 hours (34%), while CSAT increased from 3.9 to 4.6/5.0. Smart routing eliminated 2.3 handoffs per complex issue. Automation now handles 42% of Tier-1 queries, freeing agents for high-value work.",
    metrics: [
      { label: "Response time", value: "2.8hrs (↓34%)" },
      { label: "CSAT score", value: "4.6/5.0 (↑18%)" },
      { label: "Auto-resolved", value: "42% of Tier-1" },
      { label: "Routing accuracy", value: "67% first-contact" }
    ],
    data: generateMockData(4, 'down'),
    icon: CheckCircle,
    status: "Improving",
    progress: 68,
    duration: 9,
    owner: {
      name: "David Park",
      email: "david@company.com"
    },
    lastUpdated: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days ago
    timesPlayed: 756,
    runs: [
      {
        id: "run-1",
        timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
        content: "Support metrics improved across the board: response time dropped from 4.2 to 2.8 hours (34%), while CSAT increased from 3.9 to 4.6/5.0. Smart routing eliminated 2.3 handoffs per complex issue. Automation now handles 42% of Tier-1 queries, freeing agents for high-value work.",
        metrics: [
          { label: "Response time", value: "2.8hrs (↓34%)" },
          { label: "CSAT score", value: "4.6/5.0 (↑18%)" },
          { label: "Auto-resolved", value: "42% of Tier-1" },
          { label: "Routing accuracy", value: "67% first-contact" }
        ],
        data: generateMockData(4, 'down')
      },
      {
        id: "run-2",
        timestamp: new Date(Date.now() - 27 * 60 * 60 * 1000).toISOString(),
        content: "",
        metrics: [],
        data: []
      },
      {
        id: "run-3",
        timestamp: new Date(Date.now() - 51 * 60 * 60 * 1000).toISOString(),
        content: "",
        metrics: [],
        data: []
      }
    ]
  },
  {
    id: 5,
    title: "Product Engagement Trends",
    summary: "Power users up 28%, averaging 5.8 features per user. AI search hit 45% adoption in 14 days—our fastest feature rollout ever.",
    details:
      "Engagement is accelerating: power users increased 28% and now average 5.8 features (up from 4.2). AI search reached 45% adoption in just 14 days—fastest rollout in company history. AI users show 23pp higher retention (89% vs 66%) and NPS scores 42 points higher.",
    metrics: [
      { label: "Power users", value: "+28% MoM growth" },
      { label: "AI search adoption", value: "45% in 14 days" },
      { label: "Retention lift", value: "+23pp for AI users" },
      { label: "Features/user", value: "5.8 avg" }
    ],
    data: generateMockData(4, 'up'),
    icon: CheckCircle,
    status: "Strong growth",
    progress: 78,
    duration: 9,
    owner: {
      name: "Emma Rodriguez",
      email: "emma@company.com"
    },
    lastUpdated: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(), // 6 hours ago
    timesPlayed: 1893,
    runs: [
      {
        id: "run-1",
        timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
        content: "Engagement is accelerating: power users increased 28% and now average 5.8 features (up from 4.2). AI search reached 45% adoption in just 14 days—fastest rollout in company history. AI users show 23pp higher retention (89% vs 66%) and NPS scores 42 points higher.",
        metrics: [
          { label: "Power users", value: "+28% MoM growth" },
          { label: "AI search adoption", value: "45% in 14 days" },
          { label: "Retention lift", value: "+23pp for AI users" },
          { label: "Features/user", value: "5.8 avg" }
        ],
        data: generateMockData(4, 'up')
      },
      {
        id: "run-2",
        timestamp: new Date(Date.now() - 30 * 60 * 60 * 1000).toISOString(),
        content: "",
        metrics: [],
        data: []
      },
      {
        id: "run-3",
        timestamp: new Date(Date.now() - 54 * 60 * 60 * 1000).toISOString(),
        content: "",
        metrics: [],
        data: []
      }
    ]
  },
  {
    id: 6,
    title: "Churn Risk Alert",
    summary: "12 accounts flagged with $186K ARR at risk (68% churn probability). Proactive outreach can reduce this to 22%.",
    details:
      "Churn model flagged 12 accounts with $186K ARR at risk, showing 43% average usage decline. Without intervention, 68% will likely churn within 60 days. Proactive outreach reduces this to 22%. Four priority accounts ($98K ARR) already escalated to Customer Success.",
    metrics: [
      { label: "At-risk accounts", value: "12 flagged" },
      { label: "ARR at risk", value: "$186K total" },
      { label: "Churn probability", value: "68% in 60 days" },
      { label: "Avg usage drop", value: "43% decline" }
    ],
    data: generateMockData(4, 'down'),
    icon: CheckCircle,
    status: "Action needed",
    progress: 45,
    duration: 10,
    owner: {
      name: "Michael Torres",
      email: "michael@company.com"
    },
    schedule: {
      enabled: true,
      frequency: "Daily at 7:00 AM",
      channel: "slack",
      slackChannel: "#customer-success"
    },
    lastUpdated: new Date(Date.now() - 30 * 60 * 1000).toISOString(), // 30 minutes ago
    timesPlayed: 3421,
    runs: [
      {
        id: "run-1",
        timestamp: new Date(Date.now() - 30 * 60 * 1000).toISOString(),
        content: "Churn model flagged 12 accounts with $186K ARR at risk, showing 43% average usage decline. Without intervention, 68% will likely churn within 60 days. Proactive outreach reduces this to 22%. Four priority accounts ($98K ARR) already escalated to Customer Success.",
        metrics: [
          { label: "At-risk accounts", value: "12 flagged" },
          { label: "ARR at risk", value: "$186K total" },
          { label: "Churn probability", value: "68% in 60 days" },
          { label: "Avg usage drop", value: "43% decline" }
        ],
        data: generateMockData(4, 'down')
      },
      {
        id: "run-2",
        timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
        content: "",
        metrics: [],
        data: []
      },
      {
        id: "run-3",
        timestamp: new Date(Date.now() - 48 * 60 * 60 * 1000).toISOString(),
        content: "",
        metrics: [],
        data: []
      }
    ]
  },
  {
    id: 7,
    title: "Marketing Campaign ROI",
    summary: "Q1 campaigns delivered $312K revenue at 4.2x ROI. Email led with 43% of revenue, CAC dropped 31% to $89.",
    details: "Q1 marketing generated $312K revenue from $74K spend (4.2x ROI). Email drove 43% of revenue, micro-influencers delivered 6.1x ROI, and AI-optimized subject lines saw 2.3x higher open rates. CAC dropped from $129 to $89.",
    metrics: [
      { label: "Campaign ROI", value: "4.2x return" },
      { label: "Revenue generated", value: "$312K" },
      { label: "CAC reduction", value: "31% decrease" },
      { label: "Top channel", value: "Email (43%)" }
    ],
    data: generateMockData(5, 'up'),
    icon: DollarSign,
    status: "High performance",
    progress: 88,
    duration: 9,
    owner: {
      name: "Alex Kim",
      email: "alex@company.com"
    },
    schedule: {
      enabled: true,
      frequency: "Monthly on 5th at 9:00 AM",
      channel: "slack",
      slackChannel: "#marketing"
    },
    lastUpdated: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
    timesPlayed: 1567
  },
  {
    id: 8,
    title: "API Performance Monitoring",
    summary: "API response time improved 42% to 127ms average. 99.97% uptime maintained with 78% cache hit rate.",
    details: "Response times dropped from 219ms to 127ms (42% improvement). Database query optimization reduced N+1 queries by 94%, and Redis caching increased hit rate to 78%. Uptime at 99.97% with three more optimization opportunities identified.",
    metrics: [
      { label: "Avg response time", value: "127ms (↓42%)" },
      { label: "Uptime", value: "99.97%" },
      { label: "Cache hit rate", value: "78%" },
      { label: "P95 latency", value: "312ms" }
    ],
    data: generateMockData(6, 'down'),
    icon: Zap,
    status: "Optimized",
    progress: 92,
    duration: 8,
    owner: {
      name: "Ryan Foster",
      email: "ryan@company.com"
    },
    lastUpdated: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
    timesPlayed: 945
  },
  {
    id: 9,
    title: "Security Vulnerability Assessment",
    summary: "Zero critical vulnerabilities detected. 3 medium-priority issues patched within SLA. 2FA adoption at 87%, security training at 94%.",
    details: "Monthly scan found no critical or high-priority vulnerabilities. Three medium-priority issues patched (NPM updates, session config, CORS policy). SSL auto-renewal deployed, 87% of accounts use 2FA, and 94% of engineering completed security training.",
    metrics: [
      { label: "Critical issues", value: "0 detected" },
      { label: "Patch time", value: "Within SLA" },
      { label: "2FA adoption", value: "87% of users" },
      { label: "Security training", value: "94% complete" }
    ],
    data: generateMockData(4, 'stable'),
    icon: Shield,
    status: "Secure",
    progress: 95,
    duration: 7,
    owner: {
      name: "Priya Patel",
      email: "priya@company.com"
    },
    schedule: {
      enabled: true,
      frequency: "Monthly on 1st at 8:00 AM",
      channel: "slack",
      slackChannel: "#security"
    },
    lastUpdated: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
    timesPlayed: 678
  },
  {
    id: 10,
    title: "Sales Pipeline Health",
    summary: "Pipeline grew 23% to $1.2M across 47 deals. Average deal size up 18% to $25.6K, sales cycle down 8 days to 42.",
    details: "Pipeline value hit $1.2M (up from $976K) with 47 active opportunities. MEDDIC qualification framework reduced sales cycle from 50 to 42 days. Win rate at 34% (above industry benchmark), with top rep closing 6 deals at $178K total value.",
    metrics: [
      { label: "Pipeline value", value: "$1.2M (+23%)" },
      { label: "Avg deal size", value: "$25.6K (+18%)" },
      { label: "Win rate", value: "34%" },
      { label: "Sales cycle", value: "42 days (↓8)" }
    ],
    data: generateMockData(5, 'up'),
    icon: Target,
    status: "Strong pipeline",
    progress: 76,
    duration: 10,
    owner: {
      name: "Marcus Johnson",
      email: "marcus@company.com"
    },
    schedule: {
      enabled: true,
      frequency: "Weekly on Friday at 4:00 PM",
      channel: "slack",
      slackChannel: "#sales-team"
    },
    lastUpdated: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
    timesPlayed: 2341
  },
  {
    id: 11,
    title: "Employee Satisfaction Survey",
    summary: "Engagement score 8.2/10 (up from 7.8) with 92% participation. eNPS at +42. Remote flexibility cited as top benefit by 67%.",
    details: "Q1 engagement improved to 8.2/10 from 7.8, with excellent eNPS of +42. Work-life balance rated highest (8.7/10). 67% cite remote flexibility as top benefit, while 54% want more L&D opportunities. HR developing enhanced programs in response.",
    metrics: [
      { label: "Engagement score", value: "8.2/10 (↑0.4)" },
      { label: "Participation", value: "92%" },
      { label: "eNPS", value: "+42" },
      { label: "Flight risk", value: "8% flagged" }
    ],
    data: generateMockData(4, 'up'),
    icon: Users,
    status: "Positive trend",
    progress: 82,
    duration: 9,
    owner: {
      name: "Sofia Martinez",
      email: "sofia@company.com"
    },
    schedule: {
      enabled: true,
      frequency: "Quarterly on 15th at 10:00 AM",
      channel: "email"
    },
    lastUpdated: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    timesPlayed: 1123
  },
  {
    id: 12,
    title: "Website Traffic Analysis",
    summary: "142K unique visitors (+34% YoY). Organic search up 41% from SEO efforts. Mobile now 61% of traffic with improved conversion.",
    details: "March traffic hit 142K visitors, up 34% year-over-year. Organic search grew 41% through content marketing (18 blog posts, 12 first-page rankings). Bounce rate dropped to 38%, mobile conversion improved from 1.8% to 2.4%.",
    metrics: [
      { label: "Unique visitors", value: "142K (+34%)" },
      { label: "Organic growth", value: "+41% YoY" },
      { label: "Bounce rate", value: "38% (↓6pp)" },
      { label: "Mobile traffic", value: "61% of sessions" }
    ],
    data: generateMockData(6, 'up'),
    icon: Globe,
    status: "Growing",
    progress: 71,
    duration: 8,
    owner: {
      name: "Taylor Brooks",
      email: "taylor@company.com"
    },
    lastUpdated: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
    timesPlayed: 1876
  },
  {
    id: 13,
    title: "Product Roadmap Progress",
    summary: "Q1 delivered 8 of 10 features (80% on-time). 62% were customer-requested. Engineering velocity up 15%.",
    details: "Shipped 8 features in Q1 including advanced filtering (most requested, 478 votes), bulk operations, and SSO. Bug backlog reduced 28%, engineering velocity up 15%. New features rated 4.6/5.0 average, with filtering at 67% adoption in first month.",
    metrics: [
      { label: "Features delivered", value: "8 of 10 (80%)" },
      { label: "Customer-driven", value: "62% of features" },
      { label: "Velocity increase", value: "+15%" },
      { label: "Feature rating", value: "4.6/5.0" }
    ],
    data: generateMockData(5, 'up'),
    icon: Activity,
    status: "On track",
    progress: 80,
    duration: 10,
    owner: {
      name: "Devon Lee",
      email: "devon@company.com"
    },
    schedule: {
      enabled: true,
      frequency: "Bi-weekly on Monday at 9:00 AM",
      channel: "slack",
      slackChannel: "#product-updates"
    },
    lastUpdated: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
    timesPlayed: 1654
  },
  {
    id: 14,
    title: "Content Engagement Metrics",
    summary: "89K blog views with 4.2min read time. Newsletter at 38% open rate (vs 21% industry avg). Video views up 156%.",
    details: "Blog generated 89K views (+27%) with 4m 12s average read time. Newsletter beats industry average (38% vs 21%). Tutorial videos hit 12K views—viewers convert at 2.3x higher rate. ROI calculator converts at 6.1%, our highest-performing asset.",
    metrics: [
      { label: "Blog views", value: "89K (+27%)" },
      { label: "Newsletter open", value: "38% (industry: 21%)" },
      { label: "Video growth", value: "+156%" },
      { label: "Webinar signups", value: "342 (+45%)" }
    ],
    data: generateMockData(6, 'up'),
    icon: TrendingUp,
    status: "Engaging",
    progress: 85,
    duration: 8,
    owner: {
      name: "Casey Turner",
      email: "casey@company.com"
    },
    lastUpdated: new Date(Date.now() - 7 * 60 * 60 * 1000).toISOString(),
    timesPlayed: 2098
  },
  {
    id: 15,
    title: "Infrastructure Cost Optimization",
    summary: "Cloud costs reduced 28% from $23K to $16.5K monthly ($78K annual savings). Zero performance impact.",
    details: "Reduced monthly spending from $23K to $16.5K through reserved instances, rightsizing, and storage optimization. Auto-scaling prevented $4.2K in waste. CPU utilization improved from 34% to 58%. Performance actually improved by 12ms despite cost cuts.",
    metrics: [
      { label: "Cost reduction", value: "28% ($6.5K/mo)" },
      { label: "Annual savings", value: "$78K projected" },
      { label: "Waste prevented", value: "$4.2K via auto-scale" },
      { label: "Performance impact", value: "None (improved 12ms)" }
    ],
    data: generateMockData(5, 'down'),
    icon: DollarSign,
    status: "Optimized",
    progress: 88,
    duration: 9,
    owner: {
      name: "Jordan Hayes",
      email: "jordan@company.com"
    },
    schedule: {
      enabled: true,
      frequency: "Monthly on 10th at 11:00 AM",
      channel: "email"
    },
    lastUpdated: new Date(Date.now() - 18 * 60 * 60 * 1000).toISOString(),
    timesPlayed: 982
  },
  {
    id: 16,
    title: "Customer Onboarding Success",
    summary: "Activation rate jumped to 78% from 64%. Time-to-value dropped to 4.2 days. 89% of activated users stay active after 30 days.",
    details: "Activation increased to 78% (up from 64%) with time-to-first-value reduced from 7.1 to 4.2 days. Interactive product tour and personalized flows drove 18pp activation boost. Completed onboarding users show 3.2x higher LTV and 2.8x lower churn.",
    metrics: [
      { label: "Activation rate", value: "78% (↑14pp)" },
      { label: "Time to value", value: "4.2 days (↓2.9)" },
      { label: "30-day retention", value: "89%" },
      { label: "Completion rate", value: "71% finish" }
    ],
    data: generateMockData(4, 'up'),
    icon: CheckCircle,
    status: "Improving",
    progress: 78,
    duration: 9,
    owner: {
      name: "Morgan Davis",
      email: "morgan@company.com"
    },
    lastUpdated: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
    timesPlayed: 1456
  },
  {
    id: 17,
    title: "Mobile App Performance",
    summary: "App rating rose to 4.7★ from 4.3. Crash rate down 76% to 0.31%. Session length up 42% to 8m 15s.",
    details: "App Store rating improved from 4.3 to 4.7 stars. Stability fixes reduced crashes from 1.29% to 0.31%, while average sessions grew from 5m 48s to 8m 15s. Push opt-in users show 3.1x higher 90-day retention.",
    metrics: [
      { label: "App rating", value: "4.7★ (was 4.3)" },
      { label: "Crash rate", value: "0.31% (↓76%)" },
      { label: "Session length", value: "8m 15s (+42%)" },
      { label: "Push opt-in", value: "64%" }
    ],
    data: generateMockData(6, 'up'),
    icon: Activity,
    status: "Excellent",
    progress: 91,
    duration: 8,
    owner: {
      name: "Riley Cooper",
      email: "riley@company.com"
    },
    schedule: {
      enabled: true,
      frequency: "Weekly on Wednesday at 2:00 PM",
      channel: "slack",
      slackChannel: "#mobile-team"
    },
    lastUpdated: new Date(Date.now() - 90 * 60 * 1000).toISOString(),
    timesPlayed: 3267
  },
  {
    id: 18,
    title: "Partner Program Growth",
    summary: "24 active partners (up from 18) generated $87K in referral revenue. Partner deals 34% larger with 42% win rate.",
    details: "Partner ecosystem grew to 24 partners, generating $87K across 14 deals. Partner deals average $31.2K (34% larger than direct) with 42% win rate vs 34% direct. Retention is 8pp higher for partner-sourced customers.",
    metrics: [
      { label: "Active partners", value: "24 (+6 QoQ)" },
      { label: "Referral revenue", value: "$87K" },
      { label: "Avg partner deal", value: "$31.2K (+34%)" },
      { label: "Partner NPS", value: "8.4/10" }
    ],
    data: generateMockData(5, 'up'),
    icon: Users,
    status: "Expanding",
    progress: 73,
    duration: 10,
    owner: {
      name: "Avery Mitchell",
      email: "avery@company.com"
    },
    lastUpdated: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
    timesPlayed: 1789
  },
  {
    id: 19,
    title: "Competitive Intelligence Update",
    summary: "Market share grew to 18.7% in SMB segment. We maintain 23% price advantage with 94% feature parity.",
    details: "SMB market share increased from 17.2% to 18.7%. Primary competitor raised $45M and hiked prices 15-20%, giving us a 23% price advantage. Our NPS of +42 beats industry average of +28. Competitor C testing AI features—accelerating our roadmap.",
    metrics: [
      { label: "Market share", value: "18.7% (+1.5pp)" },
      { label: "Price advantage", value: "23% lower" },
      { label: "Feature parity", value: "94%" },
      { label: "NPS advantage", value: "+14 pts vs avg" }
    ],
    data: generateMockData(4, 'stable'),
    icon: Target,
    status: "Competitive",
    progress: 82,
    duration: 9,
    owner: {
      name: "Quinn Anderson",
      email: "quinn@company.com"
    },
    schedule: {
      enabled: true,
      frequency: "Monthly on 20th at 3:00 PM",
      channel: "email"
    },
    lastUpdated: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    timesPlayed: 1432
  },
  {
    id: 20,
    title: "Customer Health Scoring",
    summary: "Tracking 78 accounts with 89% prediction accuracy. Healthy accounts show 96% renewal rate. Found $145K in expansion opportunities.",
    details: "Health scoring monitors 78 accounts with 89% accuracy. 12 critical accounts flagged, 8 contacted with 1 already improving (+18 points). Identified 4 expansion opportunities worth $145K ARR—2 in active conversations. Excellent-health accounts (>90) renew at 96%.",
    metrics: [
      { label: "Prediction accuracy", value: "89%" },
      { label: "At-risk accounts", value: "12 flagged (15%)" },
      { label: "High-health renewal", value: "96%" },
      { label: "Expansion opps", value: "$145K ARR" }
    ],
    data: generateMockData(5, 'stable'),
    icon: Activity,
    status: "Monitoring",
    progress: 84,
    duration: 9,
    owner: {
      name: "Blake Peterson",
      email: "blake@company.com"
    },
    lastUpdated: new Date(Date.now() - 10 * 60 * 60 * 1000).toISOString(),
    timesPlayed: 1234
  },
  {
    id: 21,
    title: "Referral Program Performance",
    summary: "23 referral signups, 14 converted (61%). Referrals have 47% higher LTV and cost 4.2x less than paid acquisition.",
    details: "Referrals generated 23 signups with 61% conversion (vs 32% average). CAC is just $21 vs $89 blended average—4.2x more efficient. Referred customers show 47% higher LTV ($12.4K vs $8.4K) and 92% vs 74% 12-month retention.",
    metrics: [
      { label: "New signups", value: "23 referrals" },
      { label: "Conversion rate", value: "61% to paid" },
      { label: "LTV advantage", value: "+47% higher" },
      { label: "CAC efficiency", value: "4.2x cheaper" }
    ],
    data: generateMockData(6, 'up'),
    icon: Users,
    status: "Effective",
    progress: 79,
    duration: 8,
    owner: {
      name: "Reese Campbell",
      email: "reese@company.com"
    },
    schedule: {
      enabled: true,
      frequency: "Monthly on 15th at 10:00 AM",
      channel: "slack",
      slackChannel: "#growth-team"
    },
    lastUpdated: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    timesPlayed: 2567
  },
  {
    id: 22,
    title: "Email Deliverability Health",
    summary: "98.2% deliverability (above industry avg). Bounce rate at 1.8%, spam complaints 0.04%. Excellent sender reputation.",
    details: "Deliverability at 98.2% (industry: 85-95%) with bounce rate of 1.8% and spam complaints at 0.04% (well below 0.1% threshold). Open rate of 32% beats industry average of 21%. DMARC, SPF, and DKIM fully configured with excellent sender reputation scores.",
    metrics: [
      { label: "Deliverability", value: "98.2%" },
      { label: "Bounce rate", value: "1.8%" },
      { label: "Spam rate", value: "0.04%" },
      { label: "Sender score", value: "Excellent" }
    ],
    data: generateMockData(5, 'stable'),
    icon: Mail,
    status: "Healthy",
    progress: 93,
    duration: 7,
    owner: {
      name: "Cameron Wright",
      email: "cameron@company.com"
    },
    lastUpdated: new Date(Date.now() - 15 * 60 * 60 * 1000).toISOString(),
    timesPlayed: 876
  },
  {
    id: 23,
    title: "Feature Adoption Analysis",
    summary: "New dashboard hit 54% adoption in 3 weeks. Users average 5.3 features. Export leads at 89%, advanced filters lag at 23%.",
    details: "Dashboard feature reached 54% adoption in 3 weeks. Export functionality leads at 89% usage, while advanced filters underutilized at 23%. Power users (5+ features) represent 41% of base and show 4.2x lower churn. Creating tutorials to boost low-adoption features.",
    metrics: [
      { label: "New dashboard", value: "54% adoption" },
      { label: "Avg features/user", value: "5.3 features" },
      { label: "Power users", value: "41% (5+ features)" },
      { label: "Most used", value: "Export (89%)" }
    ],
    data: generateMockData(6, 'up'),
    icon: TrendingUp,
    status: "Growing",
    progress: 68,
    duration: 9,
    owner: {
      name: "Sage Robinson",
      email: "sage@company.com"
    },
    schedule: {
      enabled: true,
      frequency: "Bi-weekly on Thursday at 11:00 AM",
      channel: "slack",
      slackChannel: "#product-analytics"
    },
    lastUpdated: new Date(Date.now() - 20 * 60 * 60 * 1000).toISOString(),
    timesPlayed: 1987
  },
  {
    id: 24,
    title: "Social Media Engagement",
    summary: "LinkedIn grew 31% to 8.4K followers with 4.2% engagement rate (vs 2% avg). Brand mentions up 89%, 84% positive sentiment.",
    details: "LinkedIn hit 8.4K followers (+31%) with 4.2% engagement vs 2% industry average. Twitter impressions up 67%. Content strategy shift to 60% educational drove growth. Micro-influencer campaign reached 47K people, generated 23 demo requests for $2.4K.",
    metrics: [
      { label: "LinkedIn growth", value: "8.4K (+31%)" },
      { label: "Engagement rate", value: "4.2% (vs 2% avg)" },
      { label: "Brand mentions", value: "342 (+89%)" },
      { label: "Sentiment", value: "84% positive" }
    ],
    data: generateMockData(6, 'up'),
    icon: Globe,
    status: "Viral growth",
    progress: 76,
    duration: 8,
    owner: {
      name: "River Santos",
      email: "river@company.com"
    },
    lastUpdated: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    timesPlayed: 2876
  },
  {
    id: 25,
    title: "Database Performance Tuning",
    summary: "Query time down 58% to 43ms average. Storage costs reduced 22%. Zero slow query alerts in 30 days.",
    details: "Average query time dropped from 102ms to 43ms (58% improvement). Optimized N+1 queries, added compound indexes, and implemented Redis caching. Archived 480GB to cold storage, reducing costs from $5.4K to $4.2K monthly. Zero slow queries in past 30 days.",
    metrics: [
      { label: "Query time", value: "43ms (↓58%)" },
      { label: "P99 latency", value: "312ms (↓65%)" },
      { label: "Storage costs", value: "↓22% ($1.2K/mo)" },
      { label: "Slow queries", value: "0 in 30 days" }
    ],
    data: generateMockData(5, 'down'),
    icon: Zap,
    status: "Optimized",
    progress: 94,
    duration: 9,
    owner: {
      name: "Phoenix Gray",
      email: "phoenix@company.com"
    },
    schedule: {
      enabled: true,
      frequency: "Monthly on 25th at 9:00 AM",
      channel: "slack",
      slackChannel: "#engineering"
    },
    lastUpdated: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
    timesPlayed: 1098
  },
  {
    id: 26,
    title: "Compliance & Audit Readiness",
    summary: "SOC 2 Type II audit 87% complete. All 34 controls documented. 98% of staff security certified. Zero privacy incidents.",
    details: "SOC 2 audit preparation at 87% with all 34 control requirements documented (audit May 15-19). GDPR and CCPA fully compliant. Security training completed by 98% of staff. Vendor assessment found only 2 low-risk items. Zero privacy incidents reported.",
    metrics: [
      { label: "SOC 2 progress", value: "87% complete" },
      { label: "Training", value: "98% certified" },
      { label: "Vendor risk", value: "2 low-risk items" },
      { label: "Privacy incidents", value: "0 reported" }
    ],
    data: generateMockData(4, 'up'),
    icon: Shield,
    status: "Audit-ready",
    progress: 87,
    duration: 10,
    owner: {
      name: "Skylar Reed",
      email: "skylar@company.com"
    },
    schedule: {
      enabled: true,
      frequency: "Monthly on 30th at 2:00 PM",
      channel: "email"
    },
    lastUpdated: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(),
    timesPlayed: 654
  }
];

}
