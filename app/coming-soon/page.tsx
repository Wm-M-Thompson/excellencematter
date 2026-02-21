export const dynamic = 'force-static'

export default function ComingSoon() {
  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Coming Soon</h1>
      
      <p className="text-lg text-center max-w-3xl mx-auto mb-6 bg-yellow-100 p-4 rounded">
        <strong>Almost Ready!</strong> Our full registration and community features are under construction. We're excited to launch secure discussions, product Q&A, and more for WEC MFG locker users and enthusiasts. Stay tuned — launching soon!
      </p>
      
      <p className="text-lg text-center max-w-3xl mx-auto mb-6">
        In the meantime, explore our products, resources, and PDFs above. For inquiries, use the Contact page.
      </p>
      
      <a 
        href="/" 
        className="block text-center bg-blue-600 text-white px-6 py-3 rounded max-w-xs mx-auto hover:bg-blue-700"
      >
        Back to Home
      </a>
    </main>
  );
}