import {motion, AnimatePresence} from "framer-motion"



export default function Experience({ data, onInput, addExp }) {

  function checkIndex(index) {
    return index !== 0;
  }

  return (
    <div className="rounded-md px-6 max-[533px]:px-4 py-5 bg-copper text-white flex flex-col gap-4">
      <h2 className="flex gap-2 items-center text-2xl max-[533px]:text-xl relative">
      <i className='bx bxs-briefcase text-3xl max-[533px]:text-2xl' ></i>
        <span className="font-bold">Experience</span>
        <form onSubmit={addExp} className="absolute right-0">
          <button 
            type="submit" 
            disabled={data.length >= 2}
            className='bg-white shadow-unpressed hover:shadow-pressed transition-transform active:scale-95 active:shadow-pressed text-darkCop w-14 [533px]:w-12 h-8 max-[533px]:h-7 rounded-lg text-2xl max-[533px]:text-xl flex justify-center items-center disabled:bg-gray-400'>
            <i className='bx bx-plus' ></i>
          </button>
      </form>
        </h2>
      <AnimatePresence>
      {data.map((exp, index) => {
        return (
          <motion.div 
            key={exp.id}
            initial={checkIndex(index) && {opacity: 0, translateY: "8px"}}
            animate={checkIndex(index) && {opacity: 1, translateY: 0}}
            transition={checkIndex(index) && {duration: 0.5}}
            className="relative rounded-xl border-2 border-darkCop px-8 max-[533px]:px-2 py-[10px]">
            <h3 className="absolute text-sm top-[-12px] left-[10px] px-1 bg-copper">Position {index + 1}</h3>
            <div id="inside-container" className="grid grid-cols-2 grid-rows-4 gap-[9px]">
              <input
                type="text"
                placeholder="Profession"
                value={exp.jobName}
                data-id={exp.id}
                name="jobName"
                onChange={onInput}
                maxLength={20}
                className="col-span-1 p-3 max-[533px]:py-2 max-[533px]:text-sm rounded-xl outline-none bg-darkCop transition duration-300 ease-in-out focus:bg-inputFocus hover:bg-inputFocus"

              />
              <input
                type="text"
                placeholder="Company Name"
                value={exp.company}
                data-id={exp.id}
                name="company"
                onChange={onInput}
                maxLength={16}
                className="col-span-1 p-3 max-[533px]:py-2 max-[533px]:text-sm rounded-xl outline-none bg-darkCop transition duration-300 ease-in-out focus:bg-inputFocus hover:bg-inputFocus"

              />
              <input
                type="number"
                placeholder="Start Year"
                value={exp.startDate}
                data-id={exp.id}
                name="startDate"
                onChange={onInput}
                maxLength={4}
                className="col-span-1 p-3 max-[533px]:py-2 max-[533px]:text-sm rounded-xl outline-none bg-darkCop transition duration-300 ease-in-out focus:bg-inputFocus hover:bg-inputFocus"

              />
              <input
                type="number"
                placeholder="End Year"
                value={exp.endDate}
                data-id={exp.id}
                name="endDate"
                onChange={onInput}
                maxLength={4}
                className="col-span-1 p-3 max-[533px]:py-2 max-[533px]:text-sm rounded-xl outline-none bg-darkCop transition duration-300 ease-in-out focus:bg-inputFocus hover:bg-inputFocus"

              />
              <textarea
                placeholder="Responsibilities description"
                value={exp.description}
                data-id={exp.id}
                name="description"
                onChange={onInput}
                maxLength={175}
                className="row-span-2 col-span-2 resize-none p-3 max-[533px]:py-2 max-[533px]:text-sm rounded-xl outline-none bg-darkCop transition duration-300 ease-in-out focus:bg-inputFocus hover:bg-inputFocus "
            ></textarea>
            </div>
          </motion.div>
        );
      })}
      </AnimatePresence>
    </div>
  );
}
