import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Machine Learning Enthusiast",
    icon: web,
  },
  {
    title: "Generative AI Innovator",
    icon: mobile,
  },
  {
      
    title: "AI Developer",
    icon: backend,
  },
  // {
  //   title: "Data-Driven Problem Solver",
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "MySQL",
    icon: javascript,
  },
  {
    name: "Java",
    icon: typescript,
  },
  {
    name: "Python",
    icon: docker,
  },
  {
    name: "Pandas",
    icon: redux,
  },
  {
    name: "Tensorflow",
    icon: tailwind,
  },
  {
    name: "Scikit Learn",
    icon: nodejs,
  },
  {
    name: "Seaborn",
    icon: mongodb,
  },
  {
    name: "Langchain",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "FastAPI",
    icon: figma,
  },
  {
    name: "Streamlit",
    icon: reactjs,
  },
];

const experiences = [
  {
    title: "Research Intern",
    company_name: "Indian Institute of Information Technology, Kancheepuram",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "August 2024 - Present",
    points: [
      "Applying artificial neural networks to enhance multiphase flow metering techniques.",
      "Focusing on optimizing flow measurement for gas-liquid two-phase systems using advanced machine learning models.",
      "Investigating innovative approaches to improve accuracy and efficiency in flow measurement applications.",
    ],
  },
  {
    title: "AI/ML Developer",
    company_name: "Alorb Technologies",
    icon: starbucks,
    iconBg: "#000000",
    date: "May 2024 - August 2024",
    points: [
      "Designing and implementing intelligent AI solutions that enhance user experiences and drive efficiency.",
      "Collaborating with multidisciplinary teams to transform innovative concepts into impactful machine learning applications.",
      "Utilizing advanced frameworks like LangChain and Streamlit to develop and deploy robust AI-driven tools.",
      "Conducting thorough testing and evaluation of models to ensure optimal performance and reliability in real-world scenarios.",
    ],
  },
  {
    title: "ML Intern",
    company_name: "Bharat Intern",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Feb 2024",
    points: [
      "Applied machine learning algorithms, including Regression and Classification, for dataset analysis.",
      "Collaborated with teams to generate actionable insights from data.",
      "Trained models to enhance accuracy and effectiveness in applications.",
      "Contributed to data-driven decision-making through comprehensive analysis.",
    ],
  },
  {
    title: "Research Intern",
    company_name: "Indian Institute of Technology Guwahati",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "May 2023 - July 2023",
    points: [
      "Assessed the efficiency of tools used in die-sinking Electrical Discharge Machining (EDM) for surface texturing and mold applications.",
      "Conducted comprehensive literature reviews and experiments to analyze parameters affecting tool performance.",
      "Gained hands-on experience with Die-sinking EDM and Wire EDM machines, enhancing practical skills.",
      "Developed proficiency in software tools such as ImageJ, Microsoft Visio, and MATLAB for data analysis and visualization.",
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "I found Rasool attentive, driven, and quick to grasp complex subjects. His initiative, analytical ability, and proficiency in expressing ideas, both written and oral, were impressive. He possesses excellent moral character, a positive attitude, and strong interpersonal skills.",
    name: "Dr. Manas Das",
    designation: "Professor",
    company: "IIT Guwahati",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
 
];

const projects = [
  {
    name: "DocuGenie",
    description:
      "DocuGenie simplifies interaction with PDF documents through an interactive chat-based interface, making it easy to navigate, search, and extract information. Built with Streamlit, it provides a user-friendly platform for quick access to content, ideal for research and document analysis.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "langchain",
        color: "green-text-gradient",
      },
      {
        name: "streamlit",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Skrasool1197/DocuGenie-Conversational-Document-Assistant",
  },
  {
    name: "EasySearch",
    description:
      "EasySearch is a AI-powered search tool designed to provide quick and accurate responses by utilizing several state-of-the-art APIs, such as Wikipedia, Arxiv, DuckDuckGo, and Google Serper for image search.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "streamlit",
        color: "green-text-gradient",
      },
      {
        name: "langchain",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Skrasool1197/EasySearch-LLM",
  },

  {
    name: "Vext API Interaction Tool",
    description:
      "This project provides an interactive web application built with Streamlit that allows users to query the Vext API easily. Users can input their API key and a text query to retrieve relevant information from research papers.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "vext",
        color: "green-text-gradient",
      },
      {
        name: "langchain",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Skrasool1197/Vext-API-Interaction-Tool",
  },
  {
    name: "ImagiText",
    description:
      "A Streamlit app that lets users upload an image and generates a short, descriptive text using Google's Generative AI (Gemini 1.5). The app provides an easy-to-use interface for converting images into engaging text.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "googleai",
        color: "green-text-gradient",
      },
      {
        name: "langchain",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Skrasool1197/Text-to-Image-Using-Google-AI",
  },
  {
    name: "PDF Summarization",
    description:
      "This project provides an AI-powered solution to automatically summarize PDF documents using the MistralAI model. With a simple user interface built using Gradio, users can upload a PDF, and the application will generate concise summaries based on the content. ",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "mistralai",
        color: "green-text-gradient",
      },
      {
        name: "langchain",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Skrasool1197/Text-Summarization",
  },
  {
    name: "Customer Segmentation",
    description:
      "Customer segmentation model for a bank's credit card holders. The goal is to segment customers based on their transaction and credit usage patterns, allowing the bank to tailor marketing strategies for each segment more effectively.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "datascience",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Skrasool1197/Customer-Segmentation-Using-Clustering",
  },
  {
    name: "Twitter Sentiment Analysis",
    description:
      "The objective of this project is to use machine learning to predict the sentiment of tweets or comments. In particular, the Twitter Sentiment dataset from Kaggle has been used to apply a RandomForestClassifier model. The goal is to accurately classify a tweet's sentiment as irrelevant, neutral, positive, or negative.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "ml",
        color: "green-text-gradient",
      },
      {
        name: "randomforest",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Skrasool1197/Twitter-Sentiment-Analysis",
  },

];


export { services, technologies, experiences, testimonials, projects };
