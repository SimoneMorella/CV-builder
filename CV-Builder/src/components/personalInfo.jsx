export default function PersonalInfo({data, onInput}) {


    return (
        <div className="rounded-md px-6 py-4">
            <h2>
                Personal Info
            </h2>
            <input 
                type="text" 
                placeholder="First Name"
                value={data.info[0].text}
                data-id={data.info[0].id}
                onChange={onInput} />
            <input type="text" placeholder="Last Name" />
            <input type="text" placeholder="Job Title" />
            <textarea name="" id="" placeholder="Tell something about yourself.."></textarea>
        </div>
    )
}