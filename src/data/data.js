export const projects = [
  {
    title: "Cotion",
    tags: ["react.js", "flask"],
    description: [
      "I sought out to find a website that could automate the process of uploading my Canvas Assignments to Notion, my task management software, and I stumbled upon Edutools for Notion. Unfortunately, no matter how long I tinkered with the website, it did not seem to work for me. So I put together my own Canvas To Notion workflow called Cotion.",
    ],
    site: "https://cotion.herokuapp.com",
    code: "https://github.com/Cotion-App/",
  },
  {
    title: "Coursify",
    tags: ["next.js", "twilio", "digital ocean", "flask"],
    description: [
      "Getting the classes you want at Georgia Tech is hard. So, I built a website that allows students to track course seating changes and notifies them using SMS.",
    ],
    site: "https://coursify.tech",
  },
  {
    title: "Drivetrain Generator",
    tags: ["Onshape", "automation"],
    description: [
      "In FRC Robotics, one of the building blocks of a robot is a drivebase (chasis) that allows the robot to move. One of the most popular designs, the WCD, differs from team to team only by dimensions. Noticing this, I created a tool that automated the design process that once took 45 minutes, to nothing more than 20 seconds and a couple clicks.",
    ],
    site: "https://cad.onshape.com/documents/96d32fd4fe5341563a402ecd/v/67d9e6b8eabf48e030f6ffff/e/1d3de11ced3d680525700399",
  },
];

export const jobs = [
  {
    company: "Datascan",
    duration: "June 2022 - Aug 2022",
    title: "Backend Developer Intern",
    description: [
      "Resolved a security incident that exposed passwords at runtime by implementing a secure passwords pattern in Kubernetes.",
      "Implemented a Redis cache, resulting in a 99% decrease in API response time.",
      "Developed a feature in Java Spring that migrated on-site databases to an Azure database to reduce maintenance and security overhead.",
    ],
  },
  {
    company: "ACT Lab",
    title: "Undergraduate Researcher",
    duration: "Jan 2022 - April 2022",
    description: [
      "Derived a Linear Variant of the Intelligent Driver Model to simplify retrofitting data.",
      "Implemented a Real Time Kalman Filter to retrofit driver data to the Linear Intelligent Driver Model.",
    ],
  },
  {
    company: "Parata Systems",
    title: "Automation Engineering Intern",
    duration: "June 2021 - Aug 2021",
    description: [
      "Refined the Perl, a medicinal packaging device that split large spools of pouches into bundles while using Computer Vision to verify the contents of each pouch.",
      "Conducted 6 weeks worth of testing, and then interpreted the results in Excel using correlation matrices.",
      "Designed an add-on kit in Onshape to control feed rate of large spools into the Perl to reduce improper bundling.",
    ],
  },
];
