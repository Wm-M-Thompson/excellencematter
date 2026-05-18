import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interaction | WEC MFG",
  description: "WEC MFG Interaction Page",
};

interface PageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function Interaction({ searchParams }: PageProps) {
  const redirectParam = searchParams["redirect"];
  const redirect = Array.isArray(redirectParam) ? redirectParam[0] : redirectParam;
  
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