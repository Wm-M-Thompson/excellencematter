export default function Resources() {
  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Resources</h1>
      <p className="text-lg text-center max-w-3xl mx-auto mb-6">
        Download catalogs, color charts, and guides for WEC MFG products. Your one-stop source for locker info.
      </p>
      <ul className="list-disc pl-6 max-w-3xl mx-auto">
        <li>
          <a 
            href="/pdfs/WEC_Catalog.pdf" 
            className="text-blue-600 hover:underline"
            target="_blank" rel="noopener noreferrer"
          >
            Product Catalog (PDF)
          </a>
        </li>
        <li>
          <a 
            href="/pdfs/WEC_colorchart_finalcoating.pdf" 
            className="text-blue-600 hover:underline"
            target="_blank" rel="noopener noreferrer"
          >
            Color Chart
          </a>
        </li>
        <li>
          <a 
            href="/pdfs/lockerinstallation.pdf" 
            className="text-blue-600 hover:underline"
            target="_blank" rel="noopener noreferrer"
          >
            Installation Guide
          </a>
        </li>
      </ul>
    </main>
  );
}