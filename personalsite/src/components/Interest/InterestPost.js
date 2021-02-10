import React, { Component } from 'react';

class InterestPost extends Component {
    constructor(props) {
        super(props);
        this.state = {editing:false};
    }

    deletePost = () => {
        this.props.delete(this.props.id)
    }

    editTitle = () => {
        this.setState({editing: true})
    }

    submit = () => {
        var newName = {
            name:this.state.newTitle
        }
        this.props.save(this.props.id, newName);
        this.setState({editing: false})
    }

    save = (id, field) => {
        this.setState({interests:this.state.interests.update(id, (n) => { return Object.assign({}, n, field); })})
    }

    render() {
        var editBoxOrEditButton = null;
        if (this.state.editing){
            editBoxOrEditButton = (
                <div>
                    <input value={this.state.newTitle} onChange={this.changeNewTitle} />
                    <button onClick={this.submit}>submit</button>
                </div>
            )
        }
        else {
            editBoxOrEditButton = <button onClick={this.editTitle}>Edit Title</button>
        }

        return (
            <div>
                <p>{this.props.name}</p>
                <img src={this.props.interestURL} alt='Image' /> <br></br>
                <button onClick={this.deletePost}>Delete</button>
                {editBoxOrEditButton}
            </div>
        )
    }
    
}

export default InterestPost;
