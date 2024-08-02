const express = require("express");
const path = require("path");

const app = express();

// Set view engine to EJS
app.set("view engine", "ejs");

// Set static folder
app.use(express.static(path.join(__dirname, "public")));
const services = [
  { text: "Hire Software Developers", href: "/hire-software-developers" },
  { text: "Hire Software Teams", href: "/hire-software-developers" },
  { text: "Hire BPO Teams", href: "/hire-software-developers" },
  { text: "Hire AI Developers", href: "/hire-software-developers" },
  { text: "Ecommerce Solutions", href: "/hire-software-developers" },
  { text: "Web Development", href: "/hire-software-developers" },
  { text: "Mobile App Development", href: "/hire-software-developers" },
  { text: "Digital Media Marketing", href: "/hire-software-developers" },
  { text: "UI UX Design", href: "/hire-software-developers" },
  { text: "Corporate Branding", href: "/hire-software-developers" },
];
const packages = [
  "App Development",
  "Web Design and Development",
  "E-commerce Solutions",
  "Game Development",
  "Digital Marketing",
  "Graphics Design",
  "Team Outsourcing",
  "Corporate Branding",
];

app.get("/", (req, res) => {
  // Data to render dynamically
  const homeServices = {
    heading1: { text: "Your Access to Talented Teams", style: "" },
    heading2: {
      text: "More Innovation, Efficiency and Cost-Effectiveness",
      style: "",
    },
    cards: [
      {
        image: {
          imgSrc: "/assets/software-developer.png",
          style: "card-img",
          alt: "",
        },
        title: "Hire Software Developers",
        subtitle: "Looking for offshore resource?",
        description:
          "Hire top software professionals with flexible engagement and expertise in the latest tools and technologies.",
        style: "card bg-grey",
        icon: "Y",
      },
      {
        image: {
          imgSrc: "/assets/software-developer.png",
          style: "card-img",
          alt: "",
        },
        title: "Hire Software Developers",
        subtitle: "Looking for offshore resource?",
        description:
          "Hire top software professionals with flexible engagement and expertise in the latest tools and technologies.",
        style: "card bg-grey",
        icon: "Y",
      },
      {
        image: {
          imgSrc: "/assets/software-developer.png",
          style: "card-img",
          alt: "",
        },
        title: "Hire Software Developers",
        subtitle: "Looking for offshore resource?",
        description:
          "Hire top software professionals with flexible engagement and expertise in the latest tools and technologies.",
        style: "card bg-grey",
        icon: "Y",
      },
    ],
    style: "services bg-white",
  };
  const homeServices1 = {
    heading1: { text: "", style: "" },
    heading2: {
      text: "Impactful Benefits of IT Staff Augmentation",
      style: "",
    },
    cards: [
      {
        image: {
          imgSrc: "/assets/software-developer.png",
          style: "card-sm-img",
          alt: "",
        },
        title: "Save upto 30%",
        subtitle: "Staffing Cost",
        description: "",
        style: "card-sm bg-white",
        icon: "N",
      },
      {
        image: {
          imgSrc: "/assets/software-developer.png",
          style: "card-sm-img",
          alt: "",
        },
        title: "Save upto 30%",
        subtitle: "Staffing Cost",
        description: "",
        style: "card-sm bg-white",
        icon: "N",
      },
      {
        image: {
          imgSrc: "/assets/software-developer.png",
          style: "card-sm-img",
          alt: "",
        },
        title: "Save upto 30%",
        subtitle: "Staffing Cost",
        description: "",
        style: "card-sm bg-white",
        icon: "N",
      },
      {
        image: {
          imgSrc: "/assets/software-developer.png",
          style: "card-sm-img",
          alt: "",
        },
        title: "Save upto 30%",
        subtitle: "Staffing Cost",
        description: "",
        style: "card-sm bg-white",
        icon: "N",
      },
      {
        image: {
          imgSrc: "/assets/software-developer.png",
          style: "card-sm-img",
          alt: "",
        },
        title: "Save upto 30%",
        subtitle: "Staffing Cost",
        description: "",
        style: "card-sm bg-white",
        icon: "N",
      },
      {
        image: {
          imgSrc: "/assets/software-developer.png",
          style: "card-sm-img",
          alt: "",
        },
        title: "Save upto 30%",
        subtitle: "Staffing Cost",
        description: "",
        style: "card-sm bg-white",
        icon: "N",
      },
    ],
    style: " services bg-white",
  };
  const homeServices2 = {
    heading1: { text: "EXPERTISE MEETS INNOVATION!    ", style: "" },
    heading2: {
      text: "Software Development and Consulting Services",
      style: "",
    },
    cards: [
      {
        image: {
          imgSrc: "/assets/software-developer.png",
          style: "card-img",
          alt: "",
        },
        title: "Hire Software Developers",
        subtitle: "Looking for offshore resource?",
        description:
          "Hire top software professionals with flexible engagement and expertise in the latest tools and technologies.",
        style: "card bg-white",
        icon: "Y",
      },
      {
        image: {
          imgSrc: "/assets/software-developer.png",
          style: "card-img",
          alt: "",
        },
        title: "Hire Software Developers",
        subtitle: "Looking for offshore resource?",
        description:
          "Hire top software professionals with flexible engagement and expertise in the latest tools and technologies.",
        style: "card bg-white",
        icon: "Y",
      },
      {
        image: {
          imgSrc: "/assets/software-developer.png",
          style: "card-img",
          alt: "",
        },
        title: "Hire Software Developers",
        subtitle: "Looking for offshore resource?",
        description:
          "Hire top software professionals with flexible engagement and expertise in the latest tools and technologies.",
        style: "card bg-white",
        icon: "Y",
      },
      {
        image: {
          imgSrc: "/assets/software-developer.png",
          style: "card-img",
          alt: "",
        },
        title: "Hire Software Developers",
        subtitle: "Looking for offshore resource?",
        description:
          "Hire top software professionals with flexible engagement and expertise in the latest tools and technologies.",
        style: "card bg-white",
        icon: "Y",
      },
      {
        image: {
          imgSrc: "/assets/software-developer.png",
          style: "card-img",
          alt: "",
        },
        title: "Hire Software Developers",
        subtitle: "Looking for offshore resource?",
        description:
          "Hire top software professionals with flexible engagement and expertise in the latest tools and technologies.",
        style: "card bg-white",
        icon: "Y",
      },
      {
        image: {
          imgSrc: "/assets/software-developer.png",
          style: "card-img",
          alt: "",
        },
        title: "Hire Software Developers",
        subtitle: "Looking for offshore resource?",
        description:
          "Hire top software professionals with flexible engagement and expertise in the latest tools and technologies.",
        style: "card bg-white",
        icon: "Y",
      },
    ],
    style: "services bg-grey",
  };
  const carsolcards = [
    {
      imgSrc: "/assets/software-developer.png",
      title: "Save upto 30%",
      subtitle: "Staffing Cost",
      description: "",
    },
    {
      imgSrc: "/assets/software-developer.png",
      title: "Save upto 30%",
      subtitle: "Staffing Cost",
      description: "",
    },
    {
      imgSrc: "/assets/software-developer.png",
      title: "Save upto 30%",
      subtitle: "Staffing Cost",
      description: "",
    },
    {
      imgSrc: "/assets/software-developer.png",
      title: "Save upto 30%",
      subtitle: "Staffing Cost",
      description: "",
    },
  ];
  res.render("index", {
    services,
    packages,
    homeServices,
    homeServices1,
    homeServices2,
    carsolcards,
  });
});

