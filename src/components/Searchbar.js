import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

 
export default function Searchbar(props){
    let sno=1;
    //let count=1;
    //const changeCount=()=>{
        //count++;
        //alert(count)
    let[count,setCount]=useState(1)
    useEffect(()=> { console.log("Hello World") },[count])
    

    return(
        <>
        <div className='row'>
            <div className='col-md-8'>
            <button class="float-end button2">
               <i class="fa-solid fa-microphone"></i>
               </button>
               <button class="float-end button1">
               <i class="fa-solid fa-magnifying-glass"></i>
               </button>
            <input type='text' className='searchbox float-end' placeholder='Search..'/>
            </div>     
        </div>

    
        <table className='table table-bordered' style={{color:"white"}}>
            <thead>
                <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Roll</th>
                <th>Branch</th>
                </tr>
                </thead>
            <tbody>
                {
            props.data.map((element,index)=>{
               return(
                
                <tr>
                <td>{sno++}</td>
                <td>{element.name}</td>
                 <td>{element.roll}</td>
                 <td>{element.branch}</td>
                 </tr> 
               )
                    
            })
        }
      </tbody>
        </table>
        <h1 style={{color:"white",}}>{count}</h1>
        <button className='btn btn-danger'onClick={()=>setCount(count+1)}>Click</button>
        </>
    )
}