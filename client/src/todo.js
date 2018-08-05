
import React from "react"

export class Todo extends React.Component {
    state = {
        todos: [
            { description: 'Despacito', isDone: false },
            { description: 'All Star', isDone: true },
            
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


    render() {
        return <div class="todo">
            <h1>Alexa Play:</h1>
            <label htmlFor="newToDoDescription" >Add text</label>
            <input 
                type="text" 
                value={this.state.newToDoDescription} 
                name="newToDoDescription" 
                id="newToDoDescription"
                onChange={this.handleOnChange}
                />
            <button onClick={this.handleAddToDo}>Add</button>
            <ul>
                {this.state.todos.map((a) => {
                    let completeClass = "";
                    if (a.isDone) {
                        completeClass = "complete"
                    }
                    return <li className={completeClass}
                        onClick={() => this.handleToDoClick(a)}>{a.description}</li>


                      /* if (a.isDone){
                          return <li className="complete">{a.description}</li>
                      } else {
                          return <li>{a.description}</li>
                      } */

                })}
            </ul>
        </div>
    }
}


