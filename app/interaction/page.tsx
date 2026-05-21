"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";

function InteractionFrame() {
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect");

  useEffect(() => {
    if (!sessionStorage.getItem("interaction_refreshed")) {
      sessionStorage.setItem("interaction_refreshed", "true");
      window.location.reload();
    }
  }, []);

  const iframeSrc = redirect
    ? decodeURIComponent(redirect)
    : "https://bbpress.excellencematter.net/interaction/";

  return (
    <div style={{ 
      position: 'fixed',
      top: '64px',
      left: 0,
      right: 0,
      bottom: 0,
      overflow: 'hidden',
      zIndex: 0
    }}>
      <iframe
        src={iframeSrc}
        style={{ 
          width: '100%', 
          height: '100%', 
          border: 'none',
          display: 'block'
        }}
        title="LikableLogic Forum"
      />
    </div>
  );
}

export default function Interaction() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <InteractionFrame />
    </Suspense>
  );
}