export default function Contact({data, onInput}) {
    // fix every name for clarity
    let email = data[0];
    let number = data[1];
    let address = data[2];
    let linkedin = data[3];
    let github = data[4];
    return (
        <div className="rounded-md px-6 py-5 bg-copper text-white flex flex-col gap-4 w-full">
            <h2 className="flex gap-2 items-center text-2xl">
                <i className='bx bxs-contact text-3xl'></i>
                <span className="font-bold">Contacts</span> 
            </h2>
            <div className="flex flex-col gap-[9px]">
                <input 
                    type="email" 
                    placeholder="Email"
                    value={email.text}
                    data-id={email.id}
                    onChange={onInput}
                    maxLength={28}
                    className="flex-1 p-3 rounded-xl outline-none bg-darkCop transition duration-300 ease-in-out focus:bg-inputFocus hover:bg-inputFocus" />
                <input 
                    type="number" 
                    placeholder="Telephone Number"
                    value={number.text}
                    data-id={number.id}
                    onChange={onInput}
                    maxLength={26}
                    className="[&::-webkit-inner-spin-button]:appearance-none flex-1 p-3 rounded-xl outline-none bg-darkCop transition duration-300 ease-in-out focus:bg-inputFocus hover:bg-inputFocus" />
                <input 
                    type="text" 
                    placeholder="Location / Address"
                    value={address.text}
                    data-id={address.id}
                    onChange={onInput}
                    maxLength={30}
                    className="flex-1 p-3 rounded-xl outline-none bg-darkCop transition duration-300 ease-in-out focus:bg-inputFocus hover:bg-inputFocus" />
                <div className="flex-1  flex  gap-[9px] items-center">
                    <input
                        type="text" 
                        placeholder="Linkedin"
                        value={linkedin.text}
                        data-id={linkedin.id}
                        onChange={onInput}
                        maxLength={35}
                        className="w-full p-3 rounded-xl outline-none bg-darkCop transition duration-300 ease-in-out focus:bg-inputFocus hover:bg-inputFocus" />
                    <input
                        type="text" 
                        placeholder="GitHub"
                        value={github.text}
                        data-id={github.id}
                        onChange={onInput}
                        maxLength={35}
                        className="w-full p-3 rounded-xl outline-none bg-darkCop transition duration-300 ease-in-out focus:bg-inputFocus hover:bg-inputFocus" />
                </div>
            </div>
        </div>
    )
}