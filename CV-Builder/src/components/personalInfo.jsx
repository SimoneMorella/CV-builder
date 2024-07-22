export default function PersonalInfo({data, onInput, addImg}) {
    let firstName = data[0];
    let lastName = data[1];
    let jobName = data[2];
    let description = data[3];

    return (
        <div className="rounded-md px-6 py-4 bg-copper text-white flex flex-col gap-2">
            <h2 className="flex gap-2 items-center text-2xl">
                <i className='bx bxs-id-card text-3xl'></i>
                <span className="font-bold">Personal Info</span>
            </h2>
            <div className="flex flex-col gap-2">
                <div className="flex justify-between gap-2 items-center">
                <input 
                    type="text" 
                    placeholder="First Name"
                    value={firstName.text}
                    data-id={firstName.id}
                    onChange={onInput}
                    className="flex-1 p-3 rounded-xl outline-none bg-darkCop" />
                <input 
                    type="text" 
                    placeholder="Last Name"
                    value={lastName.text}
                    data-id={lastName.id}
                    onChange={onInput}
                    className="flex-1 p-3 rounded-xl outline-none bg-darkCop" />
                </div>
                <div className="flex justify-between gap-2 items-center">
                    <input 
                        type="text" 
                        placeholder="Job Name"
                        value={jobName.text}
                        data-id={jobName.id}
                        onChange={onInput}
                        className="flex-1 p-3 rounded-xl outline-none bg-darkCop" />
                    <div>
                        <label 
                            htmlFor="file"
                            className="flex-1 p-3 flex gap-1 items-center bg-white text-darkCop font-semibold rounded-xl cursor-pointer"
                        >
                            <i className='bx bxs-image-add text-2xl'></i>
                            <span>Add profile pic</span>
                        </label>
                        <input 
                            type="file"
                            onChange={addImg}
                            id="file"
                            accept="image/*"
                            hidden />
                    </div>
                </div>

                
                
                <textarea 
                    placeholder="Tell something about yourself.."
                    value={description.text}
                    data-id={description.id}
                    onChange={onInput}
                    ></textarea>
                </div>
            </div>
    )
}