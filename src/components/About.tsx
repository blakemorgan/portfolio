const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            About Blake
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-teal-700 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-teal-400 mb-4">Multi-Talented Performer & Music Director</h3>
            <div className="prose prose-lg text-gray-200 space-y-4">
              <p>
                Blake Morgan is a versatile performer and music director with extensive experience across theatre, percussion, and musical direction. 
                As a member of Actors' Equity Association (AEA), Blake brings professionalism and excellence to every project.
              </p>
              <p>
                With music training from Brigham Young University, Blake has performed with prestigious organizations 
                including the Blue Stars Drum & Bugle Corps, BYU Philharmonic Orchestra, and various theatre companies throughout Utah.
              </p>
              <p>
                Blake's unique combination of musical expertise, technical skills, and performance experience makes him an invaluable 
                asset to any production or musical ensemble.
              </p>
            </div>
          </div>

          {/* Stats & Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Physical Stats */}
            {/* <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-white mb-4">Physical</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-300">Height:</span>
                  <span className="font-medium text-white">5'6" (169 cm)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Weight:</span>
                  <span className="font-medium text-white">143 lbs (65 kg)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Eyes:</span>
                  <span className="font-medium text-white">Green</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Hair:</span>
                  <span className="font-medium text-white">Blonde</span>
                </div>
              </div>
            </div> */}

            {/* Musical Info */}
            {/* <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-white mb-4">Musical</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-300">Vocal Range:</span>
                  <span className="font-medium text-white">Ab2-A4</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Voice Type:</span>
                  <span className="font-medium text-white">Tenor</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Primary:</span>
                  <span className="font-medium text-white">Percussion</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Secondary:</span>
                  <span className="font-medium text-white">Piano/Keys</span>
                </div>
              </div>
            </div> */}

            {/* Education */}
            <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg shadow-md sm:col-span-2">
              <h4 className="text-lg font-semibold text-white mb-4">Education & Training</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-red-400">Brigham Young University</div>
                  <div className="text-gray-300">Percussion Performance (w/ Ron Brough)</div>
                </div>
                <div>
                  <div className="font-medium text-blue-400">Hale Centre Theatre</div>
                  <div className="text-gray-300">Audition Intensive (w/ Kelley DeHaan, Ryan Simmons, David Smith)</div>
                </div>
                <div>
                  <div className="font-medium text-purple-400">Voice Training</div>
                  <div className="text-gray-300">Gary Sorensen, Justin Brown, Niel Semer</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center text-white mb-8">Special Skills</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {/* Musical Skills */}
            <div className="bg-gradient-to-br from-red-600 to-red-800 p-6 rounded-lg text-white shadow-lg">
              <h4 className="font-semibold mb-3 text-red-100">Musical</h4>
              <ul className="text-sm space-y-1 text-red-50">
                <li>• Singing (Tenor, Jazz, Musical Theatre)</li>
                <li>• Piano/Keyboards/Synth</li>
                <li>• Percussion (Orchestral, Ethnic, Marching)</li>
                <li>• Drum Set</li>
                <li>• Conducting</li>
                <li>• Beat Boxing</li>
              </ul>
            </div>

            {/* Technical Skills */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 rounded-lg text-white shadow-lg">
              <h4 className="font-semibold mb-3 text-blue-100">Technical</h4>
              <ul className="text-sm space-y-1 text-blue-50">
                <li>• MainStage</li>
                <li>• QLab</li>
                <li>• Sound Design</li>
                <li>• Audio Engineering</li>
                <li>• Lighting Design/Operation</li>
                <li>• Software Engineering</li>
              </ul>
            </div>

            {/* Athletic Skills */}
            <div className="bg-gradient-to-br from-purple-600 to-purple-800 p-6 rounded-lg text-white shadow-lg">
              <h4 className="font-semibold mb-3 text-purple-100">Athletic</h4>
              <ul className="text-sm space-y-1 text-purple-50">
                <li>• Pickleball</li>
                <li>• Basketball</li>
                <li>• Roller/Ice Skating</li>
                <li>• Jump Rope</li>
                <li>• Frisbee</li>
                <li>• Swimming</li>
              </ul>
            </div>

            {/* Other Skills */}
            <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-6 rounded-lg text-white shadow-lg">
              <h4 className="font-semibold mb-3 text-gray-100">Other</h4>
              <ul className="text-sm space-y-1 text-gray-200">
                <li>• Non-Profit Management</li>
                <li>• IT/Systems Administration</li>
                <li>• Social Media</li>
                <li>• Web Design</li>
                <li>• Motorcycling</li>
                <li>• Driver's License</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;