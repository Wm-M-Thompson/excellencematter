export default function Resources() {
  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Resources</h1>
      <p className="text-lg text-center max-w-3xl mx-auto mb-6">
        Download catalogs, color charts, and guides for WEC MFG products. Your one-stop source for locker info.
      </p>
      <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        <ul className="list-disc pl-6">
          <li>
            <a href="/pdfs/WEC_Catalog.pdf" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
              Product Catalog (PDF)
            </a>
          </li>
          <li>
            <a href="/pdfs/WEC_colorchart_finalcoating.pdf" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
              Color Chart
            </a>
          </li>
          <li>
            <a href="/pdfs/lockerinstallation.pdf" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
              Installation Guide
            </a>
          </li>
          <li>
            <a href="/pdfs/Preparation_Instructions.pdf" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
              Preparation Instructions
            </a>
          </li>
          <li>
            <a href="/pdfs/Material_safety.pdf" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
              Material Safety Data Sheet
            </a>
          </li>
        </ul>

        <div>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <a href="/pdfs/Assembly_Instructions.pdf" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                Assembly Instructions
              </a>
            </li>
          </ul>

          <h2 className="text-xl font-bold mb-2">Drawings:</h2>
          <ul className="list-disc pl-6">
            <li>
              <a href="/pdfs/SKMBT_C45110110313201.pdf" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                Competitive Single Tier Locker Drawing
              </a>
            </li>
            <li>
              <a href="/pdfs/SKMBT_C45110110303200.pdf" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                Durable Plus Single Tier Locker Drawing
              </a>
            </li>
            <li>
              <a href="/pdfs/SKMBT_C45110110313183.pdf" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                All-Welded Plus Single Tier Locker Drawing
              </a>
            </li>
            <li>
              <a href="/pdfs/HoodDetailModel.pdf" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                Slope Hood Detail Drawing
              </a>
            </li>
            <li>
              <a href="/pdfs/Filler_Details.pdf" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                Vertical Filler / Wall Angle Detail Drawing
              </a>
            </li>
            <li>
              <a href="/pdfs/Bench_&_Pedestal_Details.pdf" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                Bench & Pedestal Details Drawing
              </a>
            </li>
            <li>
              <a href="/pdfs/ZeeBaseDetailModel.pdf" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                Zee Base Detail Drawing
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}