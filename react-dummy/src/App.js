import './App.css';
import React, {Component} from 'react';
import Person from "./Person/Person";

// function App() {
//   return (
//     <div className="App">
//      <h1>hi</h1>
//      <p>ngoni</p>
//     </div>
//   );
// }
class App extends Component{
  state= {
    persons:[
      {id:'1',name:'Kuku', age:24},
      {id:'2',name:'Raphel', age:29},
      {id:'3',name:'Ngoni', age:31},
    ],
    showPersons:false
  };

  swithNameHandler =  (args)=>{
    this.setState(
      
      {
        persons:[
          {id:'1',name:args, age:24},
          {id:'2',name:'Raphel', age:29},
          {id:'3',name:'Ngoni', age:31},
        ]
      }
    );
    console.log('warup');
  }

  nameChangeHandler = ( id,event )=>{
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons]
    persons[personIndex] = person
    this.setState({
      persons:persons
    })

  }

deletePersonhnadele =(personIndex)=>{
  const persons =[...this.state.persons];
  persons.splice(personIndex,1);
  this.setState(
    {
      persons:persons
    }
  );

}

  togglePersonsHandler =  ()=>{
    const doesShow = this.state.showPersons;
    this.setState( 
      {
        showPersons : ! doesShow
  
      }
    );
    console.log('warup');
  }
  render(){ 
    const style ={
      border:'1px solid red',
      padding:'1em',
      backgroundColor:'green',
      font:'inherit',
      color:'white',
    } 

    let persons = null;
    
    if(this.state.showPersons){
     persons =(
      <div>{
        this.state.persons.map((person, index) =>{
          return <Person 
          name = {person.name} 
          age ={person.age}
          click ={this.deletePersonhnadele.bind(this,index)}
          key={person.id}
         change ={this.nameChangeHandler.bind(this, person.id)}
          />
          
        })
        }
    </div>
     );
     style.backgroundColor ='red';

  }

    let classes = [];

    if (this.state.persons.length <= 2){
      classes.push('red');
    }
    if (this.state.persons.length <= 1){
      classes.push('bold');
    }


    return (

    <div className="App"> 
    <h1>My First React JS App</h1>
     <p className={classes.join(' ')}> cool</p>
    <button onClick={this.togglePersonsHandler} style={style}>Swicth name</button>
    {persons}
    </div>

    );

    // return React.createElement('div',{className:'App'},React.createElement('p',null,'hi'),React.createElement('small',null,'echo'));
  }

}
export default App;
