import React, { Component } from 'react';
import axios from '../../../axios/axios';

import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null
    }

    componentDidMount() {
        if(this.props.match.params.id) {
            if( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== +this.props.id)){
                axios.get('/posts/1' + this.props.match.params.id)
                .then(response => {
                    //console.log(response.data);
                    this.setState({loadedPost: response.data});
                });
            }
        }
    }

    deletePostHandler() {
        axios.delete('/posts/1')
            .then(response => {
                console.log(response);
            });
    }
    render (props) {
        let post = <p style={{textAlign:"center"}}>Please select a Post!</p>;
        if(this.props.id) {
            post = <p style={{textAlign:"center"}}>Loading...</p>
        }
        if(this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button onClick={this.deletePostHandler} className="Delete">Delete</button>
                    </div>
                </div>
    
            );
        }
        return post;
    }
}

export default FullPost;