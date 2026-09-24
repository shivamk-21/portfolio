import acm from "../assets/logos/acm.svg";
import mahyco from "../assets/logos/mahyco.png";

// The first two entries render as featured cards.
export const projectDetails = [
  {
    id: 7,
    title: "Seekho - Gen-AI Powered Course Creation Platform",
    badge: "1st of 3300+ teams · Google GenAI Exchange",
    description:
      "An AI-powered course creation tool, validated on video lengths up to 10 minutes and used to generate 1000+ pieces of course content. Built on Gemini 1.5 Pro, Sarvam Mayura v1 and Silero VAD.",
    tags: ["React", "FastAPI", "PyTorch", "Gemini 1.5 Pro", "GenAI"],
    link: "https://github.com/shivamk-21/Seekho",
    linkLabel: "Code",
    image:
      "https://github.com/shivamk-21/Seekho/blob/main/frontend/assets/images/seekho_logo.png?raw=true",
  },
  {
    id: 8,
    title: "Automated Hindi Speech Recognition",
    badge: "Research Paper · ACM TALLIP 2025",
    description:
      "An Automatic Speech Recognition system for Indian accents built with Multi-task Meta Learning, trained on speech data from 10+ regions. Analysing 108 hours of accented audio yielded a 3-5% reduction in Word Error Rate over joint multi-accent training.",
    tags: ["Speech Recognition", "Meta Learning", "NLP"],
    link: "https://dl.acm.org/journal/tallip",
    linkLabel: "Journal",
    image: acm,
  },
  {
    id: 2,
    title: "Drone-Based Crop Disease Detection",
    badge: "94% accuracy · Patent pending",
    description:
      "A computer vision pipeline that detects crop diseases from 24 MP drone imagery, trained on a dataset provided by Mahyco Pvt. Ltd., helping farmers catch diseases early and cutting manual inspection time.",
    tags: ["Computer Vision", "Deep Learning", "Drone Imagery"],
    link: "https://drive.google.com/file/d/1nGwvlThenUQ4rMTRjYBzTEp1P4xz7t8V/view?usp=sharing",
    linkLabel: "Certificate",
    image: mahyco,
  },
  {
    id: 1,
    title: "Pet Action Recognition Model",
    badge: "Samsung PRISM",
    description:
      "A custom computer vision model that recognizes 4 pet behaviours from a self-collected dataset of 1,300+ seconds of video, reaching 60.97% accuracy in real-time tracking.",
    tags: ["Computer Vision", "Action Recognition", "Machine Learning"],
    link: "https://drive.google.com/file/d/1cNOok5wI7D26ZOpabxFhTWrVKFy1_nAv/view?usp=sharing",
    linkLabel: "Certificate",
    image: "https://www.samsungprism.com/assets/images/prism_logo.png",
  },
  {
    id: 4,
    title: "SAC Website",
    description:
      "The official IIIT-NR Student Activity Center website: a digital hub for campus events where students interact and manage activities.",
    tags: ["Next.js", "TypeScript", "Web Development"],
    link: "https://github.com/shivamk-21/sac-website",
    linkLabel: "Code",
    image: "https://sac.iiitnr.ac.in/_next/static/media/sac_logo.84e88f42.png",
  },
  {
    id: 5,
    title: "Technovate 2k24",
    description:
      "The official website for Technovate 2k24, IIIT-NR's annual college fest, handling event details, registrations and information.",
    tags: ["Next.js", "TypeScript", "Web Development"],
    link: "https://github.com/shivamk-21/technovate2k23",
    linkLabel: "Code",
    image:
      "https://www.knowafest.com/files/uploads/TECHNOVATE%20LOGO%20WITH%20NAME%20BLACK-2019120601.png",
  },
  {
    id: 6,
    title: "IIIT Connect",
    description:
      "A mobile app giving IIIT-NR students easy access to their attendance, question banks and contacts.",
    tags: ["React Native", "Mobile App"],
    link: "https://github.com/shivamk-21/IIITConnect",
    linkLabel: "Code",
    image: "https://www.iiitnr.ac.in/sites/all/themes/iiit/120res.png",
  },
  {
    id: 3,
    title: "Big Data RL-based Scheduler",
    description:
      "A reinforcement learning-based scheduler that optimizes task scheduling in Apache Spark, significantly reducing job durations in large-scale data processing.",
    tags: ["Reinforcement Learning", "Apache Spark", "Big Data"],
    link: "",
    image:
      "https://ih1.redbubble.net/image.348476474.6940/st,small,507x507-pad,600x600,f8f8f8.u9.webp",
  },
];
