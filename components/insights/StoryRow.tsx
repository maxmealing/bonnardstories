import { Pause, Play } from "lucide-react";
import { Insight } from "@/types/insights";
import { formatRelativeTime } from "@/lib/insights/utils";

interface StoryRowProps {
  insight: Insight;
  index: number;
  isPlaying: boolean;
  onSelect: (insight: Insight) => void;
  onPlay: (e: React.MouseEvent) => void;
  onShare: (e: React.MouseEvent) => void;
  onUpdateRequest: (e: React.MouseEvent) => void;
}

export function StoryRow({
  insight,
  index,
  isPlaying,
  onSelect,
  onPlay,
  onShare,
  onUpdateRequest,
}: StoryRowProps) {
  return (
    <div
      onClick={() => onSelect(insight)}
      className="group grid grid-cols-[24px_1fr_100px_100px] gap-4 px-3 py-3 rounded-md hover:bg-neutral-800/50 transition-colors cursor-pointer items-center"
    >
      {/* Row Number / Play Button */}
      <div className="flex items-center justify-center">
        <span className="text-neutral-400 text-sm group-hover:hidden">
          {index + 1}
        </span>
        <button
          onClick={onPlay}
          className="hidden group-hover:flex items-center justify-center hover:scale-110 transition-transform"
        >
          {isPlaying ? (
            <Pause className="h-3.5 w-3.5 text-white fill-white" />
          ) : (
            <Play className="h-3.5 w-3.5 text-white fill-white" />
          )}
        </button>
      </div>

      {/* Title */}
      <div className="min-w-0">
        <span className="text-sm text-white truncate block">{insight.title}</span>
      </div>

      {/* Times Played */}
      <div className="text-sm text-neutral-300 tabular-nums text-right">
        {insight.timesPlayed.toLocaleString()}
      </div>

      {/* Last Updated */}
      <div className="text-sm text-neutral-400 text-right">
        {formatRelativeTime(insight.lastUpdated)}
      </div>
    </div>
  );
}
