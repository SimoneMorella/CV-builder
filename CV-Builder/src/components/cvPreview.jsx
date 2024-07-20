export default function PreviewCV({info, contact, language, education, experience}) {
    let fullName = info[0].text + ' ' + info[1].text;
    let job = info[2].text;
    let description = info[3].text;
    let email = contact[0].text;
    let telephone = contact[1].text;
    let address = contact[2].text;
    let linkedin = contact[3].text;
    let github = contact[4].text;

    return (
        <div>
            <div id="personalInfo">
                <h2>Personal Info</h2>
                <div>{fullName}</div>
                <div>{job}</div>
                <div>{description}</div>
            </div>
            <div id="contacts">
                <h2>Contacts</h2>
                <div>{email}</div>
                <div>{telephone}</div>
                <div>{address}</div>
                <div>{linkedin}</div>
                <div>{github}</div>
            </div>
            <div id="language">
                <h2>Languages</h2>
                {language.map(lang => {
                    return (
                        <div className="flex gap-1" key={lang.id}>
                        {/* <img src={language[0].flag} alt="" width={25} /> */}
                        <div>{lang.flag}</div>
                        <div>{lang.language}</div>
                    </div>
                    )
                })}
            </div>
            <div id="education">
                <h2>Education</h2>
                {education.map(edu => {
                    return (
                        <div key={edu.id}>
                            <div>{edu.schoolName}</div>
                            <div>{edu.course}</div>
                            <div>{edu.startDate}</div>
                            <div>{edu.endDate}</div>
                        </div>
                    )
                })
                }
            </div>
            <div id="experience">
                <h2>Experience</h2>
                {experience.map(exp => {
                    return (
                        <div key={exp.id}>
                            <div>{exp.jobName}</div>
                            <div>{exp.company}</div>
                            <div>{exp.description}</div>
                            <div>{exp.startDate}</div>
                            <div>{exp.endDate}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )

}