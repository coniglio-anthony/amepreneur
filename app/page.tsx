export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-900 px-6 py-12">
      <div className="max-w-2xl text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight">
          Amepreneur 🌱
        </h1>
        <p className="text-lg text-gray-600">
          Révèle ton potentiel. Lance ton projet aligné avec ton âme.
        </p>
        <a
          href="#"
          className="inline-block bg-black text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-800 transition"
        >
          Commencer maintenant
        </a>
      </div>
    </main>
  );
}
