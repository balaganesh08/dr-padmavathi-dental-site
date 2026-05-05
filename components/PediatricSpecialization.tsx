import Link from 'next/link';
import { FaChild, FaAward, FaGraduationCap, FaHeart } from 'react-icons/fa';

export default function PediatricSpecialization() {
  return (
    <section className="py-16 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaChild className="w-8 h-8 text-pink-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Kakinada's Leading Pediatric Dental Specialist
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dr. Padmavathi Devi - MDS, FAGE Specialist Pedodontist with 8+ years of dedicated experience in children's dental care
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md border border-pink-100">
              <div className="flex items-start gap-4">
                <div className="bg-pink-100 rounded-full p-3 flex-shrink-0">
                  <FaGraduationCap className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Qualifications</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• MDS in Pediatric Dentistry</li>
                    <li>• FAGE (Fellow of Academy of General Education)</li>
                    <li>• BDS from Government Dental College and Hospital, Vijayawada</li>
                    <li>• Specialized training in behavior management</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border border-pink-100">
              <div className="flex items-start gap-4">
                <div className="bg-pink-100 rounded-full p-3 flex-shrink-0">
                  <FaAward className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Recognitions & Awards</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Awards from Indian Dental Association</li>
                    <li>• Multiple medals for academic excellence</li>
                    <li>• Recognized contributions to pediatric dentistry</li>
                    <li>• Speaker at dental conferences</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border border-pink-100">
              <div className="flex items-start gap-4">
                <div className="bg-pink-100 rounded-full p-3 flex-shrink-0">
                  <FaHeart className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Child-Friendly Approach</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• 1500+ happy young patients treated</li>
                    <li>• Gentle, patient-centered care</li>
                    <li>• Specialized behavior management techniques</li>
                    <li>• Creating positive dental experiences</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-pink-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Why Choose Dr. Padmavathi for Your Child?</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold mb-1">Specialized Expertise</h4>
                  <p className="text-white/90 text-sm">Dedicated pediatric dentist with advanced training in children's oral health</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold mb-1">Child Psychology</h4>
                  <p className="text-white/90 text-sm">Expert in managing dental anxiety and creating comfortable experiences</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold mb-1">Preventive Focus</h4>
                  <p className="text-white/90 text-sm">Emphasis on preventive care and early intervention for lifelong oral health</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold mb-1">Latest Technology</h4>
                  <p className="text-white/90 text-sm">Child-safe equipment and modern techniques for gentle treatment</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold mb-2">1500+</div>
              <div className="text-white/90 mb-6">Happy Children Treated</div>
              
              <Link
                href="/services/kids-dentistry"
                className="bg-white text-pink-600 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all inline-block"
              >
                Learn About Kids Dentistry
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Common Pediatric Treatments</h3>
            <div className="grid md:grid-cols-4 gap-4 text-sm">
              <div className="text-center">
                <div className="font-semibold text-gray-900">Dental Check-ups</div>
                <div className="text-gray-600">Regular preventive care</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-gray-900">Fluoride Treatment</div>
                <div className="text-gray-600">Cavity prevention</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-gray-900">Pulpotomy</div>
                <div className="text-gray-600">Baby tooth root canal</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-gray-900">Space Maintainers</div>
                <div className="text-gray-600">Orthodontic guidance</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
