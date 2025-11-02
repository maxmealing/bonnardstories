import { Clock, MessageSquare, Mail, X, RefreshCw } from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Insight, StoryRun } from "@/types/insights";

interface StoryDetailPanelProps {
  insight: Insight;
  isOpen: boolean;
  onClose: () => void;
  onUpdate?: () => void;
}

export function StoryDetailPanel({ insight, isOpen, onClose, onUpdate }: StoryDetailPanelProps) {
  if (!isOpen) return null;

  const formatRunDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    let relativeTime = "";
    if (diffMins < 60) {
      relativeTime = `${diffMins}m ago`;
    } else if (diffHours < 24) {
      relativeTime = `${diffHours}h ago`;
    } else {
      relativeTime = `${diffDays}d ago`;
    }

    return {
      date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      time: date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }),
      relative: relativeTime
    };
  };

  // Use runs if available, otherwise create a single run from current data
  const runs = insight.runs || [{
    id: 'current',
    timestamp: insight.lastUpdated,
    content: insight.details,
    metrics: insight.metrics,
    data: insight.data
  }];

  const latestRun = runs[0];
  const previousRuns = runs.slice(1);
  const latestRunDate = formatRunDate(latestRun.timestamp);

  return (
    <Card className="w-[400px] bg-neutral-900 border-neutral-800 flex flex-col h-full overflow-hidden p-0 gap-0">
      {/* Panel Header */}
      <div className="flex flex-row justify-between items-start px-6 py-5 border-b border-neutral-800 bg-neutral-950/50 backdrop-blur-sm flex-shrink-0">
        <div className="flex flex-col gap-1 flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-white">{insight.title}</h3>
          <span className="text-sm text-neutral-400">{insight.owner.name}</span>
        </div>

        <button
          onClick={onClose}
          className="p-2 hover:bg-neutral-800 rounded-full transition-colors flex-shrink-0"
        >
          <X className="h-5 w-5 text-neutral-400" />
        </button>
      </div>

      {/* Panel Content */}
      <div className="p-6 overflow-y-auto flex-1 min-h-0">
        <div className="space-y-4">
          {/* Schedule Information */}
          {insight.schedule?.enabled && (
            <div className="pb-4 border-b border-neutral-800">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-sm text-neutral-300">
                  <Clock className="h-4 w-4 text-neutral-400" />
                  <span>{insight.schedule.frequency}</span>
                </div>
                {insight.schedule.channel === "slack" && insight.schedule.slackChannel ? (
                  <div className="flex items-center gap-1.5 px-2.5 py-1 bg-neutral-800 rounded text-xs text-neutral-300">
                    <MessageSquare className="h-3.5 w-3.5 text-[#ECBE43]" />
                    <span>{insight.schedule.slackChannel}</span>
                  </div>
                ) : insight.schedule.channel === "email" ? (
                  <div className="flex items-center gap-1.5 px-2.5 py-1 bg-neutral-800 rounded text-xs text-neutral-300">
                    <Mail className="h-3.5 w-3.5 text-[#ECBE43]" />
                    <span>Email</span>
                  </div>
                ) : null}
              </div>
            </div>
          )}

          {/* Update Button */}
          <div className="flex justify-between items-center">
            <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Story Runs</h4>
            <Button
              onClick={onUpdate}
              variant="outline"
              size="sm"
              className="h-8 px-3 bg-neutral-800 border-neutral-700 hover:bg-neutral-700 text-white text-xs"
            >
              <RefreshCw className="h-3 w-3 mr-1.5" />
              Update
            </Button>
          </div>

          {/* Latest Run */}
          <div className="space-y-3">
            <div className="flex items-baseline gap-2">
              <span className="text-xs font-medium text-[#ECBE43]">Latest Run</span>
              <span className="text-xs text-neutral-500">
                {latestRunDate.date} at {latestRunDate.time} • {latestRunDate.relative}
              </span>
            </div>

            {/* Latest Run Content Card */}
            <div className="bg-neutral-950/50 border border-neutral-800 rounded-lg p-4 space-y-4">
              <p className="text-sm leading-relaxed text-neutral-300">
                {latestRun.content}
              </p>

              {/* Metrics */}
              <div className="divide-y divide-neutral-800 text-sm border border-neutral-800 rounded-lg p-3 bg-neutral-900/50">
                {latestRun.metrics.map((metric, i) => (
                  <div key={i} className="flex justify-between py-2.5">
                    <span className="text-neutral-400 text-xs">{metric.label}</span>
                    <span className="font-medium text-white text-xs">{metric.value}</span>
                  </div>
                ))}
              </div>

              {/* Chart */}
              <div className="bg-neutral-900/50 p-4 rounded border border-neutral-800">
                <ResponsiveContainer width="100%" height={200}>
                  <AreaChart data={latestRun.data}>
                    <defs>
                      <linearGradient id="gradient-modal" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#ECBE43" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#ECBE43" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="#e5e5e5"
                      opacity={0.1}
                      vertical={false}
                    />
                    <XAxis
                      dataKey="day"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#999", fontSize: 10 }}
                      dy={5}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#999", fontSize: 10 }}
                      dx={-5}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#262626",
                        border: "1px solid #404040",
                        borderRadius: "6px",
                        fontSize: "12px"
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="#ECBE43"
                      strokeWidth={2}
                      fill="url(#gradient-modal)"
                      dot={false}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Previous Runs */}
          {previousRuns.length > 0 && (
            <div className="space-y-2 pt-2">
              <h5 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Previous Runs</h5>
              <div className="space-y-1.5">
                {previousRuns.map((run) => {
                  const runDate = formatRunDate(run.timestamp);
                  return (
                    <div
                      key={run.id}
                      className="bg-neutral-800/50 border border-neutral-800 rounded px-3 py-2 hover:bg-neutral-800 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-neutral-400">
                          {runDate.date} at {runDate.time}
                        </span>
                        <span className="text-xs text-neutral-500">{runDate.relative}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}
