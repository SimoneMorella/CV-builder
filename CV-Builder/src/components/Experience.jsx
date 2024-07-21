export default function Experience({ data, onInput, addExp }) {
  // add button to add experience max 2
  return (
    <div className="rounded-md px-6 py-4">
      <h2>Experience</h2>
      {data.map((exp, index) => {
        return (
          <div key={exp.id}>
            <h3>Experience {index + 1}</h3>
            <input
              type="text"
              placeholder="Profession"
              value={exp.jobName}
              data-id={exp.id}
              name="jobName"
              onChange={onInput}
            />
            <input
              type="text"
              placeholder="Company Name"
              value={exp.company}
              data-id={exp.id}
              name="company"
              onChange={onInput}
            />
            <textarea
              placeholder="Responsibilities description"
              value={exp.description}
              data-id={exp.id}
              name="description"
              onChange={onInput}
            ></textarea>
            <input
              type="number"
              placeholder="Start Year"
              value={exp.startDate}
              data-id={exp.id}
              name="startDate"
              onChange={onInput}
            />
            <input
              type="number"
              placeholder="End Year"
              value={exp.endDate}
              data-id={exp.id}
              name="endDate"
              onChange={onInput}
            />
          </div>
        );
      })}
      <form onSubmit={addExp}>
        <button type="submit" disabled={data.length >= 2}>Add Experience</button>
      </form>
    </div>
  );
}
