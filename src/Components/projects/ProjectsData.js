import lottery from './ProjectImages/lottery.PNG';
import lottery1 from './ProjectImages/lottery1.PNG';
import lottery2 from './ProjectImages/lottery2.PNG';
import lottery3 from './ProjectImages/lottery3.PNG';
import lottery4 from './ProjectImages/lottery4.PNG';
import lottery5 from './ProjectImages/lottery5.PNG';

export const projects = [
    {
        id: 101,
        title: "Lottery System",
        category: "web",
        image: lottery,
        githubLink: "https://github.com/shakeel7521951/Lottery",
        projectLink: "https://lottery-tes4.vercel.app",
        description: "A web-based lottery system that allows users to participate in random draws and check results in real-time.",
        features: [
          "User Registration and Login",
          "Random Number Generation for Lottery Draws",
          "Real-Time Result Display",
          "Responsive Design"
        ],
        technologies: ["React", "Node.js", "Express", "MongoDB", "CSS","BootStrap"],
        additionalImages: [
          lottery1,lottery2,lottery3,lottery,lottery4,lottery5
        ]
      },
]