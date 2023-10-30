
import './App.css';
import 'react-big-scheduler/lib/css/style.css'
import Schedular from './ReactBigSchedulerDemoApp';
import Navbar from './navbar';
//import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Layout from "./Layout";
//import SampleTaker from './SampleTaker';
import SampleTaker from './SampleTakerOne';
import Lineman from './Lineman'; 
import { DateProvider } from './DateProvider';

function App() {
  return (
    <DateProvider>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Schedular />}/>
        <Route path="/schedular" element={<Schedular />} />
        <Route path="/SampleTaker" element={<SampleTaker />} />
        <Route path="/Lineman" element={<Lineman />} />
      </Routes>

     
    
    </div>
    </DateProvider>


  );
}

export default App;

