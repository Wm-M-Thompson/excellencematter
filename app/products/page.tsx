export default function Products() {
  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Products</h1>
      <p className="text-lg text-center max-w-3xl mx-auto mb-6">
        WEC MFG offers a wide range of customizable metal lockers and storage solutions. Built with standard superior quiet features for schools, gyms, industrial use, and more.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-gray-100 p-6 rounded-lg text-center">
          <h3 className="text-xl font-bold mb-2">All-Welded Plus</h3>
          <p>Pre-assembled, rigid units for maximum durability.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg text-center">
          <h3 className="text-xl font-bold mb-2">Durable Series</h3>
          <p>High-quality lockers with lifetime warranty.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg text-center">
          <h3 className="text-xl font-bold mb-2">Athletic Lockers</h3>
          <p>Custom solutions for sports and fitness.</p>
        </div>
      </div>
    </main>
  );
}