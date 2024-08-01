import {motion, AnimatePresence} from "framer-motion"

export default function Education({ data, onInput, addEdu }) {

  function checkIndex(index) {
    return index !== 0;
  }


  return (
    <div className="rounded-md px-6 max-[533px]:px-4 py-5 bg-copper text-white flex flex-col gap-4">
      <h2 className="flex gap-2 items-center text-2xl max-[533px]:text-xl relative">
      <i className='bx bxs-graduation text-3xl max-[533px]:text-2xl'></i>
      <span className="font-bold">Education</span>
      <form onSubmit={addEdu} className="absolute right-0">
        <button 
          type="submit" 
          disabled={data.length >= 2}
          className='bg-white shadow-unpressed hover:shadow-pressed transition-transform active:scale-95 active:shadow-pressed text-darkCop w-14 max-[533px]:w-12 h-8 max-[533px]:h-7 rounded-lg text-2xl max-[533px]:text-xl flex justify-center items-center disabled:bg-gray-400'>
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
            className="relative rounded-xl border-2 border-darkCop px-8 max-[533px]:px-2 py-[10px]">
            <h3 className="absolute text-sm top-[-12px] left-[10px] px-1 bg-copper">Achievement {index + 1}</h3>
            <div id="inside-container" className="grid grid-cols-2 grid-rows-2 gap-[9px] max-[533px]:gap-[6px]">
                <input
                type="text"
                placeholder="School or University"
                data-id={edu.id}
                name="schoolName"
                value={edu.schoolName}
                onChange={onInput}
                maxLength={47}
                className="p-3 max-[533px]:py-2 max-[533px]:text-sm  rounded-xl outline-none bg-darkCop transition duration-300 ease-in-out focus:bg-inputFocus hover:bg-inputFocus"
              />
              <input
                type="text"
                placeholder="Course"
                data-id={edu.id}
                name="course"
                value={edu.course}
                onChange={onInput}
                maxLength={48}
                className="p-3 max-[533px]:py-2 max-[533px]:text-sm rounded-xl outline-none bg-darkCop transition duration-300 ease-in-out focus:bg-inputFocus hover:bg-inputFocus"
              />
              <input
                type="number"
                placeholder="Start Year"
                data-id={edu.id}
                name="startDate"
                value={edu.startDate}
                onChange={onInput}
                maxLength={4}
                className="p-3 max-[533px]:py-2 max-[533px]:text-sm rounded-xl outline-none bg-darkCop transition duration-300 ease-in-out focus:bg-inputFocus hover:bg-inputFocus"
              />
              <input
                type="number"
                placeholder="End Year"
                data-id={edu.id}
                name="endDate"
                value={edu.endDate}
                onChange={onInput}
                maxLength={4}
                className="p-3  max-[533px]:py-2 max-[533px]:text-sm rounded-xl outline-none bg-darkCop transition duration-300 ease-in-out focus:bg-inputFocus hover:bg-inputFocus"
              />
            </div>
          </motion.div>
        );
      })}
      </AnimatePresence>
      

    </div>
  );
}
