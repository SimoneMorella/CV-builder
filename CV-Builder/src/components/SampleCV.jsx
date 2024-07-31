import { v4 as uuidv4 } from "uuid";
import samplePic from "../assets/sampleImg.jpg"


const sampleCV = {
    info: [
        {
          id: uuidv4(),
          name: "First Name",
          text: "Simone",
        },
        {
          id: uuidv4(),
          name: "Last Name",
          text: "Morella",
        },
        {
          id: uuidv4(),
          name: "Profession",
          text: "Front-End Developer",
        },
        {
          id: uuidv4(),
          name: "Little Description",
          text: "Hi! I'm an aspiring Italian Developer trying to master React to create cool and UX-Friendly Interfaces. Let's keep in touch!",
        },
      ],
    contact: [
        {
            id: uuidv4(),
            name: "Email",
            text: "simonemorella21@gmail.com",
          },
          {
            id: uuidv4(),
            name: "Telephone",
            text: "393276240517",
          },
          {
            id: uuidv4(),
            name: "Address",
            text: "Eindhoven, Netherlands",
          },
          {
            id: uuidv4(),
            name: "Linkedin",
            text: "simonemorella",
          },
          {
            id: uuidv4(),
            name: "GitHub",
            text: "SimoneMorella",
          },
    ],
    language: [
        {
            id: uuidv4(),
            language: "Italian",
            proficiency: "Native",
            flag: "🇮🇹"
          },
          {
            id: uuidv4(),
            language: "English",
            proficiency: "Professional",
            flag: "🇺🇲"
          },
          {
            id: uuidv4(),
            language: "Portuguese",
            proficiency: "Conversational",
            flag: "🇧🇷"
          },
          {
            id: uuidv4(),
            language: "Spanish",
            proficiency: "Elementary",
            flag: "🇪🇸"
          }
    ],
    education: [
        {
            id: uuidv4(),
            schoolName: "University Of Bari",
            course: "Psychological Science and Technique ",
            startDate: 2016,
            endDate: 2019
          },
          {
            id: uuidv4(),
            schoolName: "University Of Trento",
            course: "Human-Computer Interaction",
            startDate: 2021,
            endDate: 2024
          }
    ],
    experience: [
        {
            id: uuidv4(),
            jobName: "UX Designer",
            company: "Apple",
            description: "Fake Position: I faked to use Figma to design the interfaces and all the processes of transaction of the new iOS System Map Navigation. Just inventing stuff now.",
            startDate: 2019,
            endDate: 2022
          },
          {
            id: uuidv4(),
            jobName: "Front-End Developer",
            company: "Netflix",
            description: "Another fake position (Maybe it will become true in the future who knows). Here I coded the entire scrollable catalog of suggested movies. Especially for Shrek.",
            startDate: 2022,
            endDate: 2024
          }
    ],
    skills: [
        {
            id: uuidv4(),
            skillName: "JavaScript"
        },
        {
            id: uuidv4(),
            skillName: "TailwindCSS"
        },
        {
            id: uuidv4(),
            skillName: "React"
        },
        {
            id: uuidv4(),
            skillName: "Python"
        },
        {
            id: uuidv4(),
            skillName: "Figma"
        },
        {
            id: uuidv4(),
            skillName: "HTML"
        }
    ],
    profilePic: {
        id: uuidv4(),
        src: samplePic,
        error: ""
    }
}

export default sampleCV