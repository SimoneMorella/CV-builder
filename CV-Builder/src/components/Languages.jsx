import { motion, AnimatePresence } from 'framer-motion';
import Select from 'react-select';
// study react-select to see how to do the select and customize it!

export default function Languages({ data, chooseLang, addLang, handleProficiency }) {

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

  const langProficiency = [
    {value: 'Elementary', label: "Elementary"},
    {value: 'Conversational', label: "Conversational"},
    {value: 'Professional', label: "Professional"},
    {value: 'Native', label: "Native"}
  ]

  
  
  
  function handleChange(selectedOption, actionMeta) {
    chooseLang(selectedOption, actionMeta.name)
  }
  
  function handleProf(selectedOption, actionMeta) {
    handleProficiency(selectedOption, actionMeta.name)
  }
  
  function checkSelectedLang(option) {
    const selectedLanguage = JSON.parse(option.value).lang;
      return data.find((ele) => ele.language === selectedLanguage);
  }

  function checkIndex(index) {
    return index !== 0;
  }



  return (
    <div className="rounded-md px-6 max-[533px]:px-4 py-5 bg-copper text-white flex flex-col gap-4 w-full">
      <h2 className="flex gap-2 items-center text-2xl max-[533px]:text-xl relative">
        <i className='bx bx-world text-3xl max-[533px]:text-2xl'></i>
        <span className="font-bold">Languages</span>
        <form onSubmit={addLang} className='absolute right-0'>
          <button 
            type="submit" 
            disabled={data.length >= 4} 
            className='bg-white shadow-unpressed hover:shadow-pressed transition-transform active:scale-95 active:shadow-pressed text-darkCop w-14 max-[533px]:w-12 h-8 max-[533px]:h-7 rounded-lg text-2xl max-[533px]:text-xl flex justify-center items-center disabled:bg-gray-400'>
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
          className="relative rounded-xl border-2 border-darkCop px-8 max-[533px]:px-2 py-[10px]">
            <h3 className="absolute text-sm bottom-[50px] left-[10px] px-1 bg-copper">Language {index + 1}</h3>
            <div className='flex gap-2 max-[533px]:gap-1'>
              <Select 
              className='w-[60%] max-[533px]:text-xs'
              classNamePrefix="custom-select"
              placeholder="Select a Language"
              options={options}
              onChange={handleChange} 
              name={lang.id} 
              value={options.find(option => JSON.parse(option.value).lang === lang.language)}
              isOptionDisabled={checkSelectedLang}
              menuPortalTarget={document.body}
              styles={{
                control: (provided) => ({
                  ...provided,
                  backgroundColor: "#283618",
                  border: "none",
                  color: "white",
                  boxShadow: "none",               
                }),
                menu: (provided) => ({
                  ...provided,
                  backgroundColor: "#283618",
                  borderRadius: "0.5rem",
                  overflow: "hidden",
                  position: "absolute",
                  color: "white",
                  
                }),
                singleValue: (provided) => ({
                  ...provided,
                  color: "white"
                }),
                option: (provided, state) => ({
                  ...provided,
                  backgroundColor: state.isSelected ? '#3C543C' : (state.isFocused ? '#38412e' : '#283618'),
                  color: state.isDisabled ? "#898989" : "white",
                  '&:active': {
                    backgroundColor: '#3C543C',
                  },

                })
              }}
              />
              <Select 
              className='w-[40%] max-[533px]:text-xs'
              placeholder="Proficiency"
              options={langProficiency}
              classNamePrefix="custom-select"
              menuPortalTarget={document.body}
              value={langProficiency.find(proficiency => proficiency.value === lang.proficiency)}
              isDisabled={lang.language === ""}
              onChange={handleProf}
              name={lang.id}
              styles={{
                control: (provided, state) => ({
                  ...provided,
                  backgroundColor: "#283618",
                  border: "none",
                  color: "white",
                  boxShadow: "none",
                  opacity: state.isDisabled ? 0.7 : 1            
                }),
                menu: (provided) => ({
                  ...provided,
                  backgroundColor: "#283618",
                  borderRadius: "0.5rem",
                  overflow: "hidden",
                  position: "absolute",
                  color: "white",
                  
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
            </div>
            
          </motion.div>
        );
      })}
      </AnimatePresence>
      

    </div>
  );
}
