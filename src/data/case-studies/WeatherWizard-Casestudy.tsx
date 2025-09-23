import { ProjectCasestudy } from "@/schema/ProjectSchema";
import image1 from "../../assets/casestudies/weather-tracker/image-1.png";
import image2 from "../../assets/casestudies/weather-tracker/image-2.png";
import image3 from "../../assets/casestudies/weather-tracker/image-3.png";
import image4 from "../../assets/casestudies/weather-tracker/image-4.png";
import image5 from "../../assets/casestudies/weather-tracker/image-5.png";
import image6 from "../../assets/casestudies/weather-tracker/image-6.png";

export const WeatherWizardCasestudy: ProjectCasestudy[] = [
  {
    title: "Weather Wizard",
    slug: "weather-wizard",
    cover: { src: image5, alt: "Weather Wizard" },
    role: "Design & Development",
    repo: { link: "https://github.com/OliverShenton/weather-tracker", available: true },
    projectType: "Web app",
    client: "Personal",
    year: 2024,
    lastUpdated: "27/12/2024",
    duration: "N/A",
    status: "Completed",
    demo: { link: "N/A", available: false },
    description:
      "A responsive weather tracking app built with React. It provides real-time weather updates, a five-day forecast, and quick access to popular world capitals. Designed with a simple, clean itnerfacem it makes it easy for users to check current conditions anywhere in the world.",
    problem:
      "Most weather apps are either too cluttered with information or locked behind premium subscriptions. I wanted to create a lightweight, accessible alternative that focuses on clarity and usability while practising API integration and UI development.",
    solution:
      "I designed and developed a weather tracker that consumes open weather APIs, with a focus on an intuitive interface. Users can search for any city, get weather for their current location, or quickly check common global destinations. A built-in dark mode ensures readability at any time of day.",
    audience: ["General users wanting to quick weather checks", "Travellers planning trips"],
    features: [
      { feature: "Date & time", completed: true },
      { feature: "Dark mode toggle", completed: true },
      { feature: "Location search bar", completed: true },
      { feature: "Get current location", completed: true },
      { feature: "Popular locations", completed: true },
      { feature: "Current day forecast", completed: true },
      { feature: "Five day forecast", completed: true },
    ],
    pages: [{ feature: "Home - Search, popular cities, and forecasts", completed: true }],
    techstack: ["HTML", "CSS", "JavaScript", "React", "Open Weather API"],
    gallery: [
      { src: image1, alt: "Weather Wizard" },
      { src: image2, alt: "Dark mode" },
      { src: image3, alt: "Selected capital" },
      { src: image4, alt: "Dark mode" },
      { src: image5, alt: "Current location" },
      { src: image6, alt: "Search bar" },
    ],
    updateHistory: [{ date: "27/12/2024", description: "Initial commit" }],
  },
];
