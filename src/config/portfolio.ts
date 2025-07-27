// Portfolio Configuration
// This file contains all the customizable content and settings for the portfolio website
// Modify these values to easily adapt the site for different performers/clients

export const portfolioConfig = {
  // Personal Information
  personal: {
    name: "Blake Morgan",
    title: "Performer • Musician • Music Director",
    subtitle: "Member AEA",
    bio: {
      short: "Blake Morgan is a versatile performer and music director with extensive experience across theatre, percussion, and musical direction.",
      full: [
        "Blake Morgan is a versatile performer and music director with extensive experience across theatre, percussion, and musical direction. As a member of Actors' Equity Association (AEA), Blake brings professionalism and excellence to every project.",
        "With a degree in Percussion Performance from Brigham Young University, Blake has performed with prestigious organizations including the Blue Stars Drum & Bugle Corps, BYU Philharmonic Orchestra, and various theatre companies throughout Utah.",
        "Blake's unique combination of musical expertise, technical skills, and performance experience makes him an invaluable asset to any production or musical ensemble."
      ]
    },
    physical: {
      height: "5'6\" (169 cm)",
      weight: "143 lbs (65 kg)",
      eyeColor: "Green",
      hairColor: "Blonde",
    },
    musical: {
      vocalRange: "Ab2-A4",
      voiceType: "Tenor",
      primaryInstrument: "Percussion",
      secondaryInstrument: "Piano/Keys"
    }
  },

  // Contact Information
  contact: {
    email: "blake@blakemorgan.me",
    phone: "(385) 241-1943",
    website: "https://blakemorgan.me",
    instagram: "@blakemorgan.me",
    instagramUrl: "https://instagram.com/blakemorgan.me",
    tiktok: "@blakemorgan.me", 
    tiktokUrl: "https://tiktok.com/@blakemorgan.me",
    actorsAccess: "https://resumes.actorsaccess.com/blakemorgan"
  },

  // Assets
  assets: {
    profileImage: "/DSC_1103.jpg",
    resume: "/Resume.pdf",
    gallery: [
      { src: "/DSC_1103.jpg", alt: "Blake Morgan Professional Headshot", caption: "Professional Headshot" },
      { src: "/DSC_1132.jpg", alt: "Blake Morgan Performance Photo", caption: "Performance Photo" },
      { src: "/DSC_1271.jpg", alt: "Blake Morgan Portrait", caption: "Portrait Session" },
      { src: "/DSC_1375.jpg", alt: "Blake Morgan Action Shot", caption: "Action Shot" },
      { src: "/DSC_1520.jpg", alt: "Blake Morgan Character Photo", caption: "Character Photo" },
      { src: "/DSC_1635.jpg", alt: "Blake Morgan Stage Photo", caption: "Stage Photo" }
    ]
  },

  // Skills
  skills: {
    musical: [
      "Singing (Tenor, Jazz, Musical Theatre)",
      "Piano/Keyboards/Synth",
      "Percussion (Orchestral, Ethnic, Marching)", 
      "Drum Set",
      "Conducting",
      "Beat Boxing"
    ],
    technical: [
      "MainStage",
      "QLab", 
      "Sound Design",
      "Audio Engineering",
      "Lighting Design/Operation",
      "Software Engineering"
    ],
    athletic: [
      "Pickleball",
      "Basketball",
      "Roller/Ice Skating",
      "Jump Rope",
      "Frisbee",
      "Swimming"
    ],
    other: [
      "Non-Profit Management",
      "IT/Systems Administration", 
      "Social Media",
      "Web Design",
      "Motorcycling",
      "Driver's License"
    ]
  },

  // Education & Training
  education: [
    {
      institution: "Brigham Young University",
      program: "Percussion Performance (w/ Ron Brough)",
      type: "degree"
    },
    {
      institution: "Hale Centre Theatre",
      program: "Audition Intensive (w/ Kelley DeHaan, Ryan Simmons, David Smith)",
      type: "workshop"
    },
    {
      institution: "Gary Sorensen",
      program: "Voice Training",
      type: "private"
    }
  ],

  // Experience
  experience: {
    theatre: [
      {
        show: "SIX: Teen Edition",
        role: "Music Director",
        company: "Courage Theatre, UT",
        status: "upcoming 6/25"
      },
      {
        show: "Into The Woods",
        role: "Music Director", 
        company: "The Empress Theatre, UT"
      },
      {
        show: "SIX: Teen Edition",
        role: "Music Director",
        company: "Courage Theatre, UT"
      },
      {
        show: "Seussical",
        role: "The Cat in The Hat",
        company: "Hopebox Theatre, UT"
      },
      {
        show: "School of Rock",
        role: "Doug/Drummer",
        company: "Hale Centre Theatre, UT"
      },
      {
        show: "One for the Pot",
        role: "Drummer",
        company: "Hale Centre Theatre, UT"
      },
      {
        show: "Disney's Beauty and the Beast",
        role: "Cogsworth",
        company: "The Empress Theatre, UT"
      },
      {
        show: "Young Ambassadors",
        role: "On-Stage Percussion",
        company: "Brigham Young University"
      }
    ],
    music: [
      {
        show: "Blue Stars Drum & Bugle Corps",
        role: "Drum Major/Conductor",
        company: "Blue Stars Performing Arts, WI",
        highlight: true
      },
      {
        show: "Draper Philharmonic",
        role: "Timpani",
        company: "Travis Lunt, UT"
      },
      {
        show: "BYU Philharmonic Orchestra",
        role: "Percussion",
        company: "Brigham Young University"
      },
      {
        show: "China Spectacular",
        role: "Percussion",
        company: "Brigham Young University"
      },
      {
        show: "BYU Steel Band",
        role: "Percussion",
        company: "Brigham Young University"
      },
      {
        show: "Celebration of Christmas",
        role: "Percussion",
        company: "Capitol Theatre, UT"
      },
      {
        show: "Logan, UT Christmas Celebration",
        role: "Drum Set",
        company: "Travis Lunt, UT"
      }
    ]
  },

  // Site Configuration
  site: {
    title: "Blake Morgan | Performer & Music Director",
    description: "Professional performer, music director, and musician. Member AEA with extensive experience in theatre, percussion, and musical direction.",
    keywords: ["Blake Morgan", "performer", "music director", "theatre", "percussion", "AEA", "Utah theatre"],
    url: "https://blakemorgan.me"
  }
};

// Color Configuration
// These CSS variables can be modified in globals.css to change the site's color scheme
export const colorConfig = {
  primary: {
    name: "Blue",
    description: "Primary brand color used for main CTAs and highlights"
  },
  secondary: {
    name: "Green", 
    description: "Secondary color used for accents and variety"
  },
  accent: {
    name: "Orange",
    description: "Accent color used for special highlights and calls-to-action"
  }
};