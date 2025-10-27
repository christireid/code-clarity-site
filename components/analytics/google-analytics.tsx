"use client";

import Script from "next/script";

export function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  if (!gaId) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}

// Helper function to track custom events
export function trackEvent(
  eventName: string,
  eventParams?: Record<string, any>
) {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", eventName, eventParams);
  }
}

// Common event trackers
export const analytics = {
  // Newsletter signup
  newsletterSignup: (location: string) => {
    trackEvent("newsletter_signup", {
      location,
      event_category: "engagement",
    });
  },

  // Contact form submission
  contactFormSubmit: () => {
    trackEvent("contact_form_submit", {
      event_category: "conversion",
    });
  },

  // CTA clicks
  ctaClick: (ctaName: string, destination: string) => {
    trackEvent("cta_click", {
      cta_name: ctaName,
      destination,
      event_category: "engagement",
    });
  },

  // Blog post read
  blogPostRead: (postTitle: string, readingTime: number) => {
    trackEvent("blog_post_read", {
      post_title: postTitle,
      reading_time: readingTime,
      event_category: "content",
    });
  },

  // Service page view
  serviceView: (serviceName: string) => {
    trackEvent("service_view", {
      service_name: serviceName,
      event_category: "engagement",
    });
  },

  // Pricing tier view
  pricingTierView: (tierName: string) => {
    trackEvent("pricing_tier_view", {
      tier_name: tierName,
      event_category: "conversion",
    });
  },
};
