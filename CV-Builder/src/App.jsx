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

  async function chooseLang(selectedOption, name) {
    const parsedData = JSON.parse(selectedOption.value);
    const newLangArray = await Promise.all(language.map(async (lang) => {
      if (lang.id === name) {
        return {
          ...lang,
          language: parsedData.lang,
          flag: await getFlagImg(parsedData.country)
        }
      }
      return lang;
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

  return (
    <>
      {/* change the max and min w later  */}
      <div className="max-w-[800px] py-6 font-poppins flex flex-col gap-6">
        <div className="rounded-md bg-copper px-6 py-4 text-white flex flex-col gap-1">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-left">
              ResuMe.<span className="font-light">cv</span>  
            </h1>
            <div className="flex gap-4 text-2xl ">
            <button className="rounded-full bg-darkCop p-[9px] flex justify-center items-center relative"><i className='bx bxs-file-pdf relative left-[0.8px]'></i></button> 
            <button className="rounded-full bg-darkCop p-[9px] flex justify-center items-center relative"><i className='bx bxs-user-detail relative left-[0.7px]'></i></button> 
            </div>
          </div>
          <div className="flex rounded-xl self-center px-3 py-2 text-sm gap-1 bg-darkCop">
            <span>SimoneMorella</span> 
            <a href="https://github.com/SimoneMorella" className="transform hover:rotate-45 transition ease-out duration-300 flex items-center text-lg"><i className='bx bxl-github' id="gitico"></i></a>
            <span>{new Date().getFullYear()}</span>
          </div>
        </div>

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
