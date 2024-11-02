import lottery from './ProjectImages/lottery.PNG';
import lottery1 from './ProjectImages/lottery1.PNG';
import lottery2 from './ProjectImages/lottery2.PNG';
import lottery3 from './ProjectImages/lottery3.PNG';
import lottery4 from './ProjectImages/lottery4.PNG';
import lottery5 from './ProjectImages/lottery5.PNG';

import codes1 from './ProjectImages/codes1.PNG';
import codes2 from './ProjectImages/codes2.PNG';
import codes3 from './ProjectImages/codes3.PNG';
import codes4 from './ProjectImages/codes4.PNG';
import codes5 from './ProjectImages/codes5.PNG';
import codes6 from './ProjectImages/codes6.PNG';
import codes7 from './ProjectImages/codes7.PNG';

import spam1 from './ProjectImages/spam1.PNG';
import spam2 from './ProjectImages/spam2.PNG';
import spam3 from './ProjectImages/spam3.PNG';

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

      {
        id: 102,
        title: "Code's Thinker",
        category: "web",
        image: codes1,
        projectLink: "https://codesthinker.com",
        description: "Code's Thinker is a software house that offers educational services in areas like web development, app development, and more. It also provides custom project development for clients, ensuring solutions tailored to various needs.",
        features: [
          "Professional Training in Web Development and App Development",
          "Custom Project Development Services",
          "Comprehensive Learning Resources and Tutorials",
          "Project Consultation and Mentorship",
          "Responsive and User-Friendly Design"
        ],
        technologies: ["React", "Node.js", "Express", "MongoDB", "CSS", "Tailwind"],
        additionalImages: [
          codes2, codes3, codes4, codes5, codes6, codes7
        ]
      },

      {
        id: 103,
        title: "Email/SMS Spam Classifier",
        category: "dataScience",
        image: spam1,
        githubLink: "https://github.com/shakeel7521951/sms-spam-detection",
        projectLink: "https://sms-spam-detection-by-shakeel.streamlit.app",
        description: "A machine learning model that classifies messages as spam or not spam based on content analysis.",
        features: [
          "Email and SMS spam detection",
          "Text preprocessing and feature extraction",
          "High accuracy with machine learning algorithms",
          "User-friendly interface for input and output",
          "Real-time classification with interactive results"
        ],
        technologies: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "scikit-learn", "Natural Language Processing"],
        additionalImages: [
          spam1, spam2, spam3
        ]
      }      
      
]