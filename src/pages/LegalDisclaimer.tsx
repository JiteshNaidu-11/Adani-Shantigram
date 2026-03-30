import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import {
  CHANNEL_PARTNER_DISPLAY_NAME,
  CHANNEL_PARTNER_RERA,
  COMPANY_ADDRESS,
  COMPANY_EMAIL,
  COMPANY_PHONE,
  LEGAL_PAGE_DOCUMENT_TITLE,
  LEGAL_DISCLAIMER_PARAGRAPHS,
  PROJECT_RERA,
  RERA_WEBSITE_URL,
} from "@/constants/channelPartnerLegal";
import { useDocumentTitle } from "@/hooks/usePageTitle";

const cardClass =
  "rounded-xl border border-border bg-card p-6 sm:p-8 shadow-sm space-y-4";

export default function LegalDisclaimer() {
  useDocumentTitle(LEGAL_PAGE_DOCUMENT_TITLE);

  const phoneIsPlaceholder = COMPANY_PHONE.startsWith("[");
  const emailIsPlaceholder = COMPANY_EMAIL.startsWith("[");

  return (
    <div className="min-h-screen bg-background pb-24 md:pb-8">
      <main className="pt-24 md:pt-28">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 section-padding max-w-3xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent mb-8 transition-colors"
          >
            <ArrowLeft className="size-4 shrink-0" />
            Back to home
          </Link>

          <h1 className="font-display text-3xl sm:text-4xl md:text-[2.25rem] text-foreground text-center mb-10 leading-tight">
            Legal Disclaimer &amp; RERA Information
          </h1>

          <div className="space-y-8">
            <section className={cardClass} aria-labelledby="company-heading">
              <h2 id="company-heading" className="font-display text-xl sm:text-2xl text-foreground pb-2 border-b border-border">
                Company Information
              </h2>
              <dl className="space-y-4 text-sm sm:text-base">
                <div className="flex gap-3 sm:gap-4">
                  <dt className="shrink-0 font-medium text-foreground w-36 sm:w-44">Company Name</dt>
                  <dd className="text-muted-foreground">{CHANNEL_PARTNER_DISPLAY_NAME}</dd>
                </div>
                <div className="flex gap-3 sm:gap-4">
                  <dt className="shrink-0 font-medium text-foreground w-36 sm:w-44 pt-0.5">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="size-4 opacity-70 hidden sm:inline" aria-hidden />
                      Address
                    </span>
                  </dt>
                  <dd className="text-muted-foreground leading-relaxed">{COMPANY_ADDRESS}</dd>
                </div>
                <div className="flex gap-3 sm:gap-4 flex-wrap sm:flex-nowrap">
                  <dt className="shrink-0 font-medium text-foreground w-36 sm:w-44">
                    <span className="inline-flex items-center gap-1.5">
                      <Phone className="size-4 opacity-70 hidden sm:inline" aria-hidden />
                      Phone
                    </span>
                  </dt>
                  <dd className="text-muted-foreground">
                    {phoneIsPlaceholder ? (
                      COMPANY_PHONE
                    ) : (
                      <a href={`tel:${COMPANY_PHONE.replace(/\s/g, "")}`} className="text-accent hover:underline">
                        {COMPANY_PHONE}
                      </a>
                    )}
                  </dd>
                </div>
                <div className="flex gap-3 sm:gap-4 flex-wrap sm:flex-nowrap">
                  <dt className="shrink-0 font-medium text-foreground w-36 sm:w-44">
                    <span className="inline-flex items-center gap-1.5">
                      <Mail className="size-4 opacity-70 hidden sm:inline" aria-hidden />
                      Email
                    </span>
                  </dt>
                  <dd className="text-muted-foreground break-all">
                    {emailIsPlaceholder ? (
                      COMPANY_EMAIL
                    ) : (
                      <a href={`mailto:${COMPANY_EMAIL}`} className="text-accent hover:underline">
                        {COMPANY_EMAIL}
                      </a>
                    )}
                  </dd>
                </div>
              </dl>
            </section>

            <section className={cardClass} aria-labelledby="rera-heading">
              <h2 id="rera-heading" className="font-display text-xl sm:text-2xl text-foreground pb-2 border-b border-border">
                RERA Information
              </h2>
              <ul className="space-y-3 text-sm sm:text-base text-muted-foreground">
                <li>
                  <span className="font-medium text-foreground">Channel Partner RERA Number: </span>
                  {CHANNEL_PARTNER_RERA}
                </li>
                <li>
                  <span className="font-medium text-foreground">Project RERA Number: </span>
                  {PROJECT_RERA}
                </li>
                <li>
                  <span className="font-medium text-foreground">RERA Website Link: </span>
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
            </section>

            <section
              className={`${cardClass} bg-zinc-50 dark:bg-zinc-900/40 border-zinc-200 dark:border-zinc-700`}
              aria-labelledby="disclaimer-heading"
            >
              <h2 id="disclaimer-heading" className="font-display text-xl sm:text-2xl text-foreground pb-2 border-b border-zinc-200 dark:border-zinc-600">
                Legal Disclaimer
              </h2>
              <div className="space-y-4 text-sm sm:text-[15px] leading-relaxed text-zinc-800 dark:text-zinc-200">
                {LEGAL_DISCLAIMER_PARAGRAPHS.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
