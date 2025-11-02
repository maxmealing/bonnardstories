"use client";

import { useMemo } from "react";
import { ChapterSidebar } from "./insights/ChapterSidebar";
import { StoryList } from "./insights/StoryList";
import { StoryDetailPanel } from "./insights/StoryDetailPanel";
import { chapters } from "@/lib/insights/chapters";
import { useInsightsPlayer } from "@/hooks/useInsightsPlayer";
import { useInsightsUI } from "@/hooks/useInsightsUI";
import { calculateTotalDuration } from "@/lib/insights/utils";
import { Insight } from "@/types/insights";

// Import insights data from the original component
// For now, we'll need to keep the insights array in this file
// In a real-world scenario, this would come from an API or database
import { getInsights } from "@/lib/insights/insightsData";

export default function BonnardInsightStories() {
  // Get insights data
  const insights = getInsights();

  // UI State Management
  const {
    selectedInsight,
    selectedChapter,
    isRightPanelOpen,
    showCopiedToast,
    setSelectedInsight,
    setSelectedChapter,
    setIsRightPanelOpen,
    handleShare,
    handleUpdateRequest,
  } = useInsightsUI();

  // Player State Management
  const {
    isGlobalPlaying,
    currentPlayingId,
    handleGlobalPlayPause,
    handleCardPlay,
    setIsGlobalPlaying,
    setCurrentPlayingId,
  } = useInsightsPlayer(insights);

  // Get current chapter data and filtered stories
  const selectedChapterData = useMemo(
    () => chapters.find((c) => c.id === selectedChapter),
    [selectedChapter]
  );

  const chapterStories = useMemo(
    () =>
      insights.filter((insight) =>
        selectedChapterData?.storyIds.includes(insight.id)
      ),
    [insights, selectedChapterData]
  );

  const totalDuration = useMemo(
    () => calculateTotalDuration(chapterStories),
    [chapterStories]
  );

  // Handle chapter selection
  const handleChapterSelect = (chapterId: string) => {
    setSelectedChapter(chapterId);
    setIsGlobalPlaying(false);
    setCurrentPlayingId(null);
  };

  // Handle story play
  const handleStoryPlay = (id: number, e: React.MouseEvent) => {
    if (currentPlayingId === id && isGlobalPlaying) {
      setIsGlobalPlaying(false);
    } else {
      handleCardPlay(id, e);
    }
  };

  // Handle viewing mode changes
  const handleViewAsDashboard = () => {
    console.log("View as Dashboard clicked");
    // TODO: Implement dashboard view
  };

  const handleListenAsPodcast = () => {
    console.log("Listen as Podcast clicked");
    // TODO: Implement podcast mode
  };

  const handleViewAsPresentation = () => {
    console.log("View as Presentation clicked");
    // TODO: Implement presentation mode
  };

  // Handle story update
  const handleStoryUpdate = () => {
    console.log("Update story clicked");
    // TODO: Implement story update/refresh
  };

  if (!selectedChapterData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-screen bg-neutral-950 text-white p-4 flex gap-4 overflow-hidden">
      {/* Left Sidebar - Chapters */}
      <ChapterSidebar
        chapters={chapters}
        selectedChapter={selectedChapter}
        totalStories={insights.length}
        onChapterSelect={handleChapterSelect}
        onNewStory={() => console.log("New story clicked")}
      />

      {/* Main Content - Story List */}
      <StoryList
        chapter={selectedChapterData}
        stories={chapterStories}
        totalDuration={totalDuration}
        isGlobalPlaying={isGlobalPlaying}
        currentPlayingId={currentPlayingId}
        selectedInsight={selectedInsight}
        isRightPanelOpen={isRightPanelOpen}
        onGlobalPlayPause={handleGlobalPlayPause}
        onStorySelect={setSelectedInsight}
        onStoryPlay={handleStoryPlay}
        onStoryShare={handleShare}
        onUpdateRequest={handleUpdateRequest}
        onViewAsDashboard={handleViewAsDashboard}
        onListenAsPodcast={handleListenAsPodcast}
        onViewAsPresentation={handleViewAsPresentation}
      />

      {/* Right Panel - Story Details */}
      {selectedInsight && (
        <StoryDetailPanel
          insight={selectedInsight}
          isOpen={isRightPanelOpen}
          onClose={() => setSelectedInsight(null)}
          onUpdate={handleStoryUpdate}
        />
      )}

      {/* Toast Notification */}
      {showCopiedToast && (
        <div className="fixed bottom-8 right-8 bg-[#ECBE43] text-gray-900 px-6 py-3 rounded-lg shadow-lg font-medium z-[100]">
          Link copied to clipboard!
        </div>
      )}
    </div>
  );
}
