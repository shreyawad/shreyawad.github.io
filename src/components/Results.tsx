export const Results = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Real Results</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">90%</div>
            <p className="text-gray-600">of clients report improved mobility within 4 weeks</p>
          </div>
          {/* Add more statistics */}
        </div>
      </div>
    </section>
  );
}; 