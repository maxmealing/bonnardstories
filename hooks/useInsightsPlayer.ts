import { useState, useEffect, useCallback } from "react";
import { Insight } from "@/types/insights";

interface UseInsightsPlayerReturn {
  isGlobalPlaying: boolean;
  currentPlayingId: number | null;
  cardProgress: { [key: number]: number };
  timeRemaining: number;
  elapsedTime: number;
  handleGlobalPlayPause: () => void;
  handleCardPlay: (id: number, e: React.MouseEvent) => void;
  setIsGlobalPlaying: (playing: boolean) => void;
  setCurrentPlayingId: (id: number | null) => void;
}

/**
 * Custom hook to manage the playback state of insights
 */
export function useInsightsPlayer(
  insights: Insight[]
): UseInsightsPlayerReturn {
  const [isGlobalPlaying, setIsGlobalPlaying] = useState(false);
  const [currentPlayingId, setCurrentPlayingId] = useState<number | null>(null);
  const [cardProgress, setCardProgress] = useState<{ [key: number]: number }>({});
  const [timeRemaining, setTimeRemaining] = useState<number>(0);
  const [elapsedTime, setElapsedTime] = useState<number>(0);

  // Auto-play timer effect
  useEffect(() => {
    if (!isGlobalPlaying || currentPlayingId === null) {
      return;
    }

    const currentInsight = insights.find((i) => i.id === currentPlayingId);
    if (!currentInsight) {
      return;
    }

    const duration = currentInsight.duration;
    const currentProgress = cardProgress[currentPlayingId] || 0;
    const startTime = Date.now() - currentProgress * 1000;

    const interval = setInterval(() => {
      const elapsed = (Date.now() - startTime) / 1000;
      const newProgress = Math.min((elapsed / duration) * 100, 100);

      setCardProgress((prev) => ({
        ...prev,
        [currentPlayingId]: newProgress,
      }));

      setElapsedTime(Math.floor(elapsed));
      setTimeRemaining(Math.max(0, duration - Math.floor(elapsed)));

      if (newProgress >= 100) {
        setIsGlobalPlaying(false);
        setCurrentPlayingId(null);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [isGlobalPlaying, currentPlayingId, insights, cardProgress]);

  const handleGlobalPlayPause = useCallback(() => {
    if (!isGlobalPlaying && currentPlayingId === null && insights.length > 0) {
      setCurrentPlayingId(insights[0].id);
      setIsGlobalPlaying(true);
    } else {
      setIsGlobalPlaying(!isGlobalPlaying);
    }
  }, [isGlobalPlaying, currentPlayingId, insights]);

  const handleCardPlay = useCallback(
    (id: number, e: React.MouseEvent) => {
      e.stopPropagation();

      if (currentPlayingId === id && isGlobalPlaying) {
        setIsGlobalPlaying(false);
      } else {
        setCurrentPlayingId(id);
        setIsGlobalPlaying(true);
      }
    },
    [currentPlayingId, isGlobalPlaying]
  );

  return {
    isGlobalPlaying,
    currentPlayingId,
    cardProgress,
    timeRemaining,
    elapsedTime,
    handleGlobalPlayPause,
    handleCardPlay,
    setIsGlobalPlaying,
    setCurrentPlayingId,
  };
}
