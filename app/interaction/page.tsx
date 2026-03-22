export default function Interaction() {
  return (
    <main className="flex flex-col" style={{ height: 'calc(100vh - 64px)' }}>
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-4xl font-bold text-center mb-4">Interaction</h1>
        <p className="text-lg text-center max-w-3xl mx-auto mb-4 bg-yellow-100 p-4 rounded">
          <strong>Disclaimer:</strong> This section features AI-simulated virtual
          customers for entertainment and educational purposes only. Actual users
          can register via Memberful to participate in discussions, ask product
          questions, and learn how WEC MFG lockers can benefit their business and
          lives. To reduce spam, bots, and scams, we use Memberful for secure
          membership management.
        </p>
        <p className="text-lg text-center max-w-3xl mx-auto mb-4">
          Join the community to discuss custom metal lockers, storage solutions,
          and more!
        </p>
      </div>
      <div className="flex-1 w-full">
        <iframe
          src="https://bbpress.excellencematter.net/bbpress/excellencematter-forum/"
          style={{ width: '100%', height: '100%', border: 'none' }}
          title="ExcellenceMatter Forum"
        />
      </div>
    </main>
  );
}