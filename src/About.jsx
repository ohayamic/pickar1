import React from 'react'

const About = ({todos}) => {

    console.log(todos)
    const DisplayTodos = todos.length? 
    (todos.map(todo =>{
        return(
            <div className="container" key={todo.id}>
            <div className="row">
                <div className="col-sm">
                    {todo.id}
                </div>
                <div className="col-sm">
                    {todo.brand}
                </div>
                <div className="col-sm">
                    {todo.color}
                </div>
            </div>
        </div>
            )
    })) : 
    
    (<div> Hello</div>)
    
        return (
            <div>
                {DisplayTodos }
            </div>
        )
    
}

export default About;