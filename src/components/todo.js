import React, { Component } from 'react';
import './todo.css';
import Delete from './delete';


class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
          items:[],
        };       
          } 
     handleSubmit=(e)=>{
                    e.preventDefault();
                    const items=e.target.items.value;

                    let newItems = this.state.items
                    newItems.push(items)
                   
                    console.log(items);
                    this.setState({
                    items : newItems,
                });
}
clearall=()=>{
    this.setState({
        items:[],

    })  
  }
  
  delete=(index)=>{
    const newItems = this.state.items.filter((element,id) => {
        if (id !== index) {
            return element;
        }
    });
    this.setState({
      items: newItems
});
};



    render() {
    return (
          <div className="header">
          
            <form onSubmit={this.handleSubmit}>
            <input name="items"/>
            <button type="submit">Add</button> 
            </form>
            {this.state.items.map((item,index)=><div className="item">{item}
             <span onClick={()=>this.delete(index)}><i class="far fa-trash-alt"></i></span>
            </div>)}
            <button className="clearall" onClick={this.clearall}>Clear All</button>
            <Delete info={this.id}/>
            </div>

    );
  }
}

export default Todo;
