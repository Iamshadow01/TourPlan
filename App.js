import { useState } from 'react';
import './App.css';
import Container from './components/Container';
import data from './components/data'
function App() {
  const [tour,setTour] = useState(data);
  function removecity(id){
    const newtour = tour.filter(tour=> tour.id!==id);
    setTour(newtour);
  }
  function refreshed(){
    setTour(data);
  }
  if(tour.length!==0){
    return (
      <div className="flex flex-col gap-4 items-center">
        <div className="font-bold m-[6vh] border-dashed border-[7px] border-blue-500 text-5xl py-[1vh] px-[5vw]  rounded-[20px]">PLAN YOUR TOUR</div>
        <Container tour = {tour} removecity={removecity}/>
      </div>
    );
  }
  else{
    return(
      <div className="flex flex-col justify-center items-center w-screen h-screen">
        <div className="font-bold text-xl">No More Tours</div>
        <button onClick={refreshed} className="mt-4 py-[10px] font-semibold px-[80px] border border-white bg-gray-200 rounded-sm cursor-pointer transition-all duration-200 hover:bg-gray-100">Refresh</button>
      </div>
    )
  }
  
} 
export default App;


