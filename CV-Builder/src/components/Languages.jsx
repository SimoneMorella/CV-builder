import { motion, AnimatePresence } from 'framer-motion';
import Select from 'react-select';
// study react-select to see how to do the select and customize it!

export default function Languages({ data, chooseLang, addLang }) {
  // need to finish this by adding button to add more languages (max-3-4 idk)
  const options = [
    {value: '{"country":"Italy", "lang":"Italian"}', label: "Italian"},
    {value: '{"country":"United States", "lang":"English"}', label: "English"},
    {value: '{"country":"Spain", "lang":"Spanish"}', label: "Spanish"},
    {value: '{"country":"France", "lang":"French"}', label: "French"},
    {value: '{"country":"Brazil", "lang":"Portuguese"}', label: "Portuguese"},
    {value: '{"country":"Germany", "lang":"German"}', label: "German"},
    {value: '{"country":"China", "lang":"Chinese"}', label: "Chinese"},
    {value: '{"country":"Japan", "lang":"Japanese"}', label: "Japanese"},
  ]

  
  
  
  function handleChange(selectedOption, actionMeta) {
    chooseLang(selectedOption, actionMeta.name)
  }
  
  
  function checkSelectedLang(option) {
    const selectedLanguage = JSON.parse(option.value).lang;
      return data.find((ele) => ele.language === selectedLanguage);
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
            className='bg-white shadow-unpressed hover:shadow-pressed transition-transform duration-300 active:scale-90 text-darkCop w-14 h-8 rounded-lg text-2xl flex justify-center items-center disabled:bg-gray-400'>
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
          className="relative rounded-xl border-2 border-darkCop px-8 py-[10px]">
            <h3 className="absolute text-sm bottom-[50px] left-[10px] px-1 bg-copper">Language {index + 1}</h3>
            <Select 
            classNamePrefix="custom-select"
            placeholder="Select a Language"
            options={options}
            onChange={handleChange} 
            name={lang.id} 
            value={options.find(option => JSON.parse(option.value).lang === lang.language)}
            isOptionDisabled={checkSelectedLang}
            styles={{
              control: (provided) => ({
                ...provided,
                backgroundColor: "#283618",
                border: "none",
                color: "white",
                boxShadow: "none"
                
              }),
              menu: (provided) => ({
                ...provided,
                backgroundColor: "#283618",
                borderRadius: "0.5rem",
                overflow: "hidden"
              }),
              singleValue: (provided) => ({
                ...provided,
                color: "white"
              }),
              option: (provided, state) => ({
                ...provided,
                backgroundColor: state.isSelected ? '#3C543C' : (state.isFocused ? '#38412e' : '#283618'),
                '&:active': {
                  backgroundColor: '#3C543C', // Active background color
                },

              })
            }}
            />

          </motion.div>
        );
      })}
      </AnimatePresence>
      

    </div>
  );
}
