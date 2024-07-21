export default function Skills({data, onInput, addSkill}) {
    return (
        <div className="rounded-md px-6 py-4">
            <h2>Skills</h2>
            {
                data.map((skill) => {
                    return (
                        <div key={skill.id}>
                            <input 
                                type="text"
                                placeholder="Language or Technology"
                                value={skill.skillName}
                                data-id={skill.id}
                                name="skillName"
                                onChange={onInput}
                            />
                        </div>
                    )
                })
            }
            <form onSubmit={addSkill}>
                <button type="submit" disabled={data.length >= 6}>Add skill</button>
            </form>
        </div>
    )
}