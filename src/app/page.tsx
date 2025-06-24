export default function Home() {
  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">
          ⚡ StormSquad
        </h1>
        <p className="text-lg text-blue-700">
          Hurricane prep made social for college students
        </p>
        <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Join a Squad
        </button>
      </div>
    </div>
  )
}