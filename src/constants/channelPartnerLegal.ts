/**
 * Channel partner & RERA compliance. Override via .env where noted.
 */
/** Legal / alt text */
export const CHANNEL_PARTNER_DISPLAY_NAME = "Propraise Realtors LLP";

/** Footer & on-page channel partner identity (exact compliance wording) */
export const CHANNEL_PARTNER_IDENTITY_LINE =
  "Propraise Realtors LLP – Authorized Channel Partner for Shantigram";

/** Primary logo in header/footer — file in /public */
export const CHANNEL_PARTNER_LOGO_SRC = "/Propraise%20logo.png";

export const CHANNEL_PARTNER_RERA =
  import.meta.env.VITE_CHANNEL_PARTNER_RERA?.trim() ||
  "AG/GJ/AHMEDABAD/AHMEDABAD CITY/AA04302/210728R1";

export const PROJECT_RERA =
  import.meta.env.VITE_PROJECT_RERA?.trim() || CHANNEL_PARTNER_RERA;

/** Gujarat RERA */
export const RERA_WEBSITE_URL = "https://gujrera.gujarat.gov.in";

export const AUTHORIZED_PARTNER_SUBTITLE =
  "Authorized Channel Partner – Shantigram";

/** Branding line for contact, landing notice, etc. */
export const CHANNEL_PARTNER_BRANDING_SENTENCE = CHANNEL_PARTNER_IDENTITY_LINE;

/** Company details — set VITE_COMPANY_ADDRESS, VITE_COMPANY_PHONE, VITE_COMPANY_EMAIL or edit defaults */
export const COMPANY_ADDRESS =
  import.meta.env.VITE_COMPANY_ADDRESS?.trim() ||
  "SG Highway, Ahmedabad – Gandhinagar, Gujarat";

export const COMPANY_PHONE =
  import.meta.env.VITE_COMPANY_PHONE?.trim() || "+91 94093 74599";

export const COMPANY_EMAIL =
  import.meta.env.VITE_COMPANY_EMAIL?.trim() || "info@propraiserealtors.com";

/**
 * Full legal disclaimer (exact wording for Legal Disclaimer page & full blocks).
 */
export const LEGAL_DISCLAIMER_PARAGRAPHS = [
  "This is not an official website of Shantigram. This website belongs to Propraise Realtors LLP, an Authorized Channel Partner for Shantigram.",
  "This is not an advertisement within the meaning of RERA. This is not an offer, an invitation to offer and/or commitment of any nature.",
  "The images, plans, specifications, and other details shown on this website are for information purposes only and are subject to change without notice. The images include artistic impressions and are for representation purpose only.",
  "For official information, please visit the RERA website or contact the official developer sales team.",
] as const;

/** Shorter excerpt for footer / landing / contact (links to full page) */
export const LEGAL_DISCLAIMER_SUMMARY_PARAGRAPHS = [
  "This is not an official website of Shantigram. This website belongs to Propraise Realtors LLP, an Authorized Channel Partner for Shantigram.",
  "This is not an advertisement within the meaning of RERA. This is not an offer, an invitation to offer and/or commitment of any nature.",
] as const;

export const LEGAL_PAGE_DOCUMENT_TITLE =
  "Legal Disclaimer | Propraise Realtors – Authorized Channel Partner";

export const SITE_META_PROJECT_NAME = "Shantigram Ahmedabad";
