/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Timbo Yuen's Portfolio Website",
  description:
    "An experienced software engineer in VR/AR with electronics engineering education.",
  og: {
    title: "Timbo Yuen Portfolio",
    type: "website",
    url: "http://timboyuen.com/",
  },
};

//Home Page
const greeting = {
  title: "Timbo Yuen",
  logo_name: "",
  nickname: "",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1FtcpySdkjfJZTL1Nux5Di2S7XtUDsB05",
  portfolio_repository: "https://github.com/timboyuen",
  githubProfile: "https://github.com/timboyuen",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  {
    name: "Github",
    link: "https://github.com/timboyuen",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/timboyuen/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UC-of78wMN7cv0wP8Zm0BxWg",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link:
      "mailto:timboyuen123@gmail.com?subject=timboyuen.com-> YOUR SUBJECT HERE",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/Tranc3r",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/timbo.yuen/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/timboyuen/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "C++/C Development",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Create highly scalable and flexible projects or high speed libraries",
        "⚡ Experience of working with Computer Vision (openCV) and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "VR/AR game design in Unity",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building bridges between C++ DLLs high speed functionality into assets in Unity for developers to use",
        "⚡ Audio and Video alignment for pose estimation of game perspective transformations into AR environments",
      ],
      softwareSkills: [
        {
          skillName: "C#",
          fontAwesomeClassname: "simple-icons:csharp",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Unity",
          fontAwesomeClassname: "simple-icons:unity",
          style: {
            color: "#000000",
          },
        },
      ],
    },
    {
      title: "This Website",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Growing experience in ReactJS and NodeJS website management",
      ],
      softwareSkills: [
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
    {
      title: "Data Structures and Algorithm Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly optimized complex algorithms for video and audio",
        "⚡ Understanding of solving problems with multithreading, optimization, segmentation, reduction and simplification",
        "⚡ Able to educate others on Trees, Graphs, Linked Lists, and Queues",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/Tranc3r?hr_r=1",
    },
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#323754",
      },
      profileLink: "https://leetcode.com/Tranc3r/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Simon Fraser University, Burnaby, BC, Canada",
      subtitle: "BASc in Electronics Engineering",
      logo_path: "SFU-block-logo.svg",
      alt_name: "SFU",
      duration: "2012",
      descriptions: [
        "➔ I have made a hardware NTSC live decoder circuit for oscilloscope, GPS bicycle computer with sensor fusion, message ferrying algorithm simulated in OPNET",
        "➔ I have studied theoretical physics and systems modelling.",
        "➔ Apart from the main path, I have studied basic software engineering subjects like Data Structures, Algorithms, and Computing Fundamentals.",
      ],
      website_link: "http://www.sfu.ca/engineering/home.html",
    },
  ],
};

