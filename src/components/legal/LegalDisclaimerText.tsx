import {
  LEGAL_DISCLAIMER_PARAGRAPHS,
  LEGAL_DISCLAIMER_SUMMARY_PARAGRAPHS,
} from "@/constants/channelPartnerLegal";

type Props = {
  className?: string;
  compact?: boolean;
  /** Full text on Legal page; summary for footer, landing, contact. */
  variant?: "full" | "summary";
};

export default function LegalDisclaimerText({
  className = "",
  compact = false,
  variant = "full",
}: Props) {
  const paragraphs =
    variant === "summary"
      ? LEGAL_DISCLAIMER_SUMMARY_PARAGRAPHS
      : LEGAL_DISCLAIMER_PARAGRAPHS;

  return (
    <div
      className={`${compact ? "space-y-2" : "space-y-3"} text-xs sm:text-sm text-muted-foreground leading-relaxed ${className}`}
    >
      {paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  );
}
