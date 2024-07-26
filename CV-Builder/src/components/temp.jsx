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