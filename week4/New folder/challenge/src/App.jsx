import { useEffect, useState } from 'react';
import './App.css';
// import ButtonCreate from './Button/ButtonCreate';
// import ButtonUpdate from './Button/ButtonUpdate';
function App() {

  // const handleClick = () => {
  //   alert('123..')
  // }
  const [word, setWord] = useState([])
  useEffect(() => {
    async function fetchdata() {
      const res = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/hello')
      const jsonRes = await res.json()
      console.log(jsonRes);
      const data = jsonRes;
      setWord(data);
    }
    fetchdata();
  }, [])
  return (
    <>
      {/* <ButtonCreate />
      <ButtonUpdate /> */}
      {/* <button onClick={() => {
        alert('123..')
      }}>enter</button> */}

      {/* <button onClick={handleClick}>enter</button> */}

      {JSON.stringify(word)}
      {/* <p>1</p> */}



    </>
  );
}

export default App;




//challenge 1
// export default function LightSwitch() {
//   function handleClick() {
//     let bodyStyle = document.body.style;
//     if (bodyStyle.backgroundColor === 'black') {
//       bodyStyle.backgroundColor = 'white';
//     } else {
//       bodyStyle.backgroundColor = 'black';
//     }
//   }

//   return (
//     <button onClick={handleClick}>
//       Toggle the lights
//     </button>
//   );
// }



//challenge 2
// import React from 'react';

// const ColorSwitch = ({ onChangeColor }) => {
//   return (
//     <button style={{ backgroundColor: 'lightblue' }} onClick={onChangeColor}>
//       Change Color
//     </button>
//   );
// };

// export default ColorSwitch;
