export default function PersonalInfo({data, onInput, addImg, profilePic}) {
    let firstName = data[0];
    let lastName = data[1];
    let jobName = data[2];
    let description = data[3];

    return (
        <div className="rounded-md px-6 max-[533px]:px-4 py-5 bg-copper text-white flex flex-col gap-4">
            <h2 className="flex gap-2 items-center text-2xl max-[533px]:text-xl">
                <i className='bx bxs-id-card text-3xl max-[533px]:text-2xl'></i>
                <span className="font-bold">Personal Info</span>
                {profilePic.error !== "" && <div className="ml-auto text-sm max-[533px]:text-xs rounded-xl bg-darkCop px-4 max-[533px]:px-2 max-[533px]:text-center py-1 text-[#FF4C4C]">{profilePic.error}</div>}
            </h2>
            <div className="flex flex-col gap-[9px]">
                <div className="flex gap-[9px] max-[533px]:gap-[6px] items-center">
                <input 
                    type="text" 
                    placeholder="First Name"
                    value={firstName.text}
                    data-id={firstName.id}
                    onChange={onInput}
                    maxLength={15}
                    className="w-full p-3 max-[533px]:py-2 max-[533px]:text-sm rounded-xl outline-none bg-darkCop transition duration-300 ease-in-out focus:bg-inputFocus hover:bg-inputFocus" />
                <input 
                    type="text" 
                    placeholder="Last Name"
                    value={lastName.text}
                    data-id={lastName.id}
                    onChange={onInput}
                    maxLength={20}
                    className="w-full p-3 max-[533px]:py-2 max-[533px]:text-sm rounded-xl outline-none bg-darkCop transition duration-300 ease-in-out focus:bg-inputFocus hover:bg-inputFocus" />
                </div>
                <div className="flex justify-between gap-[9px] items-center">
                    <input 
                        type="text" 
                        placeholder="Current / Aspiring Profession"
                        value={jobName.text}
                        data-id={jobName.id}
                        onChange={onInput}
                        maxLength={40}
                        className="w-full p-3 max-[533px]:py-2 max-[533px]:text-sm rounded-xl outline-none bg-darkCop transition duration-300 ease-in-out focus:bg-inputFocus hover:bg-inputFocus" />
                    <div>
                        <label 
                            htmlFor="file"
                            className=" p-3 max-[533px]:py-2 w-44 max-[533px]:w-[137px] max-[533px]:text-xs flex gap-1 items-center bg-white text-darkCop font-semibold rounded-xl cursor-pointer transition shadow-unpressed active:shadow-pressed active:scale-95 hover:shadow-pressed"
                        >
                            <i className='bx bxs-image-add text-2xl max-[533px]:text-xl'></i>
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
                        maxLength={252}
                        className="flex-1 p-3 max-[533px]:p-2 max-[533px]:text-sm rounded-xl outline-none bg-darkCop resize-none transition duration-300 ease-in-out focus:bg-inputFocus hover:bg-inputFocus"
                        ></textarea>
                </div>

                </div>
            </div>
    )
}