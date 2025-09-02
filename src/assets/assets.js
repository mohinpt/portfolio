
import tomato from "./tomato.png"
import eLife from "./eLife.png"
import wanderlust from "./wanderlust.png"
import gemini from "./gemini.png";
import weather from "./weather.png";
import dailyWeather from "./dailyWeather.png"

const gitUrl = "https://github.com/mohinpt";

const projectList = [
    {
        title: 'Tomat',
        description: 'A web app for ordering food with Stripe payments. Users browse items, place orders, and pay. Admins manage the menu and view orders.',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'Passport.js', 'Cloudinary'],
        imageUrl: tomato,
        gitUrl:`${gitUrl}/Tomato`,
        liveUrl: "https://tomato-mh.onrender.com" ,
    },
    {
        title: 'eLife',
        description: 'An electronics store with product browsing, cart checkout, and secure Stripe payments. Admins can track orders, and update product listings.',
        technologies: ['Redux', 'Node.js', 'Express', 'MongoDB', 'Passport.js', 'Cloudinary', 'JWT'],
        imageUrl: eLife,
        gitUrl:`${gitUrl}/eLife`,
        liveUrl: "https://e-life-mohin.vercel.app" ,
    },
    {
        title: 'Wanderlust',
        description: 'A travel accommodation platform to discover and share unique travel stays with user reviews and secure authentication.',
        technologies: ['EJS', 'Node.js', 'Express', 'MongoDB', 'RESTful API', "CSS",'Cloudinary' ],
        imageUrl: wanderlust,
        gitUrl:`${gitUrl}/wanderlust-project`,
        liveUrl: "https://wanderlust-project-gnvf.onrender.com/listings" ,
    },
    {
        title: 'Gemini Clone',
        description: 'This project allows users to ask any questions they have, and Gemini provides answers.',
        technologies: ['React', 'CSS', 'Generative AI'],
        imageUrl: gemini,
        gitUrl:`${gitUrl}/gemini-clone`,
        liveUrl: "https://gemini-clone-mh.vercel.app" ,
    },
    {
        title: 'Weather Widget',
        description: 'This is a simple weather application that leverages a weather API to fetch real-time weather data.',
        technologies: ['React', 'OpenWeatherMap', 'Material-UI'],
        imageUrl: weather,
        gitUrl:`${gitUrl}/weather-widget`,
        liveUrl: "https://mh-weather-react.onrender.com" ,
    },
    {
        title: 'Daily Weather',
        description: 'A simple web application that provides current weather information using the Weather API. Users can enter a city name to get real-time weather data such as temperature, humidity, and wind speed.',
        technologies: ['HTML', 'CSS', 'Weather API', 'Javascript'],
        imageUrl: dailyWeather,
        gitUrl:`${gitUrl}/daily-weather`,
        liveUrl: "https://weather-api-mh.vercel.app" ,
    },
];

export {projectList};