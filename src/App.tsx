import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import AdviceComponent from './Components/AdviceComponent';
import Advice from './Interfaces/interface';
import getData from './DataServices/DataServices';

function App() {

  const [adviceData, setAdviceData] = useState<Advice>();
  let [count, setCount] = useState<number>(0);

  useEffect( () => {
    const fetchData = async () => {
        const fetchedData = await getData();
        setAdviceData(fetchedData);
    }

    fetchData();
  },[count])

  const newAdvice = () => {
    setCount(count+1)
    console.log(count);
  }

  return (
    <div className="App bg-DarkBlue h-[100vh] flex justify-center items-center">
      {
        adviceData && <AdviceComponent  id={adviceData.slip.id} advice={adviceData.slip.advice} newAdvice={newAdvice}/>        
      }

    </div>
  );
}


export default App;
