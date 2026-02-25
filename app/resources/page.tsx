import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources | WEC MFG",
  description: "Download WEC MFG product catalogs, color charts, installation guides, drawings, and specifications for metal lockers.",
};

export default function Resources() {
  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Resources</h1>
      <p className="text-lg text-center max-w-3xl mx-auto mb-6">
        Download catalogs, color charts, and guides for WEC MFG products. Your one-stop source for locker info.
      </p>
      <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">

        {/* Left Column */}
        <div>
          <ul className="list-disc pl-6 mb-6">
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
            <li>
              <a href="/pdfs/WEC_Operations_and_Maintenance_Guide_10_03_19.pdf" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                Operations and Maintenance Guide
              </a>
            </li>
            <li>
              <a href="/pdfs/General_Information.pdf" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                General Information
              </a>
            </li>
          </ul>

          <h2 className="text-xl font-bold mt-6 mb-2">Forms:</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>
              <a href="/pdfs/SKMBT_C45110071915350.pdf" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                New Customer Account Information Form
              </a>
            </li>
            <li>
              <a href="/pdfs/SKMBT_C45110071915351.pdf" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                Credit Card Authorization Form
              </a>
            </li>
            <li>
              <a href="/pdfs/CreditApplication.pdf" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                Credit Application for A Business Account Form
              </a>
            </li>
          </ul>

          <h2 className="text-xl font-bold mt-6 mb-2">Detailed and Illustrated Specifications:</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>
              <a href="/pdfs/Durable_Series.pdf" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                Durable Series Specification
              </a>
            </li>
            <li>
              <a href="/pdfs/Durable_Plus_Series.pdf" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                Durable Plus Series Specification
              </a>
            </li>
            <li>
              <a href="/pdfs/Athletic_Series.pdf" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                Athletic Series Specification
              </a>
            </li>
            <li>
              <a href="/pdfs/Angle_Iron_Series.pdf" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                Angle Iron Series Specification
              </a>
            </li>
            <li>
              <a href="/pdfs/All_Welded_Series.pdf" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                All Welded Series Specification
              </a>
            </li>
          </ul>

          <h2 className="text-xl font-bold mt-6 mb-2">Archived Web Pages:</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>
              <a href="/pdfs/ABOUT_WEC.pdf" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                Archived About WEC Page
              </a>
            </li>
            <li>
              <a href="/pdfs/FAST_TRACK_STOCKING_WEC.pdf" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                Archived Fact Tracking WEC Page
              </a>
            </li>
            <li>
              <a href="/pdfs/GENERAL_INFORMATION_WEC.pdf" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                Archived General Information WEC Page
              </a>
            </li>
            <li>
              <a href="/pdfs/LATEST_UPDATES_WEC.pdf" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                Archived Latest Updates WEC Page
              </a>
            </li>
            <li>
              <a href="/pdfs/METAL_LOCKERS_WEC.pdf" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                Archived Metal Lockers WEC Page
              </a>
            </li>
            <li>
              <a href="/pdfs/OTHER_PRODUCTS_WEC.pdf" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                Archived Other Products WEC Page
              </a>
            </li>
            <li>
              <a href="/pdfs/Privacy_Policy_WEC.pdf" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                Archived Privacy Policy WEC Page
              </a>
            </li>
            <li>
              <a href="/pdfs/PROJECT_GALLERY_WEC.pdf" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                Archived Project Gallery WEC Page
              </a>
            </li>
            <li>
              <a href="/pdfs/SERVICES_WEC.pdf" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                Archived Services WEC Page
              </a>
            </li>
          </ul>
        </div>

        {/* Right Column */}
        <div>
          <ul className="list-disc pl-6 mb-6">
            <li>
              <a href="/pdfs/Assembly_Instructions.pdf" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                Assembly Instructions
              </a>
            </li>
          </ul>

          <h2 className="text-xl font-bold mt-6 mb-2">Drawings:</h2>
          <ul className="list-disc pl-6 mb-6">
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

          <h2 className="text-xl font-bold mt-6 mb-2">Textual Specifications:</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>
              <a href="/pdfs/WEC_Durable_Specs_7_21_2014_FINAL.pdf" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                Durable Series
              </a>
            </li>
            <li>
              <a href="/pdfs/WEC_Durable_Plus_Specs_9_19_14_2014_FINAL.pdf" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                Durable Plus Series
              </a>
            </li>
            <li>
              <a href="/pdfs/SKMBT_C45110110313WEC_Competitive_Specs_9_19_2014_FINAL.pdf" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                Competitive Series
              </a>
            </li>
            <li>
              <a href="/pdfs/WEC_Athletic_Specs_9_19_2014_FINAL.pdf" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                Athletic Series
              </a>
            </li>
            <li>
              <a href="/pdfs/WEC_Angle_Iron_Series.pdf" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                Angle Iron Series
              </a>
            </li>
            <li>
              <a href="/pdfs/WEC_All_Welded_Plus_Specs_9_19_2014_FINAL.pdf" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                All Welded Plus Series
              </a>
            </li>
            <li>
              <a href="/pdfs/Fire_&_Rescue_Competitive_Specs_10_14_2014_FINAL.pdf" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                Fire & Rescue Lockers: Competitive Series
              </a>
            </li>
          </ul>

          <h2 className="text-xl font-bold mt-6 mb-2">Third Party Business Documentations:</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>
              <a href="/pdfs/2024_0320-Taylor-Animal-Sidock-Project-Manaual.pdf" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                Lockers for City of Taylor Animal Shelter
              </a>
            </li>
            <li>
              <a href="/pdfs/Addendum2PKG3DGPHSNewBattingCagesFacility.pdf" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                Lockers for PBK Architects, Inc
              </a>
            </li>
            <li>
              <a href="/pdfs/Energy-Design-Guide-for-Schools.pdf" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                Advanced Energy Design Guide for K-12 School Building
              </a>
            </li>
            <li>
              <a href="/pdfs/July_6_2017_(Due_Date)_Invitation_to_Bid-Addendum_Number_1_(PDF).pdf" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                Mansfield Middle School Locker Room Renovations
              </a>
            </li>
            <li>
              <a href="/pdfs/kenton_co_dfp.pdf" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                Kenton County Schools District Facility Plan
              </a>
            </li>
            <li>
              <a href="/pdfs/XII_A_5_KentonCoDFP_0.pdf" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                Kenton County Schools District Facility Plan with DFP Revisions
              </a>
            </li>
          </ul>
        </div>

      </div>
    </main>
  );
}