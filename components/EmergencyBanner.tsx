import { FiPhone, FiAlertCircle } from 'react-icons/fi';

export default function EmergencyBanner() {
  return (
    <section className="bg-gradient-to-r from-teal-600 to-green-600 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <FiAlertCircle className="w-6 h-6 text-white" />
            <h2 className="text-2xl md:text-3xl font-bold">
              Tooth Pain? Get Immediate Treatment Today
            </h2>
          </div>
          
          <div className="flex justify-center">
            <a
              href="tel:8501802222"
              className="bg-white text-red-600 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all inline-flex items-center gap-2 shadow-xl"
            >
              <FiPhone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
