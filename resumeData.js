const resumeData = {
    header: {
      name: "Aryender Singh",
      navItems: [
        { name: "About", link: "#about" },
        { name: "Experience", link: "#experience" },
        { name: "Education", link: "#education" },
        { name: "Skills", link: "#skills" },
      ],
    },
    footer: {
      socialLinks: [
        { name: "GitHub", url: "https://github.com/yourusername" },
        { name: "LinkedIn", url: "https://linkedin.com/in/yourusername" },
        { name: "Twitter", url: "https://twitter.com/yourusername" },
      ],
      quickLinks: [
        { name: "About", link: "#about" },
        { name: "Experience", link: "#experience" },
        { name: "Education", link: "#education" },
        { name: "Skills", link: "#skills" },
      ],
    },
    about: {
      description: [
        "Hello! I'm a passionate web developer with expertise in React, Node.js, and modern web technologies. With a keen eye for design and a love for clean, efficient code, I strive to create engaging and user-friendly web applications.",
        "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good book on UX design and software architecture Hello! I'm a passionate web developer with expertise in React, Node.js, and modern web technologies. With a keen eye for design and a love for clean, efficient code, I strive to create engaging and user-friendly web applications.",
        "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good book on UX design and software architecture.Hello! I'm a passionate web developer with expertise in React, Node.js, and modern web technologies. With a keen eye for design and a love for clean, efficient code, I strive to create engaging and user-friendly web applications.",
        "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good book on UX design and software architecture.",
      ],
    },
    experience: [
      {
          title: "Senior Web Developer",
          company: "Tech Innovations Inc.",
          logo: "https://via.placeholder.com/60",
          date: "January 2020 - Present",
          responsibilities: [
            "Lead a team of 5 developers in creating responsive web applications",
            "Implemented CI/CD pipelines, improving deployment efficiency by 40%",
            "Architected and developed a scalable e-commerce platform serving 100k+ users",
          ],
        },
        {
          title: "Full Stack Developer",
          company: "Digital Solutions LLC",
          logo: "https://via.placeholder.com/60",
          date: "June 2017 - December 2019",
          responsibilities: [
            "Developed and maintained multiple client websites using React and Node.js",
            "Optimized database queries, reducing load times by 30%",
            "Collaborated with UX designers to implement intuitive user interfaces",
          ],
        },
      // Add more experience items
    ],
    education: [
      {
          degree: "Bachelor of Science in Computer Science",
          institution: "Georgia Institute of Technology",
          logo: "https://via.placeholder.com/60",
          year: "2018-2023",
          description: "Specialized in Artificial Intelligence and Machine Learning. Thesis on 'Deep Learning Applications in Natural Language Processing'.",
        }
      // Add more education items
    ],
    skills: [
      "React", "JavaScript", "TypeScript", "Node.js", 
      "GraphQL", "HTML5", "CSS3", "Sass", 
      "Git", "Webpack", "Jest", "AWS"
    ]
};

module.exports = resumeData;