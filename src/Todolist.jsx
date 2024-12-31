import { useState } from 'react';
import { Footer } from './Footer.jsx'
export function Todolist(){
    const[list,setList]=useState([]);
    const[task,setTask]=useState("");
    function handleInput(event){
        setTask(event.target.value);
    }
    function updateList(){
        if(task.trim()!==""){
            setList((cur)=>([...cur,task]));
        }
        setTask("")
    }
    function deleteTask(index){
        setList((cur)=>(cur.filter((_,i)=>index!==i)))
    }
    function moveUp(index){
        setList(cur=>{
            let newList=[...cur];
            if(index>0){
              let temp=newList[index];
              newList[index]=newList[index-1];
              newList[index-1]=temp;  
            }
            return newList;
        })
    }
    function moveDown(i){
        setList((cur)=>{
        let newList=[...cur];
        if(i<list.length-1){
            let temp=newList[i];
            newList[i]=newList[i+1];
            newList[i+1]=temp;
        }
        return newList;
        })
    }
    const cont={
        background:"linear-gradient(#a2a8d3,#e7eaf6,#d59bf6)"
    }
    const tasks={
        background:"radial-gradient(#e7eaf6,#d59bf6,#a2a8d3)" 
    }
    return(
    <>
    <section className='flex flex-col justify-center items-center '>
        <div className='flex justify-center items-center mt-2' style={cont}>
        <input type="text" value={task} 
        placeholder="enter a task"
        onChange={handleInput} className='w-[200px]  sm:w-[1200px] rounded-md'/>
        <button onClick={updateList}className='p-0 sm:p-1 rounded-lg font-serif text-sm sm:text-lg
             text-white bg-blue-400 ml-2' >add</button></div>
        {list.map((v,i)=>(
            <div key={i+1} className='flex justify-around items-center w-[250px] sm:w-[1000px] text-sm sm:text-xl mt-3'
            style={tasks} >
                <input type="checkbox" className=' scale-[1] sm:scale-[2] m-4 '></input>
                <p className='font-serif text-purple-800'>{v}</p>
            <button onClick={()=>moveDown(i)} className='p-0 sm:p-1 rounded-md font-serif text-sm sm:text-lg
             text-white bg-purple-300 '>🔽</button>
            <button onClick={()=>moveUp(i)} className='p-0 sm:p-1 rounded-md font-serif text-sm sm:text-lg
             text-white bg-purple-300 '>⬆️</button>
            <button onClick={()=>deleteTask(i)} className='p-0 sm:p-1 rounded-md font-serif text-sm sm:text-lg
             text-white bg-purple-300 '>⛔</button>
            </div>
        ))}
    </section>
    <Footer/>
    </>)
}