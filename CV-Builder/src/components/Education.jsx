import {motion, AnimatePresence} from "framer-motion"

export default function Education({ data, onInput, addEdu }) {

  function checkIndex(index) {
    return index !== 0;
  }


  return (
    <div className="rounded-md px-6 py-5 bg-copper text-white flex flex-col gap-4">
      <h2 className="flex gap-2 items-center text-2xl relative">
      <i className='bx bxs-graduation text-3xl'></i>
      <span className="font-bold">Education</span>
      <form onSubmit={addEdu} className="absolute right-0">
        <button 
          type="submit" 
          disabled={data.length >= 2}
          className='bg-white shadow-unpressed hover:shadow-pressed transition-transform duration-300 active:scale-90 text-darkCop w-14 h-8 rounded-lg text-2xl flex justify-center items-center disabled:bg-gray-400'>
        <i className='bx bx-plus' ></i>
        </button>
      </form>
      </h2>
      <AnimatePresence>
      {data.map((edu, index) => {
        return (
          <motion.div 
            key={edu.id}
            initial={checkIndex(index) && {opacity: 0, translateY: "8px"}}
            animate={checkIndex(index) && {opacity: 1, translateY: 0}}
            transition={checkIndex(index) && {duration: 0.5}}
            className="relative rounded-xl border-2 border-darkCop px-8 py-[10px]">
            <h3 className="absolute text-sm top-[-12px] left-[10px] px-1 bg-copper">Achievement {index + 1}</h3>
            <div id="inside-container" className="grid grid-cols-2 grid-rows-2 gap-[9px]">
                <input
                type="text"
                placeholder="School or University"
                data-id={edu.id}
                name="schoolName"
                value={edu.schoolName}
                onChange={onInput}
                className="p-3 rounded-xl outline-none bg-darkCop transition duration-300 ease-in-out focus:bg-inputFocus hover:bg-inputFocus"
              />
              <input
                type="text"
                placeholder="Course"
                data-id={edu.id}
                name="course"
                value={edu.course}
                onChange={onInput}
                className="p-3 rounded-xl outline-none bg-darkCop transition duration-300 ease-in-out focus:bg-inputFocus hover:bg-inputFocus"
              />
              <input
                type="number"
                placeholder="Start Year"
                data-id={edu.id}
                name="startDate"
                value={edu.startDate}
                onChange={onInput}
                className="p-3 rounded-xl outline-none bg-darkCop transition duration-300 ease-in-out focus:bg-inputFocus hover:bg-inputFocus"
              />
              <input
                type="number"
                placeholder="End Year"
                data-id={edu.id}
                name="endDate"
                value={edu.endDate}
                onChange={onInput}
                className="p-3 rounded-xl outline-none bg-darkCop transition duration-300 ease-in-out focus:bg-inputFocus hover:bg-inputFocus"
              />
            </div>
          </motion.div>
        );
      })}
      </AnimatePresence>
      

    </div>
  );
}
