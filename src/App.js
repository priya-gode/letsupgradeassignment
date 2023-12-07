
import './App.css';
import Header from './Header';
import { useState } from 'react';

import Products from './Products';
function App() {
   let [name,setName]=useState();
   let [age,setAge]=useState();
  function Do(data)
  {
    console.log("hello man"+data)
  }
  let countries=[
    {id:1,name:"India",capital:"Delhi"},
    {id:2,name:"South Afric",capital:"Cape Town"},
    {id:3,name:"New zealand",capital:"wellington"}
    
  ]
  return (
    <div className="App">
      {
        countries.map((country)=>
        {
          return(
            <div className='data' key={country.id}>
              <h3>{country.name}</h3>
              <p>{country.capital}</p>
              </div>
          )
        })
      }
      {/* <div className='data'>
        <h2>India</h2>
        <p>Delhi</p>

      </div>
      <div className='data'>
        <h2>Australia</h2>
        <p>Canberra</p>

      </div> */}
      {/* <h1>Name</h1>
      <h2>{name}</h2> */}
     <input type='text' onChange={(event)=>
    setName(event.target.value) }placeholder='Enter name'></input>
    <input type='text' onChange={(event)=>
    setAge(event.target.value)} placeholder='Enter age'></input>
    <button onClick={()=>
    console.log(name,age)}>Submit</button>
     <Header/>
     <Products/>
     <button className='btn' onClick={()=>{
      Do("yesh")
     }}>click</button>
    </div>
  );
}

export default App;
