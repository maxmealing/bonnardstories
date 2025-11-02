import { Pause, Play, LayoutDashboard, Headphones, Presentation } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Chapter, Insight } from "@/types/insights";
import { formatTime } from "@/lib/insights/utils";
import { StoryRow } from "./StoryRow";

interface StoryListProps {
  chapter: Chapter;
  stories: Insight[];
  totalDuration: number;
  isGlobalPlaying: boolean;
  currentPlayingId: number | null;
  selectedInsight: Insight | null;
  isRightPanelOpen: boolean;
  onGlobalPlayPause: () => void;
  onStorySelect: (insight: Insight) => void;
  onStoryPlay: (id: number, e: React.MouseEvent) => void;
  onStoryShare: (id: number) => void;
  onUpdateRequest: (id: number) => void;
  onViewAsDashboard: () => void;
  onListenAsPodcast: () => void;
  onViewAsPresentation: () => void;
}

export function StoryList({
  chapter,
  stories,
  totalDuration,
  isGlobalPlaying,
  currentPlayingId,
  selectedInsight,
  isRightPanelOpen,
  onGlobalPlayPause,
  onStorySelect,
  onStoryPlay,
  onStoryShare,
  onUpdateRequest,
  onViewAsDashboard,
  onListenAsPodcast,
  onViewAsPresentation,
}: StoryListProps) {
  return (
    <Card
      className={`flex-1 bg-neutral-900 border-neutral-800 flex flex-col h-full overflow-hidden p-0 gap-0 ${
        !isRightPanelOpen && selectedInsight ? "mr-0" : ""
      }`}
    >
      {/* Header with Chapter Title and Viewing Mode Buttons */}
      <div className="bg-gradient-to-b from-neutral-800 to-neutral-900 p-6 border-b border-neutral-800 flex-shrink-0">
        <div className="flex items-center justify-between gap-6">
          {/* Chapter Info */}
          <div className="flex-1">
            <p className="text-xs text-neutral-400 uppercase tracking-wider mb-1">
              Chapter
            </p>
            <h2 className="text-3xl font-bold text-white">{chapter.name}</h2>
          </div>

          {/* Viewing Mode Buttons */}
          <div className="flex gap-2 flex-shrink-0">
            <button
              onClick={onViewAsDashboard}
              className="h-12 w-12 rounded-md bg-[#ECBE43] hover:bg-[#C9A035] transition-colors flex items-center justify-center"
              title="View as Dashboard"
            >
              <LayoutDashboard className="h-5 w-5 text-gray-900" />
            </button>
            <button
              onClick={onListenAsPodcast}
              className="h-12 w-12 rounded-md bg-[#ECBE43] hover:bg-[#C9A035] transition-colors flex items-center justify-center"
              title="Listen as Podcast"
            >
              <Headphones className="h-5 w-5 text-gray-900" />
            </button>
            <button
              onClick={onViewAsPresentation}
              className="h-12 w-12 rounded-md bg-[#ECBE43] hover:bg-[#C9A035] transition-colors flex items-center justify-center"
              title="View as Presentation"
            >
              <Presentation className="h-5 w-5 text-gray-900" />
            </button>
          </div>
        </div>
      </div>

      {/* Stories List/Table */}
      <div className="flex-1 overflow-y-auto min-h-0">
        <div className="px-4 py-4">
          {/* Table Header */}
          <div className="grid grid-cols-[24px_1fr_100px_100px] gap-4 px-3 py-2 text-xs text-neutral-400 uppercase tracking-wider border-b border-neutral-800 mb-2">
            <div className="text-center">#</div>
            <div>Title</div>
            <div className="text-right">Plays</div>
            <div className="text-right">Last Updated</div>
          </div>

          {/* Story Rows */}
          <div className="space-y-1">
            {stories.map((insight, index) => {
              const isPlaying = currentPlayingId === insight.id && isGlobalPlaying;

              return (
                <StoryRow
                  key={insight.id}
                  insight={insight}
                  index={index}
                  isPlaying={isPlaying}
                  onSelect={onStorySelect}
                  onPlay={(e) => {
                    e.stopPropagation();
                    onStoryPlay(insight.id, e);
                  }}
                  onShare={(e) => {
                    e.stopPropagation();
                    onStoryShare(insight.id);
                  }}
                  onUpdateRequest={(e) => {
                    e.stopPropagation();
                    onUpdateRequest(insight.id);
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Card>
  );
}
