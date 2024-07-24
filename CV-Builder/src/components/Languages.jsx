import { motion, AnimatePresence } from 'framer-motion';
import Select from 'react-select';
// study react-select to see how to do the select and customize it!

export default function Languages({ data, chooseLang, addLang }) {
  // need to finish this by adding button to add more languages (max-3-4 idk)

  function checkSelectedLang(language) {
    return data.find((ele) => ele.language === language);
  }

  function checkIndex(index) {
    return index !== 0;
  }

  return (
    <div className="rounded-md px-6 py-5 bg-copper text-white flex flex-col gap-4">
      <h2 className="flex gap-2 items-center text-2xl relative">
        <i className='bx bx-world text-3xl'></i>
        <span className="font-bold">Languages</span>
        <form onSubmit={addLang} className='absolute right-0'>
          <button 
            type="submit" 
            disabled={data.length >= 4} 
            className='bg-white shadow-unpressed hover:shadow-pressed transition-transform duration-300 active:scale-75 text-darkCop w-14 h-8 rounded-lg text-2xl flex justify-center items-center disabled:bg-gray-400'>
            <i className='bx bx-plus' ></i>
          </button>
      </form>
      </h2>
      <AnimatePresence>
      {data.map((lang, index) => {
        return (
          <motion.div 
          key={lang.id} 
          initial={checkIndex(index) && {opacity: 0, translateY: "8px"}}
          animate={checkIndex(index) && {opacity: 1, translateY: 0}}
          transition={checkIndex(index) && {duration: 0.5}}
          className="relative rounded-xl border-2 border-darkCop p-2">
            <h3 className="absolute text-sm bottom-[52px] left-[10px] px-1 bg-copper">Language {index + 1}</h3>
            <select 
              onChange={chooseLang} 
              data-id={lang.id} 
              defaultValue=""
              className='bg-darkCop text-white px-3 py-2 rounded-xl w-full'>
              <option disabled value="">
                Select a Language
              </option>
              <option
                value='{"country":"Italy", "lang":"Italian"}'
                disabled={checkSelectedLang("Italian")}
              >
                Italian
              </option>
              <option 
                value='{"country":"United States", "lang":"English"}'
                disabled={checkSelectedLang("English")}
                >
                English
              </option>
              <option 
                value='{"country":"Spain", "lang":"Spanish"}'
                disabled={checkSelectedLang("Spanish")}
                >
                Spanish
              </option>
              <option 
                value='{"country":"France", "lang":"French"}'
                disabled={checkSelectedLang("French")}
                >
                French
              </option>
              <option 
                value='{"country":"Brazil", "lang":"Portuguese"}'
                disabled={checkSelectedLang("Portuguese")}
                >
                Portuguese
              </option>
              <option 
                value='{"country":"Germany", "lang":"German"}'
                disabled={checkSelectedLang("German")}
                >
                German
              </option>
              <option 
                value='{"country":"China", "lang":"Chinese"}'
                disabled={checkSelectedLang("Chinese")}
                >
                Chinese
              </option>
              <option 
                value='{"country":"Japan", "lang":"Japanese"}'
                disabled={checkSelectedLang("Japanese")}
                >
                Japanese
              </option>
            </select>
          </motion.div>
        );
      })}
      </AnimatePresence>
      

    </div>
  );
}
