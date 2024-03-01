import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import AdviceComponent from './Components/AdviceComponent';
import Advice from './Interfaces/interface';
import getData from './DataServices/DataServices';

function App() {

  const [adviceData, setAdviceData] = useState<Advice>();

  useEffect( () => {
    const fetchData = async () => {
        const fetchedData = await getData();
        setAdviceData(fetchedData);
    }

    fetchData();
  },[])




  return (
    <div className="App">
      {
        adviceData && <AdviceComponent  id={adviceData?.slip.id} advice={adviceData?.slip.advice} />        
      }

    </div>
  );
}

export default App;
