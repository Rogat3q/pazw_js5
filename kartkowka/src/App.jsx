import React, { useState } from 'react';
import samochody from './wariant10';
import Pozycja from './Components/Pozycja';


export default function App() {
  const [imieNazwisko, setImieNazwisko] = useState('');
  const [numerSamochodu, setNumerSamochodu] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Imię i nazwisko:", imieNazwisko);

    const index = Number(numerSamochodu) - 1;

    if (samochody[index] !== undefined) {
      console.log("Treść:", samochody[index]);
    } else {
      console.log("Nieprawidłowy numer samochodu");
    }
  };

  return (
  <div>
    <h1>Liczba samochodów: {samochody.length}</h1>
    <ol>
      {samochody.map((samochod, klucz)=>(
        <li key={klucz}><Pozycja text={samochod}/></li>
      ))}
    </ol>
    <form >
      <div className='d-flex flex-column m-2'>
        <label className='form-label'>Imię i Nazwisko</label>
        <input name="name" className="form-control" type="text" onChange={(e)=> setImieNazwisko(e.target.value)}></input>
      </div>
      <div className='d-flex flex-column m-2'>
        <label className='form-label'>Numer samochodu:</label>
        <input name="number" className="form-control" type="number" onChange={(e)=> setNumerSamochodu(e.target.value)}></input>
      </div>
      <button className='' onClick={handleSubmit}>Zatwierdz wybor</button>
    </form>
  </div>
  );
}