export const projects = [
  {
    title: "Cotion",
    tags: ["react.js", "flask"],
    description: [
      "I sought out to find a website that could automate the process of uploading Canvas assignments to Notion, and I stumbled upon Edutools for Notion. Unfortunately, no matter how long I tinkered with the website, it wouldn't work. So I wrote my own Canvas To Notion tool.",
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
      "In FRC Robotics, one of the building blocks of a robot is a drivebase (chasis). One of the most popular drivebase designs, the WCD, differs from team to team only by a few variables(ex. width, height, # of wheels, etc. ). Noticing this, I created a tool that automated the design process that once took 45 minutes, to nothing more than 20 seconds and a couple clicks.",
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
      "Whenever we buy a car from a dealership, we take out a loan from the bank. The dealerships are no different. To buy cars to fill their inventory, they take loans from banks just like us. Datascan is a company that creates tools for these banks to monitor the wholesale lending life cycle. During the summer, I worked on such tools in the backend.",
      "First, I resolved a security incident that exposed passwords at runtime by implementing a secure passwords pattern in Kubernetes. Then, I implemented a Redis cache, which resulted in a 99% decrease in API response time. Lastly, I developed a feature in Java Spring that migrated on-site databases to an Azure database to reduce maintenance and security overhead.",
    ],
  },
  {
    company: "ACT Lab",
    title: "Undergraduate Researcher",
    duration: "Jan 2022 - April 2022",
    description: [
      "Autonomous & Connected Transportation Laboratory, or ACT Lab for short is a research lab directed by Dr. Srinivas Peeta that addresses problems broadly in transportation and infrastructure systems.",
      "I worked on the Retrofitting data team, where our goal was to model driver data through commonly used car following models.",
      "One of the popular models that we were using was the Intelligent Driver Model. However, the model itself was non linear, so I derived a Linear Variant to simplify the retrofitting process. As for the actual process of retrofitting, I used a Real Time Kalman Filter.",
    ],
  },
  {
    company: "Parata Systems",
    title: "Automation Engineering Intern",
    duration: "June 2021 - Aug 2021",
    description: [
      "We all know the classic orange CVS bottle. Have you ever thought about how your pharamcist goes about getting your order? Well if you thought that they filled each bottle as an order came in, they would never be able to keep up with the orders, or even worse, they could get an order wrong. Instead, they use a machines built by Parata to packages pills automatically.",
      "I worked on a machine that was more suited for a long term care facility called the Parata Perl. Over the summer, my main goal was to address find new bugs, and characterize them, so that the engineering team could resolve them.",
      "I conducted 6 weeks worth of testing, and then interpreted the results in Excel using correlation matrices. Then, I designed an add-on kit in Onshape to control feed rate of large spools into the Perl to reduce improper bundling.",
    ],
  },
];
