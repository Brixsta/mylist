import React from 'react';
import ListItem from './ListItem';


class List extends React.Component {

    render () {
        const todos = this.props.todos.map((item)=>{
            return (
                <ListItem 
                task={item.task}
                key={item.id}
                id={item.id}
                deleteItem={this.props.deleteItem} />
            )
        })
        return (
            <ul className="list" style={this.props.todos.length === 0 ? {border: 0} : null}>
                {todos}
            </ul>
        )
    }
}

export default List;