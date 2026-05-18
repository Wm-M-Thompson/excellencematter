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
    <div style={{ 
      width: '100%',
      height: 'calc(100vh - 64px)',
      overflow: 'hidden'
    }}>
      <iframe
        src={iframeSrc}
        style={{ width: '100%', height: '100%', border: 'none' }}
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