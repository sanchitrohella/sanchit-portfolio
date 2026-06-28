import devTinderScreenshot from "../assets/images/projects/DevTinder.jpg";
import foodOrderingScreenshot from "../assets/images/projects/Food App.jpg";
import natoursScreenshot from "../assets/images/projects/Natour.jpg";

export const personalProjects = [
  {
    id: "devtinder",
    name: "DevTinder",
    type: "Full-stack MERN Application",
    description:
      "A full-stack social connection application built to practice real-world authentication, profile interaction, and backend-connected UI flows.",
    role: "Full-Stack Developer",
    technologies: [
      "React",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "CSS",
    ],
    features: [
      "User profile card interface",
      "Interest and ignore actions",
      "Backend-connected application flow",
      "Authentication and user-session learning",
      "Full-stack project structure",
    ],
    links: [
      {
        label: "View live project",
        href: "http://98.84.149.220/",
      },
    ],
    screenshot: {
      src: devTinderScreenshot,
      alt: "DevTinder project screenshot showing a profile card interface.",
    },
  },
  {
    id: "food-ordering-app",
    name: "Food Ordering App",
    type: "React Frontend Project",
    description:
      "A responsive food-ordering interface built with React to practice reusable components, menu listing, cart interaction, and UI state handling.",
    role: "Frontend Developer",
    technologies: ["React", "JavaScript", "CSS"],
    features: [
      "Meal listing interface",
      "Add-to-cart interaction",
      "Quantity input handling",
      "Reusable UI components",
      "Responsive frontend layout",
    ],
    links: [
      {
        label: "View live project",
        href: "https://sprightly-lolly-67afd3.netlify.app",
      },
    ],
    screenshot: {
      src: foodOrderingScreenshot,
      alt: "Food Ordering App project screenshot showing a meal listing interface.",
    },
  },
  {
    id: "natours",
    name: "Natours",
    type: "Static HTML and CSS Website",
    description:
      "A visually focused landing page created using HTML and CSS to practice layout design, typography, gradients, and responsive UI presentation.",
    role: "Frontend Developer",
    technologies: ["HTML5", "CSS3"],
    features: [
      "Large hero section",
      "Gradient overlay",
      "Responsive layout",
      "Typography-focused landing page",
      "CSS-based visual design",
    ],
    links: [
      {
        label: "View live project",
        href: "https://papaya-pasca-a4b8bf.netlify.app/",
      },
    ],
    screenshot: {
      src: natoursScreenshot,
      alt: "Natours project screenshot showing a responsive landing page hero.",
    },
  },
];
