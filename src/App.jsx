import "./App.css";
import { Configuration, OpenAIApi } from "openai";
import OptionSelection from "./components/OptionSelection";
import Translation from "./components/Translation";
import { arrayItems } from "./AIOptions";
import { useState } from "react";

function App() {
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_Open_AI_Key,
  });
  const openai = new OpenAIApi(configuration);
  const [option, setOption] = useState({});
  const [result, setResult] = useState("");
  const [input, setInput] = useState("");
  
  // console.log(import.meta.env.VITE_Open_AI_Key);

  const selectOption = (option) => {
    setOption(option);
  };

  const doStuff = async () => {
    let object = { ...option, prompt: input };

    console.log(object)

    const response = await openai.createCompletion(object);

    setResult(response.data.choices[0].text);
  };

  return (
    <div className="App">
      {Object.values(option).length === 0 ? (
        <OptionSelection arrayItems={arrayItems} selectOption={selectOption} />
      ) : (
        <Translation doStuff={doStuff} setInput={setInput} result={result} />
      )}
    </div>
  );
}

export default App;



// import { useState } from 'react'
// import './App.css'
// import Header from './components/Header'
// import Footer from './components/Footer'
// import ListItem from './components/ListItem'
// import OpenAI from './api/openai'

// function App() {
//   const [text, setText] = useState('')
//   const [list, setList] = useState([])

//   const handleOnChangeInput = (event) => {
//     setText(event.target.value)
//   }

//   const handleClickButton = () => {
//     const currentList = [...list] // Corregido: Crear una copia de la lista actual antes de modificarla
//     currentList.push(text)
//     setList(currentList)
//     setText('')
//   }

//   console.log(list)

//   return (
//     <div className="App">
      
//       <Header />
//       <OpenAI />
//       <div className='card'>
//         <label>
//           Liste des taches :
//           <input
//             value={text}
//             onChange={handleOnChangeInput}
//             className='input'
//           />
//         </label>
//         <button onClick={handleClickButton}>Valider</button>
//       </div>
//       <div className='card'>
//         {list.map((item, index) => (
//           <ListItem key={`list-item-${item}-${index}`} name={item} />
//         ))}
//       </div>
//       <Footer />
//     </div>
//   )
// }

// export default App
