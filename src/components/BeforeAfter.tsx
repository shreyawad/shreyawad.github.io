export const BeforeAfter = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-4 mb-4">
              <img src="/client1.jpg" className="w-12 h-12 rounded-full" alt="Client" />
              <div>
                <h3 className="font-semibold">Sarah M.</h3>
                <p className="text-sm text-gray-600">Hypermobility Patient</p>
              </div>
            </div>
            <p className="text-gray-700">
              "Before: Constant joint pain and instability<br/>
              After: Pain-free and back to my favorite activities"
            </p>
          </div>
          {/* Add more success stories */}
        </div>
      </div>
    </section>
  );
}; 