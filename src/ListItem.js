import React from 'react';

class List_Item extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditing: false,
            task: this.props.task,
            finshed: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.finishTask = this.finishTask.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({isEditing: !this.state.isEditing});
    }

    handleSubmit (evt) {
        evt.preventDefault();
        console.log('submitting')

        this.setState({isEditing:false});
    }

    handleChange (evt) {
        evt.preventDefault();
        this.setState({task: evt.target.value});
    }

    finishTask (evt) {
        evt.preventDefault();
        this.setState({finished: !this.state.finished});
        console.log('finished');
    }

    render() {
        return (
            <li className="list-item" onClick={this.finishTask}>
                <div className="list-item-text" style={this.state.finished ? {textDecoration:'line-through'} : {textDecoration:'none'}}>
                    {this.state.isEditing === false && this.state.task}
                    {this.state.isEditing && 
                    <form className="edit-form" onSubmit={this.handleSubmit}>
                        <input className="edit-input" onChange={this.handleChange} value={this.state.task} type="text"></input>
                    </form>}
                </div>
                <div className="list-item-controls">
                        <button onClick={()=>{this.handleClick()}}
                             className='edit-button'>Edit</button>
                        <button onClick={()=>{this.props.deleteItem(this.props.id)}}className="delete-button">Delete</button>
                </div>
            </li>
        )
    }
}

export default List_Item;