import React from 'react';
import "./index.css"; 
import Hello from './Hello';

function App({name, age}) {
  /*
  let user = {name: "Rehan Khan", age: 33};

  let {name, age} = user;
  
  let updatedAge = age - 20;
  let name = user.name;
  let age = user.age;
*/
  return <div>
          Hello from App.js updated {name} Age = {age}
          <br/>
          <Hello firstName={name} ></Hello>
       </div> 
}

export default App;
