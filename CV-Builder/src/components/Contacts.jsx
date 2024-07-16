export default function Contact({data, onInput}) {
    // fix every name for clarity
    let email = data[0];
    let number = data[1];
    let address = data[2];
    let linkedin = data[3];
    let github = data[4];
    return (
        <div className="rounded-md px-6 py-4">
        <h2>
            Contacts
        </h2>
        <input 
            type="email" 
            placeholder="email"
            value={email.text}
            data-id={email.id}
            onChange={onInput} />
        <input 
            type="number" 
            placeholder="Telephone"
            value={number.text}
            data-id={number.id}
            onChange={onInput} />
        <input 
            type="text" 
            placeholder="Address"
            value={address.text}
            data-id={address.id}
            onChange={onInput} />
        <input
            type="text" 
            placeholder="Linkedin"
            value={linkedin.text}
            data-id={linkedin.id}
            onChange={onInput} />
        <input
            type="text" 
            placeholder="GitHub"
            value={github.text}
            data-id={github.id}
            onChange={onInput} />
    </div>
    )
}