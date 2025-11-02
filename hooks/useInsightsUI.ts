import { useState, useCallback } from "react";
import { Insight } from "@/types/insights";

interface UseInsightsUIReturn {
  selectedInsight: Insight | null;
  selectedChapter: string;
  isRightPanelOpen: boolean;
  showCopiedToast: boolean;
  setSelectedInsight: (insight: Insight | null) => void;
  setSelectedChapter: (chapterId: string) => void;
  setIsRightPanelOpen: (isOpen: boolean) => void;
  handleShare: (insightId: number) => void;
  handleUpdateRequest: (insightId: number) => void;
}

/**
 * Custom hook to manage UI state for insights
 */
export function useInsightsUI(defaultChapterId = "revenue-growth"): UseInsightsUIReturn {
  const [selectedInsight, setSelectedInsight] = useState<Insight | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<string>(defaultChapterId);
  const [isRightPanelOpen, setIsRightPanelOpen] = useState(true);
  const [showCopiedToast, setShowCopiedToast] = useState(false);

  const handleShare = useCallback((insightId: number) => {
    const url = `${window.location.origin}/?insight=${insightId}`;
    navigator.clipboard.writeText(url);
    setShowCopiedToast(true);
    setTimeout(() => setShowCopiedToast(false), 2000);
  }, []);

  const handleUpdateRequest = useCallback((insightId: number) => {
    console.log("Update requested for insight:", insightId);
    // TODO: Implement update request logic
  }, []);

  return {
    selectedInsight,
    selectedChapter,
    isRightPanelOpen,
    showCopiedToast,
    setSelectedInsight,
    setSelectedChapter,
    setIsRightPanelOpen,
    handleShare,
    handleUpdateRequest,
  };
}
