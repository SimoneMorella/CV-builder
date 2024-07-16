export default function PreviewCV({info, contact, language}) {
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
                <div className="flex gap-1">
                    {/* <img src={language[0].flag} alt="" width={25} /> */}
                    <div>{language[0].flag}</div>
                    <div>{language[0].language}</div>
                </div>
            </div>
        </div>
    )

}