import './App.css';
import './css/bootstrap.css'
import Sidebar from './components/Sidebar';
import Searchbar from './components/Searchbar';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './components/Home'
import Shorts from './components/Shorts'
import User from './components/User'
import Products from './components/Product'
import { createContext, useState } from 'react';


export const store=createContext();


function App() {
  let StudentData=[
    {
      name:"Tester1",
      roll:"120",
      branch:"civil",
    },
    {
      name:"Tester2",
      roll:"121",
      branch:"ECE",
    },
    {
      name:"Tester3",
      roll:"122",
      branch:"MECH",
    },
    {
      name:"Tester4",
      roll:"123",
      branch:"CSE",
    },
  ]
  const [data,setData]=useState(StudentData)
 
  return (
      <>
      <BrowserRouter>
      <store.Provider value={[data,setData]}>
    <div className='container-fluid'>
    <div className='row'>
      <Sidebar />
      <div className='col-md-10'>
        <Searchbar data={StudentData}/>
        <Routes>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/Shorts' element={<Shorts/>}/>
          <Route path='/User' element={<User/>}/>
          <Route path='/Products' element={<Products/>}/>
        </Routes>
      </div>
    </div>
    </div>
    </store.Provider>
    </BrowserRouter>
    </>
   
    
   
  );
}
export default App;