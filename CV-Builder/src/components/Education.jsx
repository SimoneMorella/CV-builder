export default function Education({ data, onInput }) {
  return (
    <div className="rounded-md px-6 py-4">
      <h2>Education</h2>
      {data.map((edu) => {
        return (
          <div key={edu.id}>
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
    </div>
  );
}
