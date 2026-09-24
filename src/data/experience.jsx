import mahyco from "../assets/logos/mahyco.png";

// `type` picks the timeline group: "Work" or "Leadership"
export const exp = [
  {
    id: 1,
    type: "Work",
    role: "AIML Research Intern",
    org: "Mahyco Pvt. Ltd.",
    image: mahyco,
    time: "Nov 2022 – Jul 2024",
    points: [
      <>
        Engineered a computer vision pipeline for automated crop disease
        identification from <b>24 MP</b> drone imagery.
      </>,
      <>
        Raised identification accuracy to <b>94%</b>, reducing manual
        inspection time.
      </>,
      <>
        <b>Patent pending</b> disease detection system with a <b>6%</b> error
        rate on the test set.
      </>,
    ],
    link: "https://drive.google.com/file/d/1nGwvlThenUQ4rMTRjYBzTEp1P4xz7t8V/view?usp=sharing",
    linkLabel: "Certificate",
  },
  {
    id: 2,
    type: "Work",
    role: "PRISM Intern",
    org: "Samsung R&D",
    image: "https://www.samsungprism.com/assets/images/prism_logo.png",
    time: "Aug 2023 – Mar 2024",
    points: [
      <>
        Built a pet action recognition system on a custom dataset of{" "}
        <b>1,300+ seconds</b> of video.
      </>,
      <>
        Predicts <b>4</b> pet behaviours across varied real-world scenarios.
      </>,
      <>
        Reached <b>60.97%</b> accuracy in real-time behaviour tracking.
      </>,
    ],
    link: "https://drive.google.com/file/d/1cNOok5wI7D26ZOpabxFhTWrVKFy1_nAv/view?usp=sharing",
    linkLabel: "Certificate",
  },
  {
    id: 6,
    type: "Leadership",
    role: "Science & Technology Secretary",
    org: "IIIT Naya Raipur",
    image: "https://sac.iiitnr.ac.in/_next/static/media/sac_logo.84e88f42.png",
    time: "2023 – 2024",
    points: [
      <>
        Elected to lead initiatives promoting technological innovation and
        community engagement.
      </>,
      <>Organized coding competitions, workshops and seminars.</>,
    ],
    link: "https://sac.iiitnr.ac.in/team",
    linkLabel: "Team page",
  },
  {
    id: 3,
    type: "Leadership",
    role: "Technovate Coordinator",
    org: "IIIT Naya Raipur",
    image:
      "https://www.knowafest.com/files/uploads/TECHNOVATE%20LOGO%20WITH%20NAME%20BLACK-2019120601.png",
    time: "Aug 2023 – Feb 2024",
    points: [
      <>
        Coordinated the flagship tech fest: logistics, sponsors, hackathons,
        showcases and speaker sessions.
      </>,
      <>Connected students with industry leaders.</>,
    ],
    link: "https://www.instagram.com/technovate_iiitnr/?hl=en",
    linkLabel: "Instagram",
  },
  // Achievements have no logo (a trophy is shown) and may omit points/link
  {
    id: 9,
    type: "Achievements",
    role: "1st Place, GenAI Exchange Hackathon",
    org: "Google",
    time: "Oct 2024",
    points: [
      <>
        Won with <b>Seekho</b>, outshining <b>3300+</b> teams.
      </>,
    ],
    link: "https://github.com/shivamk-21/Seekho",
    linkLabel: "Seekho",
  },
  {
    id: 10,
    type: "Achievements",
    role: "Ranked 25th, Amazon ML Challenge 2024",
    org: "Amazon",
    time: "Sep 2024",
    points: [
      <>
        Ranked <b>25th</b>, competing among the top teams.
      </>,
    ],
  },
  {
    id: 11,
    type: "Achievements",
    role: "Ranked 9th, Hackfest 2023",
    org: "IIT (ISM) Dhanbad",
    time: "Apr 2023",
    points: [
      <>
        Placed <b>9th</b> among <b>80</b> teams.
      </>,
    ],
  },
  {
    id: 12,
    type: "Achievements",
    role: "Best Project in Track, Codeutsava 6.0",
    org: "NIT Raipur",
    time: "Feb 2023",
  },
  // {
  //   id: 4,
  //   title: "ScintFic Coordinator",
  //   image: scintfic,
  //   time: "Nov 2023 - Jan 2024",
  // },
  // {
  //   id: 5,
  //   title: "Devfest Raipur Coordinater",
  //   image: gdg,
  //   time: "Nov 2023 - Dec 2023",
  // },
  // {
  //   id: 7,
  //   title: "Inquizitive Club Head",
  //   image: inquizitive,
  //   time: "Aug 2022 - Aug 2023",
  // },
  // {
  //   id: 8,
  //   title: "Inquizitive Core Member",
  //   image: inquizitive,
  //   time: "Dec 2021 - Aug 2022",
  // },
];
