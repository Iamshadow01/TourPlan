import { useState } from "react";

function Cards(props){
    const[readmore,setReadmore] = useState(false);
    const description = readmore ? props.info:`${props.info.substring(0,200)}...`;
    function readhandler(){
        setReadmore(!readmore);
    }
    return(
        <div className="border-2 w-[300px] h-[max-content] m-4 p-4 rounded-lg flex flex-col gap-2 shadow-[0px_3px_8px_rgba(0,0,0,0.24)] transition-all duration-200 hover:scale-105">
            <img src={props.image} alt="" className="w-[280px] aspect-[1/1] rounded"></img>
            <div className="font-bold mt-2 gap-1 flex flex-col">
                <p className="text-green-500 text-[1.3rem]">₹ {props.price}</p> 
                <p className="text-2xl">{props.name}</p>
            </div>
            <p className="text-sm">
                {description}
                <span onClick={readhandler} className="text-blue-500 cursor-pointer">
                    {readmore? `Show Less` : `Read More`}
                </span>
            </p>
            <button onClick={()=> props.removecity(props.id)} className="self-center w-3/4 border border-black bg-red-300 rounded-md mt-2 transition-all duration-200 text-sm p-1 hover:bg-red-500" >Not Interested</button>
        </div>
    )
}
export default Cards;