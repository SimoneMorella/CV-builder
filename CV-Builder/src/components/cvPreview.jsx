export default function PreviewCV({
  info,
  profilePic,
  contact,
  language,
  education,
  experience,
  skills
}) {
  let fullName = info[0].text + " " + info[1].text;
  let job = info[2].text;
  let description = info[3].text;
  let email = contact[0].text;
  let telephone = contact[1].text;
  let address = contact[2].text;
  let linkedin = contact[3].text;
  let github = contact[4].text;
  let profilePicSrc = profilePic.src;

  //continue defining the cv and take measures from figma eh!
  return (
    <div className=" h-[29.7cm] w-[21cm]  font-jakarta text-rGrey shadow-resume">
      <div id="header" className="w-full mb-[100px]">
        <div id="partial-to-header" className="bg-copper flex gap-4 px-9">
          <div id="profilePic" className="rounded-full w-[120px] h-[120px] translate-y-1/2 border-2 border-darkCop bg-darkCop"><img src={profilePicSrc} alt="" /></div>
          <div id="personalInfo" className="translate-y-2/3 flex flex-col gap-2">
            <div className="text-2xl text-white font-bold">{fullName}</div>
            <div className="font-light text-lg">{job}</div>
          </div>
        </div>
      </div>
      <div id="RestContainer" className="flex gap-2 px-9">
        <div id="leftCol" className="w-[35%] flex flex-col gap-[70px] ">
          <div id="description" className="italic font-light">
              {description}
          </div>
          <div id="contacts" className="flex flex-col gap-4">
            <h2 className="font-bold text-lg">Contacts</h2>
            <div className="text-sm flex gap-3 items-center">
              <div><i className='bx bx-envelope p-1 rounded-xl pr-[3px] bg-copper text-white'></i></div>
              <div className="flex flex-col gap-1">
                <h4 className="font-thin">Email</h4>
                <p>{email}</p>
              </div>
            </div>
            <div className="text-sm flex gap-3 items-center">
              <div><i className='bx bx-phone p-1 rounded-xl pr-[3px] bg-copper text-white'></i></div>
              <div className="flex flex-col gap-1">
                <h4 className="font-thin">Telephone</h4>
                <p>{telephone}</p>
              </div>
            </div>
            <div className="text-sm flex gap-3 items-center">
              <div><i className='bx bx-map p-1 rounded-xl pr-[3px] bg-copper text-white'></i></div>
              <div className="flex flex-col gap-1">
                <h4 className="font-thin">Location</h4>
                <p>{address}</p>
              </div>
            </div>
            <div className="text-sm flex gap-3 items-center">
              <div><i className='bx bxl-linkedin p-1 rounded-xl pr-[3px] bg-copper text-white'></i></div>
              <div className="flex flex-col gap-1">
                <h4 className="font-thin">Linkedin</h4>
                <p>{linkedin}</p>
              </div>
            </div>
            <div className="text-sm flex gap-3 items-center">
              <div><i className='bx bxl-github p-1 rounded-xl pr-[3px] bg-copper text-white'></i></div>
              <div className="flex flex-col gap-1">
                <h4 className="font-thin">Github</h4>
                <p>{github}</p>
              </div>
            </div>
          </div>
          <div id="language" className="flex flex-col gap-3">
            <h2>Languages</h2>
            {language.map((lang) => {
              return (
                <div className="flex gap-1" key={lang.id}>
                  {/* <img src={language[0].flag} alt="" width={25} /> */}
                  <div>{lang.flag}</div>
                  <div>{lang.language}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="border-l rounded-3xl h-auto border-[#E6E0E0]"></div>
        <div id="rightCol" className="w-[65%]">
          <div id="education">
            <h2>Education</h2>
            {education.map((edu) => {
              return (
                <div key={edu.id}>
                  <div>{edu.schoolName}</div>
                  <div>{edu.course}</div>
                  <div>{edu.startDate}</div>
                  <div>{edu.endDate}</div>
                </div>
              );
            })}
          </div>
          <div id="experience">
            <h2>Experience</h2>
            {experience.map((exp) => {
              return (
                <div key={exp.id}>
                  <div>{exp.jobName}</div>
                  <div>{exp.company}</div>
                  <div>{exp.description}</div>
                  <div>{exp.startDate}</div>
                  <div>{exp.endDate}</div>
                </div>
              );
            })}
          </div>
          <div id="skills">
            <h2>Skills</h2>
            {skills.map((skill) => {
                return (
                    <div key={skill.id}>
                        <div>{skill.skillName}</div>
                    </div>
                )
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
