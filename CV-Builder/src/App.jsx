import { useState } from "react";
import PersonalInfo from "./components/personalInfo";
import Contact from "./components/Contacts";
import Languages from "./components/Languages";
import Education from "./components/Education";
import Experience from "./components/Experience.jsx";
import Skills from "./components/Skills.jsx";
import PreviewCV from "./components/cvPreview";
import { v4 as uuidv4 } from "uuid";
import { getFlagImg } from "./utilities/utilities.js";

function App() {
  const [info, setInfo] = useState([
    {
      id: uuidv4(),
      name: "First Name",
      text: "",
    },
    {
      id: uuidv4(),
      name: "Last Name",
      text: "",
    },
    {
      id: uuidv4(),
      name: "Profession",
      text: "",
    },
    {
      id: uuidv4(),
      name: "Little Description",
      text: "",
    },
  ]);

  const [contact, setContact] = useState([
    {
      id: uuidv4(),
      name: "Email",
      text: "",
    },
    {
      id: uuidv4(),
      name: "Telephone",
      text: "",
    },
    {
      id: uuidv4(),
      name: "Address",
      text: "",
    },
    {
      id: uuidv4(),
      name: "Linkedin",
      text: "",
    },
    {
      id: uuidv4(),
      name: "GitHub",
      text: "",
    },
  ]);

  const [language, setLanguage] = useState([
    {
      id: uuidv4(),
      language: "",
      flag: ""
    }
  ])

  const [education, setEducation] = useState([
    {
      id: uuidv4(),
      schoolName: "",
      course: "",
      startDate: undefined,
      endDate: undefined
    }
  ])

  const [experience, setExperience] = useState([
    {
      id: uuidv4(),
      jobName: "",
      company: "",
      description: "",
      startDate: undefined,
      endDate: undefined
    }
    // after cigarette do experience.jsx and write Handle logic
  ])

  const [skills, setSkills] = useState([
    {
      id: uuidv4(),
      skillName: ""
    }
  ])

  const [profilePic, setProfilePic] = useState({
    id: uuidv4(),
    src: ""
  })

  function handleInfoData(e) {
    setInfo(
      info.map((ele) => {
        if (ele.id === e.target.dataset.id) ele.text = e.target.value;
        return ele;
      })
    );
  }

  function handleContactData(e) {
    setContact(
      contact.map((ele) => {
        if (ele.id === e.target.dataset.id) ele.text = e.target.value;
        return ele;
      })
    );
  }

  async function chooseLang(e) {
    const newLangArray = await Promise.all(language.map(async (ele) => {
      if (ele.id === e.target.dataset.id) {
        let parsedData = JSON.parse(e.target.value);
        ele.language = parsedData.lang;
        ele.flag = await getFlagImg(parsedData.country);
      }
      return ele;
    }))
    setLanguage(newLangArray);
    
  }

  function addLanguage(e) {
    e.preventDefault();
    setLanguage([
      ...language,
      {
        id: uuidv4(),
        language: "",
        flag: ""
      }
    ])
  }

  function handleEducation(e) {
    setEducation(
      education.map((edu) => {
        if (edu.id === e.target.dataset.id) {
          return {...edu,
                  [e.target.name]: e.target.value,
          }
        }
        return edu;
      })
    )
  }

  function addEducation(e) {
    e.preventDefault();
    setEducation([
      ...education,
      {
        id: uuidv4(),
        schoolName: "",
        course: "",
        startDate: undefined,
        endDate: undefined
      }
    ])
  }

  function handleExperience(e) {
    setExperience(
      experience.map((exp) => {
        if (exp.id === e.target.dataset.id) {
          return {...exp,
                  [e.target.name]: e.target.value,
          }
        }
        return exp;
      })
    )
  }

  function addExperience(e) {
    e.preventDefault();
    setExperience([
      ...experience,
      {
        id: uuidv4(),
        jobName: "",
        company: "",
        description: "",
        startDate: undefined,
        endDate: undefined
      }
    ])
  }

  function handleSkills(e) {
    setSkills(
      skills.map((skill) => {
        if (skill.id === e.target.dataset.id) {
          return {
            ...skill,
            [e.target.name]: e.target.value
          }
        }
        return skill
      })
    )
  }

  function addSkill(e) {
    e.preventDefault();
    setSkills([
      ...skills,
      {
        id: uuidv4(),
        skillName: ""
      }
    ])
  }

  function handleProfilePic(e) {
    setProfilePic({
      ...profilePic,
      src: URL.createObjectURL(e.target.files[0])
    })
  }

  console.log(profilePic)
  return (
    <>
      {/* change the max and min w later  */}
      <div className="max-w-[800px]">
        <h1 className="text-3xl text-red-600 font-bold underline border-blue-400 text-center">
          Hello world!
        </h1>
        <PersonalInfo data={info} dataImg={profilePic} onInput={handleInfoData} addImg={handleProfilePic} />
        <Contact data={contact} onInput={handleContactData} />
        <Languages data={language} chooseLang={chooseLang} addLang={addLanguage} />
        <Education data={education} onInput={handleEducation} addEdu={addEducation} />
        <Experience data={experience} onInput={handleExperience} addExp={addExperience}/>
        <Skills data={skills} onInput={handleSkills} addSkill={addSkill}/>
      </div>
      <div className="min-w-[800px]">
        previewCV
        <PreviewCV 
          info={info}
          profilePic={profilePic}
          contact={contact}
          language={language}
          education={education}
          experience={experience}
          skills={skills} />
      </div>
    </>
  );
}

export default App;
