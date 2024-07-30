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
          <div id="description" className="flex flex-col gap-4">
              <h4 className="font-bold text-lg">Introduction:</h4>
              <p className="italic font-light text-sm">{description}</p>
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
          <div id="language" className="flex flex-col gap-4">
            <h2 className="font-bold text-lg">Languages</h2>
            {language.map((lang) => {
              return (
                <div className="text-sm flex gap-3 items-center" key={lang.id}>
                  <div className="text-[17px]">{lang.flag}</div>
                  <div className="flex flex-col gap-1">
                    <h4>{lang.language}</h4>
                    <p className="font-thin">{lang.proficiency}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="border-l rounded-3xl h-auto border-[#E6E0E0]"></div>
        <div id="rightCol" className="w-[65%] flex flex-col gap-[70px] pl-9">
          <div id="education" className="flex flex-col gap-4">
            <h2 className="font-bold text-lg">Education</h2>
            {education.map((edu) => {
              return (
                <div key={edu.id} className="rounded-xl flex gap-3 bg-copper bg-opacity-40 px-2 py-3">
                  <div className="flex items-center"><i className='bx bxs-graduation p-2 rounded-full text-2xl bg-copper text-white'></i></div>
                  <div>

                    <div className="text-sm font-thin">{edu.startDate} ~ {edu.endDate}</div>
                    <div className="font-bold">{edu.schoolName}</div>
                    <div>{edu.course}</div>

                  </div>

                </div>
              );
            })}
          </div>
          <div id="experience">
            <h2 className="font-bold text-lg">Experience</h2>
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
            <h2 className="font-bold text-lg">Skills</h2>
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
