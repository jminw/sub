
import React from "react"

export class Todo extends React.Component {
    state = {
        todos: [
            { description: 'cry less', isDone: false },
            { description: 'stan loona', isDone: true },
            { description: 'Dont fail chemistry', isDone: true }
            
        ], 
        newToDoDescription: "",
    };


    handleOnChange = event => {
        const {name,value}=event.target;
        // name= "newToDoDescription"
        // value= "something to do"
        this.setState({
            [name]: value,
        });
    };
    
    /* handleToDoClick=(currentToDo)=>{
        if (currentToDo.isDone) {
            currentToDo.isDone=false;
        } else {
            currentToDo.isDone=true;
        }

        const updatedState = {
            todos:this.state.todos
        }
        this.setState(updatedState);
    }; */



    handleToDoClick = (currentToDo) => {
        currentToDo.isDone = !currentToDo.isDone;

        const updatedState = {
            todos: this.state.todos
        }
        this.setState(updatedState);
    };

    handleAddToDo = () => {
        // step 1 get todo description
        const newToDoDescription = this.state.newToDoDescription
        // step 2 create todo object form desc
        const newToDo = {
            description: newToDoDescription,
            isDone: false,
        }
        // step 3 update react component state
        const newToDos = [
            newToDo,
            ...this.state.todos,
            
        ];
        this.setState ({
            todos: newToDos,
        });
    }

    handleDelete = (currentToDo) => {
        const index= this.state.todos.indexOf(currentToDo)
        
        this.setState ({
            todos:this.state.todos.splice (index, 1)

        })
    }


    render() {
        return <div class="todo">
            <h1>To-Do List</h1>
            <div id="bar">
            <input 
                type="text" 
                value={this.state.newToDoDescription} 
                name="newToDoDescription" 
                id="newToDoDescription"
                onChange={this.handleOnChange}
                placeholder="Add to do..."
                />
            <button onClick={this.handleAddToDo} class="add">Add</button></div>
            <ul>
                {this.state.todos.map((a) => {
                    let completeClass = "";
                    if (a.isDone) {
                        completeClass = "complete"
                    }
                    return <li className={completeClass}
                        onClick={() => this.handleToDoClick(a)}>{a.description}
                        <button onClick={() => this.handleDelete(a)} class="delete">x</button>
                        </li>


                      /* if (a.isDone){
                          return <li className="complete">{a.description}</li>
                      } else {
                          return <li>{a.description}</li>
                      } */

                })}
            </ul>
            <p>Stick to it lol don't be a lazy ass</p>
        </div>
    }
}


