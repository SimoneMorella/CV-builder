export default function PersonalInfo({data, onInput, addImg}) {
    let firstName = data[0];
    let lastName = data[1];
    let jobName = data[2];
    let description = data[3];

    return (
        <div className="rounded-md px-6 py-4">
            <h2>
                Personal Info
            </h2>
            <div>
            <label htmlFor="file">Choose a JPG or PNG file</label>
            <input 
                type="file"
                onChange={addImg}
                id="file"
                accept="image/*"
                hidden
            />
            </div>

            <input 
                type="text" 
                placeholder="First Name"
                value={firstName.text}
                data-id={firstName.id}
                onChange={onInput} />
            <input 
                type="text" 
                placeholder="Last Name"
                value={lastName.text}
                data-id={lastName.id}
                onChange={onInput} />
            <input 
                type="text" 
                placeholder="Job Name"
                value={jobName.text}
                data-id={jobName.id}
                onChange={onInput} />
            <textarea 
                placeholder="Tell something about yourself.."
                value={description.text}
                data-id={description.id}
                onChange={onInput}
                ></textarea>
        </div>
    )
}