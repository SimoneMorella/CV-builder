export default function Languages({ data, chooseLang, addLang }) {
  // need to finish this by adding button to add more languages (max-3-4 idk)

  function checkSelectedLang(language) {
    return data.find((ele) => ele.language === language);
  }

  return (
    <div className="rounded-md px-6 py-4">
      <h2>Languages</h2>
      {data.map((lang, index) => {
        return (
          <div key={lang.id}>
            <h3>Language {index + 1}</h3>
            <select onChange={chooseLang} data-id={lang.id} defaultValue="">
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
          </div>
        );
      })}
      <form onSubmit={addLang}>
        <button type="submit" disabled={data.length >= 4}>
          Add Language
        </button>
      </form>
    </div>
  );
}
