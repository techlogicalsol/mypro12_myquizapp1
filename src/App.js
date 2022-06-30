import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import data from './Components/data'
import Quiz from './Components/Quiz';

function App() {

 
    const [fname, setFName] = useState("")
    const [lname, setLName] = useState("")
    const [error, setError] = useState(false)

    const [questionNum, setQuestionNum] = useState(1)
    const [timeOut, setTimeOut] = useState(false)
    const [stop, setStop] = useState(false)
    const [earned, setEarned] = useState(0)

  return (
    <div>
        <BrowserRouter>

          <NavBar />

          <Routes>

      <Route path="/" element={<Home 
          fname={fname}
          lname={lname}
          setFName={setFName}
          setLName={setLName}
          error={error}
          setError={setError}
         
      
      />} />

      <Route path="/quiz" element={<Quiz 
         fname={fname}
         lname={lname}
         data={data}
         questionNum={questionNum}
         setQuestionNum={setQuestionNum}
         setTimeOut={setTimeOut}
         setStop={setStop}
         earned={earned}
         setEarned={setEarned}
         stop={stop}
      
      />} />

      </Routes>
        
        </BrowserRouter>
    </div>
  );
}

export default App;
