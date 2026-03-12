import { useEffect, useRef } from "react";

declare global {
  interface Window {
    YT?: {
      Player: new (
        el: string | HTMLElement,
        opts: {
          videoId: string;
          playerVars?: { autoplay?: number; mute?: number };
          events?: { onReady: (e: { target: YTPlayer }) => void };
        }
      ) => YTPlayer;
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

interface YTPlayer {
  playVideo: () => void;
  pauseVideo: () => void;
}

interface YouTubeScrollPlayerProps {
  videoId: string;
  title?: string;
  className?: string;
  autoplayOnScroll?: boolean;
}

export default function YouTubeScrollPlayer({
  videoId,
  title = "Video",
  className = "",
  autoplayOnScroll = true,
}: YouTubeScrollPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YTPlayer | null>(null);

  useEffect(() => {
    if (!videoId) return;

    const initYouTube = () => {
      if (!containerRef.current || !window.YT?.Player) return;
      const el = containerRef.current;
      if (!el.id) el.id = `yt-player-${videoId}-${Math.random().toString(36).slice(2)}`;
      try {
        const player = new window.YT.Player(el.id, {
          videoId,
          playerVars: { autoplay: 0, mute: 0 },
          events: {
            onReady(ev: { target: YTPlayer }) {
              playerRef.current = ev.target;
            },
          },
        });
        if (typeof (player as unknown as { playVideo?: () => void }).playVideo === "function") {
          playerRef.current = player as unknown as YTPlayer;
        }
      } catch {
        // fallback: show iframe without API
      }
    };

    if (window.YT?.Player) {
      initYouTube();
    } else {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScript = document.getElementsByTagName("script")[0];
      firstScript?.parentNode?.insertBefore(tag, firstScript);
      window.onYouTubeIframeAPIReady = () => {
        initYouTube();
      };
    }
  }, [videoId]);

  useEffect(() => {
    if (!autoplayOnScroll || !containerRef.current) return;

    const io = new IntersectionObserver(
      (entries) => {
        const [e] = entries;
        const player = playerRef.current;
        if (!player) return;
        try {
          if (e.isIntersecting) {
            player.playVideo?.();
          } else {
            player.pauseVideo?.();
          }
        } catch {
          // ignore
        }
      },
      { threshold: 0.2, rootMargin: "0px" }
    );

    io.observe(containerRef.current);
    return () => io.disconnect();
  }, [videoId, autoplayOnScroll]);

  return (
    <div
      ref={containerRef}
      className={className}
      title={title}
      style={{ aspectRatio: "16/9" }}
    />
  );
}