const certifications = {
  certifications: [
    /*     {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    }, */
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internships",
  description:
    "Software engineer residing in Vancouver, BC, with 6 years experience in video/audio applications, C/C++ API designs, video codec, Unity C#, and GPU optimizations. Timbo has a lot of passion in growing in a fast paced technologically evolving team.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Software Engineer",
          company: "Blueprint Reality Inc.",
          company_url: "https://mixcast.me/",
          logo_path: "bpr_logo.jpg",
          duration: "February 2022 - September 2022",
          location: "Vancouver, Canada",
          description:
            "Mixcast Studio SDK + Tilt5 AR Board Integration (2 people) ➔ Extended the Unity C# library of MixCast with third party DLL and OpenCV for finding the pose estimation at real-time (2K 30fps+) of a prototype game board with edge patterns through use of pixel-space board corner extrapolations, homography calculations, perspective transforms, point idents, camera intrinsics/extrinsics, error corrective loops, fallback methods, etc.\n➔ In addition, wrote test cases and scripts to measure different sets of error values and timing of methods as we progess in development, which was very useful in catching third party errors and self errors as well as determining the path of development",
          color: "#0879bf",
        },
        {
          title: "Computer Vision Engineer & Product Designer",
          company: "TG Corps (personal company)",
          company_url: "https://www.timboyuen.com",
          logo_path: "tgcorps_logo_sample.png",
          duration: "August 2021 - Present",
          location: "Vancouver, Canada",
          description:
            "AI Image Enhancement Suite as aWeb Service (OpenCV, C++) ➔ Optimized from 30 secs to 0.5 secs per image offloading GPU model loading to more CPU for color enhance, text thickening, super resolution, and background removal\n3D CAD designed structural moulds (Autodesk Inventor) ➔ I built 3D CAD food-safe and ergonomic pet product moulds for dogs\n3D PCB and Keyboard Case Design (KiCad) ➔ Advanced feature PCB with multi switch compatibility in a spill-proof case with snap-fit parts",
          color: "#0879bf",
        },
        {
          title: "Software Engineer",
          company: "Blueprint Reality Inc.",
          company_url: "https://mixcast.me/",
          logo_path: "bpr_logo.jpg",
          duration: "June 2017 - October 2018",
          location: "Vancouver, Canada",
          description:
            "Mixcast Studio SDK (Unity Asset Bundle) ➔ Provided a SSE-enabled GPU pipelined multi-threaded LGPL-compliant distributable shared library using ffmpeg for a C/C++ DLL of unmanaged API code interface for Unity Engine and Unreal Engine textures containing audio and video streams supporting from DirectShow devices and capture cards to stereo or bluetooth microphones with fast seamless discoveries including auto switch-over and delay aware compensation features\n➔ In addition, increased performance of prototype 5fps to 70fps average, then to 450fps with GPU and SSE support, capable of handling four feeds while recording to four files.\nMixcast Capture (Game Capture Application) ➔ Improved performance of window video capturing of external application from 20fps to 76fps and extended library with functionality in Unity C# and its UI.\nCreative Core Planning and Strategy ➔ Helped strategized with the CTO about the business of product technologies",
          color: "#0879bf",
        },
        {
          title: "Junior Software Development Engineer",
          company: "International Royalties Corporation",
          company_url: "www.internationalroyalty.com",
          logo_path: "irc_logo.jpg",
          duration: "May 2014 - Feb 2017",
          location: "Vancouver, Canada",
          description:
            "➔ Helped develop in part for integrating a library for converting audio and video sources to raw formats for further \n ➔ I worked on reverse-engineering Google’s VP9 royalty-free video codec’s weaknesses in order to investigate features or improvements to benefit the PSNR rating of video quality.\n➔ Developed a GUI in QT for single end user to interface with preview window showing frames while highlighting the frame of interest with a red rectangle.",
          color: "#9b1578",
        },
        {
          title: "Integration Verification QA Engineer (Internship)",
          company: "Ericsson",
          company_url: "https://www.ericsson.com/en",
          logo_path: "ericsson_logo.png",
          duration: "Sept 2010 - Dec 2011",
          location: "Burnaby, Canada",
          description:
            "➔ Four term internships at Ericsson spent writing Perl scripts for automated regression testing of prototype network line cards featured on Ericsson’s Smart Edge routers, while taking two courses at SFU",
          color: "#fc1f20",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "These are some of the projects that I have open-sourced and shared with the public.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    /*     {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    }, */
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "prof_timboyuen.png",
    description:
      "Feel free to message me anything related to VR/AR development, C/C++, SFU, Electronics or Physics, ffmpeg or Data Structures/Algorithms.",
  },
  blogSection: {
    title: "Project Communication Spaces",
    subtitle:
      "Coming Soon! It will be for mostly educational spaces and memes with discussion interaction",
    link: "https://www.timboyuen.com",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Location",
    subtitle: "Vancouver, BC, Canada",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/9KDYpNquTQpNPRkz8",
  },
  phoneSection: {
    title: "E-Mail",
    subtitle: "timboyuen123@gmail.com",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
