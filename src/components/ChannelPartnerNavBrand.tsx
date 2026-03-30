import { Link } from "react-router-dom";
import {
  AUTHORIZED_PARTNER_SUBTITLE,
  CHANNEL_PARTNER_DISPLAY_NAME,
  CHANNEL_PARTNER_LOGO_SRC,
} from "@/constants/channelPartnerLegal";

type Props = {
  /** Light text on hero (home, not scrolled); dark when scrolled or on inner pages */
  subtle?: boolean;
  className?: string;
};

export default function ChannelPartnerNavBrand({ subtle, className = "" }: Props) {
  const subColor = subtle
    ? "text-white/85"
    : "text-muted-foreground";

  return (
    <Link
      to="/"
      className={`flex flex-col gap-0.5 min-w-0 max-w-[62vw] sm:max-w-md transition-colors ${className}`}
      aria-label={`${CHANNEL_PARTNER_DISPLAY_NAME} — Home`}
    >
      <img
        src={CHANNEL_PARTNER_LOGO_SRC}
        alt={CHANNEL_PARTNER_DISPLAY_NAME}
        className="h-7 sm:h-8 w-auto max-w-[200px] sm:max-w-[240px] object-contain object-left"
        width={240}
        height={32}
      />
      <span
        className={`text-[10px] sm:text-[11px] leading-snug font-medium ${subColor}`}
      >
        {AUTHORIZED_PARTNER_SUBTITLE}
      </span>
    </Link>
  );
}
