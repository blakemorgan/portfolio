const Experience = () => {
  const theatreCredits = [
    {
      show: "School of Rock",
      role: "Doug/Drummer",
      company: "Hale Centre Theatre, UT",
      type: "theatre"
    },
    {
      show: "Into The Woods",
      role: "Music Director", 
      company: "The Empress Theatre, UT",
      type: "theatre"
    },
    {
      show: "SIX: Teen Edition",
      role: "Music Director",
      company: "Courage Theatre, UT",
      type: "theatre"
    },
    {
      show: "Seussical",
      role: "The Cat in The Hat",
      company: "Hopebox Theatre, UT",
      type: "theatre"
    },
    {
      show: "One for the Pot",
      role: "Drummer",
      company: "Hale Centre Theatre, UT",
      type: "theatre"
    },
    {
      show: "Disney's Beauty and the Beast",
      role: "Cogsworth",
      company: "The Empress Theatre, UT",
      type: "theatre"
    },
    {
      show: "Young Ambassadors",
      role: "On-Stage Percussion",
      company: "Brigham Young University",
      type: "theatre"
    }
  ];

  const musicCredits = [
    {
      show: "Blue Stars Drum & Bugle Corps",
      role: "Drum Major/Conductor",
      company: "Blue Stars Performing Arts, WI",
      type: "music",
    },
    {
      show: "SIX: Teen Edition",
      role: "Music Director",
      company: "Courage Theatre, UT",
      type: "music"
    },
    {
      show: "Draper Philharmonic",
      role: "Timpani",
      company: "Travis Lunt, UT",
      type: "music"
    },
    {
      show: "BYU Philharmonic Orchestra",
      role: "Percussion",
      company: "Brigham Young University",
      type: "music"
    },
    {
      show: "China Spectacular",
      role: "Percussion",
      company: "Brigham Young University",
      type: "music"
    },
    {
      show: "BYU Steel Band",
      role: "Percussion",
      company: "Brigham Young University",
      type: "music"
    },
    {
      show: "Celebration of Christmas",
      role: "Percussion",
      company: "Capitol Theatre, UT",
      type: "music"
    },
    {
      show: "Logan, UT Christmas Celebration",
      role: "Drum Set",
      company: "Travis Lunt, UT",
      type: "music"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-teal-700 mx-auto rounded-full" />
          <p className="text-gray-200 mt-4 max-w-2xl mx-auto">
            A comprehensive look at Blake's professional credits across theatre and music
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Theatre Section */}
          <div>
            <h3 className="text-2xl font-semibold text-red-400 mb-6 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14,2A8,8 0 0,0 6,10A8,8 0 0,0 14,18A8,8 0 0,0 22,10H20C20,13.32 17.32,16 14,16A6,6 0 0,1 8,10A6,6 0 0,1 14,4A6,6 0 0,1 20,10H22A8,8 0 0,0 14,2M14,6A4,4 0 0,0 10,10A4,4 0 0,0 14,14A4,4 0 0,0 18,10A4,4 0 0,0 14,6Z"/>
              </svg>
              Theatre
            </h3>
            <div className="space-y-4">
              {theatreCredits.map((credit, index) => (
                <div 
                  key={index}
                  className="bg-gray-900 border border-gray-700 p-4 rounded-lg border-l-4 border-red-500 hover:shadow-lg hover:border-red-400 transition-all duration-200"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-white">
                      {credit.show}
                    </h4>
                  </div>
                  <p className="text-red-400 font-medium mb-1">{credit.role}</p>
                  <p className="text-gray-300 text-sm">{credit.company}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Music Section */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-400 mb-6 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,3V13.55C11.41,13.21 10.73,13 10,13A3,3 0 0,0 7,16A3,3 0 0,0 10,19A3,3 0 0,0 13,16V7H17V5H12Z"/>
              </svg>
              Music
            </h3>
            <div className="space-y-4">
              {musicCredits.map((credit, index) => (
                <div 
                  key={index}
                  className={`p-4 rounded-lg border-l-4 transition-all duration-200 bg-gray-900 border border-gray-700 border-blue-500 hover:shadow-lg hover:border-blue-400`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-white">
                      {credit.show}
                    </h4>
                  </div>
                  <p className="text-blue-400 font-medium mb-1">{credit.role}</p>
                  <p className="text-gray-300 text-sm">{credit.company}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;