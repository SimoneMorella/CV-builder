export default function PersonalInfo({data, onInput, addImg}) {
    let firstName = data[0];
    let lastName = data[1];
    let jobName = data[2];
    let description = data[3];

    return (
        <div className="rounded-md px-6 py-5 bg-copper text-white flex flex-col gap-4">
            <h2 className="flex gap-2 items-center text-2xl">
                <i className='bx bxs-id-card text-3xl'></i>
                <span className="font-bold">Personal Info</span>
            </h2>
            <div className="flex flex-col gap-[9px]">
                <div className="flex justify-between gap-[9px] items-center">
                <input 
                    type="text" 
                    placeholder="First Name"
                    value={firstName.text}
                    data-id={firstName.id}
                    onChange={onInput}
                    className="flex-1 p-3 rounded-xl outline-none bg-darkCop transition duration-300 ease-in-out focus:bg-inputFocus hover:bg-inputFocus" />
                <input 
                    type="text" 
                    placeholder="Last Name"
                    value={lastName.text}
                    data-id={lastName.id}
                    onChange={onInput}
                    className="flex-1 p-3 rounded-xl outline-none bg-darkCop transition duration-300 ease-in-out focus:bg-inputFocus hover:bg-inputFocus" />
                </div>
                <div className="flex justify-between gap-[9px] items-center">
                    <input 
                        type="text" 
                        placeholder="Job Name"
                        value={jobName.text}
                        data-id={jobName.id}
                        onChange={onInput}
                        className="flex-1 p-3 rounded-xl outline-none bg-darkCop transition duration-300 ease-in-out focus:bg-inputFocus hover:bg-inputFocus" />
                    <div>
                        <label 
                            htmlFor="file"
                            className="flex-1 p-3 flex gap-1 items-center bg-white text-darkCop font-semibold rounded-xl cursor-pointer shadow-unpressed hover:shadow-pressed"
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
                <div className="flex">
                    <textarea 
                        placeholder="Tell something about yourself..."
                        value={description.text}
                        data-id={description.id}
                        onChange={onInput}
                        rows={3}
                        className="flex-1 p-3 rounded-xl outline-none bg-darkCop resize-none transition duration-300 ease-in-out focus:bg-inputFocus hover:bg-inputFocus"
                        ></textarea>
                </div>

                </div>
            </div>
    )
}