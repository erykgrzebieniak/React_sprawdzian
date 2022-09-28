import {useState} from 'react'

function App() {
    const [dane, setDane] = useState({
      podanaLiczba1: 0,
      podanaLiczba2: 0,
      opcja: "nr1"
    }) 

    function oblicz()
    {
      let wynik = 0;
      let l1 = Number(dane.podanaLiczba1);
      let l2 = Number(dane.podanaLiczba2);

      switch(dane.opcja)
      {
        case ("nr1"):
          wynik = l1 + l2;
        break;
        case ("nr2"):
          wynik = l1 - l2;
        break;
        case ("nr3"):
          wynik = l1 * l2;
        break;
        case ("nr4"):
          if(l2 !== 0)
          {
            wynik = l1 / l2;
          }
          else
          {
            alert("nie dziel przez zero")
          }
        break;
        case ("nr5"):
          if(l2 !== 0)
          {
            wynik = l1 % l2;
          }
          else
          {
            alert("nie dziel przez zero")
          }
        break;
        case ("nr6"):
          wynik = Math.pow(l1,l2);
        break;
      }
      document.getElementsByClassName('ok')[0].textContent = "Wynik to: " + wynik
    }
  
  return (
    <div>
      Pierwsza liczba: <input type="number" onChange={(e)=>(setDane({...dane, podanaLiczba1: e.target.value}))}/><br/>
      Druga liczba: <input type="number" onChange={(e)=>(setDane({...dane, podanaLiczba2: e.target.value}))}/><br/>
      Wybierz działanie:  <select defaultValue={"nr1"} onChange={(e)=>(setDane({...dane, opcja: e.target.value}))}>
        <option value="nr1">+</option>
        <option value="nr2">-</option>
        <option value="nr3">*</option>
        <option value="nr4">/</option>
        <option value="nr5">%</option>
        <option value="nr6">**</option>
      </select><br/>
      <button onClick={oblicz}>Oblicz</button>
      <p className='ok'></p>
    </div>
  );
}

export default App;
