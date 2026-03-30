import { CHANNEL_PARTNER_BRANDING_SENTENCE } from "@/constants/channelPartnerLegal";

export default function ChannelPartnerBrandingLine({
  className = "",
}: {
  className?: string;
}) {
  return (
    <p className={`text-sm text-muted-foreground leading-relaxed ${className}`}>
      {CHANNEL_PARTNER_BRANDING_SENTENCE}
    </p>
  );
}
