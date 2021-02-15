import './App.css';
import React , { useState } from 'react';
import Person from "./Person/Person";

const App = props => {
  const [personState,setPersonState] = useState({
    persons:[
      {answer:'yes'},
      {answer:'no'}

    ],
    otherObj:'other object'
  });

      const swithNameHandler = ()=>{
        setPersonState({
          persons:[
            {answer:'yes'},
            {answer:'no'} 
          ],
          otherObj:personState.persons.otherObj
        });
      };


    return (
    <div className="App">  
    <h1>hi</h1>
    <p>ngoni</p>
    <button onClick={swithNameHandler}>Swicth name</button>
    <Person answer={personState.persons[0].answer}/>
    <Person  answer={personState.persons[1].answer}>yep child element</Person>
    </div>
    );
    // return React.createElement('div',{className:'App'},React.createElement('p',null,'hi'),React.createElement('small',null,'echo'));


};
export default App  ;
