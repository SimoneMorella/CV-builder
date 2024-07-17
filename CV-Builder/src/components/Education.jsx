export default function Education({ data, onInput, addEdu }) {
  return (
    <div className="rounded-md px-6 py-4">
      <h2>Education</h2>
      {data.map((edu, index) => {
        return (
          <div key={edu.id}>
            <h3>Education Achievement {index + 1}</h3>
            <input
              type="text"
              placeholder="School or University"
              data-id={edu.id}
              name="schoolName"
              value={edu.schoolName}
              onChange={onInput}
            />
            <input
              type="text"
              placeholder="Course"
              data-id={edu.id}
              name="course"
              value={edu.course}
              onChange={onInput}

            />
            <input
              type="number"
              placeholder="Start Year"
              data-id={edu.id}
              name="startDate"
              value={edu.startDate}
              onChange={onInput}

            />
            <input
              type="number"
              placeholder="End Year"
              data-id={edu.id}
              name="endDate"
              value={edu.endDate}
              onChange={onInput}

            />
          </div>
        );
      })}
      <form onSubmit={addEdu}>
        <button type="submit" disabled={data.length >= 2}>Add Education</button>
      </form>
    </div>
  );
}
