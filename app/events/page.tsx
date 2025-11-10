export default function EventsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-red-50 to-orange-50 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
            Events
          </h1>
          <p className="text-xl text-gray-700">
            Join us in celebrating community and culture
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">Upcoming Events</h2>
          <p className="text-center text-gray-700">Check back soon for upcoming events!</p>
        </div>
      </section>
    </>
  );
}

