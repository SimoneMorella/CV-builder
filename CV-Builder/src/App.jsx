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
import { Tooltip } from "react-tooltip";
import SampleCV from "./components/SampleCV.jsx";

// focus later on the equilibrium between the two parts

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
      proficiency: "",
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
  ])

  const [skills, setSkills] = useState([
    {
      id: uuidv4(),
      skillName: ""
    }
  ])

  const [profilePic, setProfilePic] = useState({
    id: uuidv4(),
    src: "",
    error: ""
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

  function handleLangProficiency(selectedOption, name) {
    const newLangArray = language.map(lang => {
      if (lang.id === name) {
        return {
          ...lang,
          proficiency: selectedOption.value
        }
      }
      return lang;
    })
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
    console.log(e.target.files[0].size, e.target.files[0].type)
    if (!e.target.files[0].type.startsWith("image/")) {
      setProfilePic({
        ...profilePic,
        error: "The file selected is not in a valid image format!"
      })
    } else if (e.target.files[0].size > 20971520) {
      setProfilePic({
        ...profilePic,
        error: "The file selected exceeds the maximum size of 20mb, please choose another image!"
      })
    } else {
      setProfilePic({
        ...profilePic,
        src: URL.createObjectURL(e.target.files[0])
      })
    }
  }

  function loadSampleCV() {
    setInfo(SampleCV.info)
    setContact(SampleCV.contact)
    setLanguage(SampleCV.language)
    setEducation(SampleCV.education)
    setExperience(SampleCV.experience)
    setSkills(SampleCV.skills)
    setProfilePic(SampleCV.profilePic)
  }


  return (
    <>
      {/* change the max and min w later  */}
      <div className="max-w-[750px] py-6 font-poppins flex flex-col gap-6">
        <div className="rounded-md bg-copper px-6 py-4 text-white flex flex-col gap-1">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-left">
              ResuMe.<span className="font-light">cv</span>  
            </h1>
            <div className="flex gap-4 text-2xl ">
            <button 
              data-tooltip-id="PDFDownload"
              data-tooltip-content="Download Resume in PDF"
              data-tooltip-place="bottom"
              className="rounded-full bg-darkCop p-[9px] flex justify-center items-center relative transition active:shadow-pressed active:scale-95 hover:shadow-pressed"
              ><i className='bx bxs-file-pdf relative left-[0.8px]'></i>
              <Tooltip 
                id="PDFDownload" 
                style={{
                  fontSize: "12px",
                  padding: "6px 8px",
                  backgroundColor: "#283618",
                  borderRadius: "10px"
                  }}
                  opacity={0.9}
                   />
            </button> 
            <button 
              onClick={loadSampleCV}
              data-tooltip-id="sampleData"
              data-tooltip-content="Use Example Data"
              data-tooltip-place="bottom"
              className="rounded-full bg-darkCop p-[9px] flex justify-center items-center relative transition active:shadow-pressed active:scale-95 hover:shadow-pressed">
                <i className='bx bxs-user-detail relative left-[0.7px]'></i>
                <Tooltip 
                id="sampleData" 
                style={{
                  fontSize: "12px",
                  padding: "6px 8px",
                  backgroundColor: "#283618",
                  borderRadius: "10px"
                  }}
                  opacity={0.9}
                   />
              </button> 
            </div>
          </div>
            <div className="flex rounded-xl px-3 py-2 self-center text-sm gap-1 bg-darkCop">
              <span>SimoneMorella</span> 
              <a href="https://github.com/SimoneMorella" className="transform hover:rotate-45 transition ease-out duration-300 flex items-center text-lg"><i className='bx bxl-github' id="gitico"></i></a>
              <span>{new Date().getFullYear()}</span>
            </div>
        </div>

        <PersonalInfo data={info} dataImg={profilePic} onInput={handleInfoData} addImg={handleProfilePic} profilePic={profilePic} />
        <Contact data={contact} onInput={handleContactData} />
        <Languages data={language} chooseLang={chooseLang} addLang={addLanguage} handleProficiency={handleLangProficiency}/>
        <Education data={education} onInput={handleEducation} addEdu={addEducation} />
        <Experience data={experience} onInput={handleExperience} addExp={addExperience}/>
        <Skills data={skills} onInput={handleSkills} addSkill={addSkill}/>
      </div>
      <div className="min-w-fit py-6 sticky top-0 h-fit">
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
