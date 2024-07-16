import { useState } from "react";
import PersonalInfo from "./components/personalInfo";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [data, setData] = useState({
    info: [
      {
        id: uuidv4(),
        name: "First Name",
        text: "",
      },
    ],
  });

  function handleData(e) {
    setData({
      ...data,
      info: data.info.map((ele) => {
        if (ele.id === e.target.dataset.id) ele.text = e.target.value;
        return ele;
      }),
    });
  }
  console.log(data.info[0].text)
  return (
    <>
      <div className="max-w-[800px]">
        <h1 className="text-3xl text-red-600 font-bold underline border-blue-400 text-center">
          Hello world!
        </h1>
        <PersonalInfo data={data} onInput={handleData} />
      </div>
      <div className="min-w-[800px]">previewCV</div>
    </>
  );
}

export default App;
