export default function Languages({data, chooseLang}) {

    return (
        <div className="rounded-md px-6 py-4">
            <h2>Languages</h2>
            {data.map((lang, index) => {
                return (
                    <div key={lang.id}>
                        <h3>Language {index + 1}</h3>
                        <select onChange={chooseLang} data-id={lang.id} defaultValue=''>
                            <option disabled value=''>Select a Language</option>
                            <option value='{"country":"Italy", "lang":"Italian"}'>Italian</option>
                            <option value='{"country":"United States", "lang":"English"}'>English</option>
                            <option value='{"country":"Spain", "lang":"Spanish"}'>Spanish</option>
                            <option value='{"country":"France", "lang":"French"}'>French</option>
                            <option value='{"country":"Brazil", "lang":"Portuguese"}'>Portuguese</option>
                            <option value='{"country":"Germany", "lang":"German"}'>German</option>
                            <option value='{"country":"China", "lang":"Chinese"}'>Chinese</option>
                            <option value='{"country":"Japan", "lang":"Japanese"}'>Japanese</option>
                        </select>
                    </div>

                )
            })}
        </div>
    )
}