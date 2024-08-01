import {motion, AnimatePresence} from "framer-motion"

export default function Skills({data, onInput, addSkill}) {

    function checkIndex(index) {
        return index !== 0;
      }
    
    function getColSpan(index, length) {
        if (length === 1 || (length % 2 !== 0 && index === length - 1)) {
            return "col-span-2";
        }
        return "col-span-1";
    }

    return (
        <div className="rounded-md px-6 py-5 bg-copper text-white flex flex-col gap-4 w-full">
            <h2 className="flex gap-2 items-center text-2xl relative">
                <i className='bx bx-bulb text-3xl' ></i>
                <span className="font-bold">Skills</span>
                <form onSubmit={addSkill} className="absolute right-0">
                    <button 
                        type="submit" 
                        disabled={data.length >= 6}
                        className='bg-white shadow-unpressed hover:shadow-pressed transition-transform active:scale-95 active:shadow-pressed text-darkCop w-14 h-8 rounded-lg text-2xl flex justify-center items-center disabled:bg-gray-400'>
                    <i className='bx bx-plus' ></i>
                    </button>
            </form> 
            </h2>
            <AnimatePresence>
                <div className="grid grid-cols-2 gap-[9px]">
                {
                data.map((skill, index) => {
                    return (
                        <motion.div 
                        key={skill.id}
                        initial={checkIndex(index) && {opacity: 0, translateY: "8px"}}
                        animate={checkIndex(index) && {opacity: 1, translateY: 0}}
                        transition={{
                            opacity: { duration: 0.5 },
                            translateY: { duration: 0.5 },
                          }}
                        className={`relative rounded-xl border-2 border-darkCop px-8 py-[10px] ${getColSpan(index, data.length)}`}>
                            <h3 className="absolute text-sm top-[-10px] left-[10px] px-1 bg-copper">Skill {index + 1}</h3>
                            <input 
                                type="text"
                                placeholder="Language or Technology"
                                value={skill.skillName}
                                data-id={skill.id}
                                name="skillName"
                                onChange={onInput}
                                maxLength={17}
                                className="p-3 rounded-xl w-full outline-none bg-darkCop transition duration-300 ease-in-out focus:bg-inputFocus hover:bg-inputFocus"
                            />
                        </motion.div>
                    )
                })
            }
                </div>
            
            </AnimatePresence>
        </div>
    )
}