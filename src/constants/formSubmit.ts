/** All enquiry forms POST to FormSubmit at this address */
export const FORMSUBMIT_ACTION = "https://formsubmit.co/info@propraiserealtors.com";

export const FORMSUBMIT_SUBJECT = "New Lead from Adani Shantigram Website";

export const FORMSUBMIT_AUTORESPONSE =
  "Thank you for your interest in Adani Shantigram. Our team will contact you shortly.";

/** FormSubmit expects an absolute URL for _next */
export function getFormSubmitNextUrl(): string {
  if (typeof window === "undefined") return "";
  return `${window.location.origin}/thank-you`;
}
