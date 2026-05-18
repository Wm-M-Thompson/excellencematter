import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interaction | WEC MFG",
  description: "WEC MFG Interaction Page",
};

export default function Interaction({
  searchParams,
}: {
  searchParams: { redirect?: string };
}) {
  const iframeSrc = searchParams.redirect
    ? decodeURIComponent(searchParams.redirect)
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