import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Chapter } from "@/types/insights";
import { BarChart3, Users, Settings, Coins } from "lucide-react";

interface ChapterSidebarProps {
  chapters: Chapter[];
  selectedChapter: string;
  totalStories: number;
  onChapterSelect: (chapterId: string) => void;
  onNewStory?: () => void;
}

export function ChapterSidebar({
  chapters,
  selectedChapter,
  totalStories,
  onChapterSelect,
  onNewStory,
}: ChapterSidebarProps) {
  return (
    <Card className="w-72 bg-neutral-900 border-neutral-800 flex flex-col h-full overflow-hidden p-0 gap-0">
      {/* Sidebar Header */}
      <div className="px-4 py-3 border-b border-neutral-800 flex-shrink-0">
        <h1 className="text-base font-bold text-white">Acme Company Stories</h1>
      </div>

      {/* Credits/Plan Section */}
      <div className="p-2.5 border-b border-neutral-800 flex-shrink-0">
        <div className="bg-neutral-800/50 rounded-lg p-2.5 space-y-1.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-neutral-400">
              <Coins className="h-4 w-4" />
              <span className="text-xs font-medium">Credits</span>
            </div>
            <span className="text-xs text-neutral-400">Free Plan</span>
          </div>

          {/* Progress Bar */}
          <div className="space-y-1">
            <div className="h-1.5 bg-neutral-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#ECBE43] rounded-full"
                style={{ width: '40.47%' }}
              />
            </div>
            <div className="flex justify-end">
              <span className="text-xs text-neutral-400 tabular-nums">202.34/500</span>
            </div>
          </div>

          {/* Upgrade Button */}
          <Button
            variant="secondary"
            className="w-full h-7 text-xs font-medium bg-neutral-700 hover:bg-neutral-600 text-white"
          >
            Upgrade to a paid plan
          </Button>
        </div>
      </div>

      {/* Chapters List */}
      <div className="flex-1 overflow-y-auto p-2.5 space-y-0.5 min-h-0">
        {/* Library Header with New Chapter Button */}
        <div className="flex items-center justify-between mb-1.5">
          <h3 className="text-sm font-semibold text-white">Your Data Library</h3>
          {onNewStory && (
            <Button
              onClick={onNewStory}
              variant="ghost"
              size="sm"
              className="text-neutral-400 hover:text-white hover:bg-neutral-800 h-7 text-xs font-normal px-2"
            >
              + New Chapter
            </Button>
          )}
        </div>

        {chapters.map((chapter) => {
          const ChapterIcon = chapter.icon;
          const isActive = selectedChapter === chapter.id;
          const storyCount = chapter.storyIds.length;

          return (
            <button
              key={chapter.id}
              onClick={() => onChapterSelect(chapter.id)}
              className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-md transition-colors ${
                isActive
                  ? "bg-neutral-800 text-white"
                  : "text-neutral-400 hover:text-white hover:bg-neutral-900"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <ChapterIcon className="h-4 w-4" />
                <span className="text-sm font-medium">{chapter.name}</span>
              </div>
              <span className="text-xs text-neutral-500 font-semibold">
                {storyCount}
              </span>
            </button>
          );
        })}
      </div>

      {/* Menu Items */}
      <div className="p-2.5 border-t border-neutral-800 flex-shrink-0 space-y-0.5">
        <button className="w-full flex items-center gap-2.5 px-2.5 py-1.5 rounded-md text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors">
          <BarChart3 className="h-4 w-4" />
          <span className="text-sm">Data</span>
        </button>
        <button className="w-full flex items-center gap-2.5 px-2.5 py-1.5 rounded-md text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors">
          <Users className="h-4 w-4" />
          <span className="text-sm">Audiences</span>
        </button>
        <button className="w-full flex items-center gap-2.5 px-2.5 py-1.5 rounded-md text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors">
          <Settings className="h-4 w-4" />
          <span className="text-sm">Settings</span>
        </button>
      </div>

      {/* User Profile Section */}
      <div className="p-2.5 border-t border-neutral-800 flex-shrink-0">
        <div className="flex items-center gap-2.5 px-1.5 py-1.5 rounded-md hover:bg-neutral-800 transition-colors cursor-pointer">
          <div className="h-8 w-8 rounded-full bg-[#ECBE43] flex items-center justify-center text-gray-900 font-semibold text-xs flex-shrink-0">
            MM
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white truncate">Max Mealing</p>
            <p className="text-xs text-neutral-400 truncate">max@bonnard.ai</p>
          </div>
        </div>
      </div>
    </Card>
  );
}
