import React from 'react'
import { useContext } from 'react'
import {store} from '../App'

export default function User() {
    const[data,setData]=useContext(store)
    let sno=1;
  return (
    <>
    <div className="home">User</div>
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
                      data.map((element,index)=>{
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
    </>
  )
}