import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import {
  CHANNEL_PARTNER_IDENTITY_LINE,
  CHANNEL_PARTNER_DISPLAY_NAME,
  CHANNEL_PARTNER_RERA,
  RERA_WEBSITE_URL,
} from "@/constants/channelPartnerLegal";
import LegalDisclaimerText from "@/components/legal/LegalDisclaimerText";

const compliancePanelClass =
  "rounded-xl border border-zinc-200 bg-zinc-100 p-5 sm:p-6 shadow-sm " +
  "dark:border-zinc-700 dark:bg-zinc-900/50 dark:shadow-none";

export default function MandatoryLegalBlock({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`space-y-4 ${className}`}>
      <div className={compliancePanelClass}>
        <h2 className="font-display text-base sm:text-lg text-foreground mb-3">
          Channel partner &amp; RERA
        </h2>

        <p className="text-sm sm:text-[15px] text-foreground font-medium leading-relaxed mb-6">
          {CHANNEL_PARTNER_IDENTITY_LINE}
        </p>

        <div className="mb-6 pb-6 border-b border-zinc-200 dark:border-zinc-600">
          <p className="text-xs font-semibold uppercase tracking-wide text-foreground mb-3">
            RERA
          </p>
          <ul className="space-y-2 text-sm text-zinc-800 dark:text-zinc-200">
            <li>
              <span className="font-medium text-foreground">Channel Partner RERA Number: </span>
              {CHANNEL_PARTNER_RERA}
            </li>
            <li className="pt-1">
              <a
                href={RERA_WEBSITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-accent font-medium hover:underline break-all"
              >
                {RERA_WEBSITE_URL}
                <ExternalLink className="size-3.5 shrink-0" aria-hidden />
              </a>
            </li>
          </ul>
        </div>

        <div className="mb-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-foreground mb-3">
            Legal disclaimer (summary)
          </p>
          <LegalDisclaimerText
            variant="summary"
            className="text-zinc-800 dark:text-zinc-200"
          />
        </div>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-2 border-t border-zinc-200 dark:border-zinc-600 text-sm">
          <span className="text-muted-foreground">
            Channel Partner: {CHANNEL_PARTNER_DISPLAY_NAME}
          </span>
          <Link
            to="/legal-disclaimer"
            className="font-medium text-accent hover:underline"
          >
            Legal Disclaimer
          </Link>
        </div>
      </div>
    </div>
  );
}
