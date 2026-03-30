import { ExternalLink } from "lucide-react";
import {
  CHANNEL_PARTNER_RERA,
  PROJECT_RERA,
  RERA_WEBSITE_URL,
} from "@/constants/channelPartnerLegal";

export default function ReraStrip({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rounded-xl border border-border bg-card/50 px-4 py-3 text-xs sm:text-sm text-muted-foreground ${className}`}
    >
      <p className="font-medium text-foreground mb-2 text-sm">RERA</p>
      <ul className="space-y-1.5">
        <li>
          <span className="text-foreground/80">Project RERA Number: </span>
          {PROJECT_RERA}
        </li>
        <li>
          <span className="text-foreground/80">Channel Partner RERA Number: </span>
          {CHANNEL_PARTNER_RERA}
        </li>
        <li>
          <a
            href={RERA_WEBSITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-accent hover:underline break-all"
          >
            {RERA_WEBSITE_URL}
            <ExternalLink className="size-3.5 shrink-0" aria-hidden />
          </a>
        </li>
      </ul>
    </div>
  );
}
