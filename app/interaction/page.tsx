"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function InteractionFrame() {
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect");

  const iframeSrc = redirect
    ? decodeURIComponent(redirect)
    : "https://bbpress.excellencematter.net/interaction/";

  return (
    <>
      <noscript>
        <meta httpEquiv="refresh" content="0" />
      </noscript>
      <div
        id="interaction-frame"
        style={{
          position: "fixed",
          top: "64px",
          left: 0,
          right: 0,
          bottom: 0,
          overflow: "hidden",
          zIndex: 0,
        }}
      >
        <iframe
          src={iframeSrc}
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            display: "block",
          }}
          title="LikableLogic Forum"
        />
      </div>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            if (!sessionStorage.getItem('interaction_refreshed')) {
              sessionStorage.setItem('interaction_refreshed', 'true');
              window.location.reload();
            }
          `,
        }}
      />
    </>
  );
}

export default function Interaction() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <InteractionFrame />
    </Suspense>
  );
}