app.get("/work", (req, res) => {
  res.render("work", { services, packages });
});

app.get("/hire-software-developers", (req, res) => {
  const content = {
    banner: "/assets/banner-image-for-suave-solutions-homepage-1.jpg",
    heading: "Hire Software Professionals",
    details:
      "Tap into a network of qualified software developers to scale up your project at reasonably low prices.",
    bullets: [
      {
        text: "100% Transparency Assured",
        imgSrc: "/assets/32323232.png",
      },
      {
        text: "100% Transparency Assured",
        imgSrc: "assets/32323232.png",
      },
      {
        text: "100% Transparency Assured",
        imgSrc: "assets/32323232.png",
      },
    ],
    button: {
      text: "Start Onboarding",
    },
  };
  const detsec = [
    {
      header: "Web Development Team",
      content:
        "Hire an experienced and dedicated web development team from Suave Solutions to initiate your project. We provide dedicated development teams including back-end and front-end developers along with graphic/UI UX designers and QA engineers to meet the development needs of startups as well as large-scale enterprises.",
      image: "/assets/detimg.png",
      direction: "row",
    },
    {
      header: "Web Development Team",
      content:
        "Hire an experienced and dedicated web development team from Suave Solutions to initiate your project. We provide dedicated development teams including back-end and front-end developers along with graphic/UI UX designers and QA engineers to meet the development needs of startups as well as large-scale enterprises.",
      image: "/assets/detimg.png",
      direction: "row-reverse",
    },
    {
      header: "Web Development Team",
      content:
        "Hire an experienced and dedicated web development team from Suave Solutions to initiate your project. We provide dedicated development teams including back-end and front-end developers along with graphic/UI UX designers and QA engineers to meet the development needs of startups as well as large-scale enterprises.",
      image: "/assets/detimg.png",
      direction: "row",
    },
    {
      header: "Web Development Team",
      content:
        "Hire an experienced and dedicated web development team from Suave Solutions to initiate your project. We provide dedicated development teams including back-end and front-end developers along with graphic/UI UX designers and QA engineers to meet the development needs of startups as well as large-scale enterprises.",
      image: "/assets/detimg.png",
      direction: "row-reverse",
    },
  ];
  res.render("hire-sd", { services, packages, content, detsec });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
