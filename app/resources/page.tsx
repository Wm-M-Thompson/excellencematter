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
            href="https://pdf.thompsonsoftware.tech/WEC Catalog.pdf" 
            className="text-blue-600 hover:underline"
          >
            Product Catalog (PDF)
          </a>
        </li>
        <li>
          <a 
            href="https://pdf.thompsonsoftware.tech/WEC Colors.pdf" 
            className="text-blue-600 hover:underline"
          >
            Color Chart
          </a>
        </li>
        <li>
          <a 
            href="https://pdf.thompsonsoftware.tech/Assembly Instructions.pdf" 
            className="text-blue-600 hover:underline"
          >
            Installation Guide
          </a>
        </li>
      </ul>
    </main>
  );
}