import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">WEC MFG</h1>
          <p className="text-2xl md:text-3xl mb-8">High-Quality Metal Lockers • Custom Solutions • Built to Last Since 1987</p>
          <p className="text-xl max-w-3xl mx-auto mb-10">
            Proud manufacturer of durable, customizable metal lockers for schools, gyms, industrial, and more. One-stop source for excellence.
          </p>
          <a
            href="/products"
            className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition"
          >
            Explore Products
          </a>
        </div>
      </section>

      {/* Quick Features */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Customizable</h3>
            <p>Tailored to your exact needs with global shipping.</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Durable Design</h3>
            <p>Lifetime warranty on quality craftsmanship.</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Fast & Reliable</h3>
            <p>Streamlined ordering and delivery for your projects.</p>
          </div>
        </div>
      </section>
    </main>
  );
}