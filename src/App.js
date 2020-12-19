import React from "react";
import firebase from  './config/firebase';
import './App.css';

// Todo App Using React

class App extends React.Component {
  
  constructor() {
    super()
    this.state = {
      // todos: ["Syed", "Hassan", "Hafeez"],
      // todos: [],
      todos: [{ title: "Syed", edit: false }, { title: "Hassan", edit: false }],
      value: ''
    }
  }
  // jb bhi "this" use karai ga to wahan hamasha arrow function use krta hain. Agr Simple Function use krna hai to bind krna parai ga. /
  add_item = () => {
    let obj = { title: this.state.value }
    //Firebase Database Connect Command
    firebase.database().ref('/').child("todos")
    .push(obj)
    // Two method but both are working same. Push array mai value ko picha se update krta hai or unshift aaga se.   
    // Using Spread state(...). Copy krta hai then kooma lga kr new value add bhi krskta hain. 
    // setState ==> State ko update krna Ka liye use krta hain. Aik se ziada state ko update krskta hain setState se.
    this.setState({
      // todos: [...this.state.todos, this.state.value],
      todos: [...this.state.todos, obj],
      value: ''
    })

    // Using Push function
    // // console.log(this.state.value);
    // this.state.todos.push(this.state.value)

    // {/* Jb bhi "this.setState" ka fuction call hota hai to render se hamara method dubara chlta hai or wo sari updated values uthata hai. */ }

    // this.setState({
    //   todos: this.state.todos
    // })
  }
  delete_todo = (index) => {
    // console.log(index);
    this.state.todos.splice(index, 1)
    this.setState({
      todos: this.state.todos
    })

  }
  edit_todo = (index) => {
    // console.log(index);

    // var updated_value = prompt("Enter Value");
    // this.state.todos[index] = updated_value;
    // this.setState({
    //   todos: this.state.todos
    // })

    this.state.todos[index].edit = true;
    this.setState({
      todos: this.state.todos
    })

  }
  handleChange = (e, index) => {
    this.state.todos[index].title = e.target.value;
      this.setState({
        todos: this.state.todos
      })

  }
  update=(index)=>{
    this.state.todos[index].edit = false;
    this.setState({
      todos: this.state.todos
    })
  }

  

  render() {
    // Ye destructuring hoti hai. Agr isa use krna hai to nicha jaha jaha "this.state" likha hai wo hatadai.

    // let {todos,value} = this.state;
    return (
      <div>
        {/* Jb bhi "this.setState" ka fuction call hota hai to render se hamara method dubara chlta hai or wo sari updated values uthata hai. */}

        {/* <input value={value} onChange={(e) => this.setState({ value: e.target.value })} type="text" placeholder="Enter Value" /> */}

        <input value={this.state.value} onChange={(e) => this.setState({ value: e.target.value })} type="text" placeholder="Enter Value" />
        <button onClick={this.add_item}>Add Item</button>

        <ul>
          {/* {todos.map((v,i)=>{
            return <li>

            </li>
          })} */}

          {this.state.todos.map((v, i) => {
            return <li key={i}>
              {/* {v.title} */}
              {v.edit ? <input value={v.title} type="text" onChange={(e)=>this.handleChange(e,i)} /> : v.title}
              {v.edit ?
                <button onClick={()=>this.update(i)}>Update</button> :
                <button onClick={() => this.edit_todo(i)}>Edit</button>
              }

              <button onClick={() => this.delete_todo(i)}>Delete</button>


            </li>
          }
          )
          }
        </ul>


      </div>
    )

  }

}

export default App;
