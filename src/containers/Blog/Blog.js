import React, { Component } from 'react';
import axios from '../../axios/axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        selectedPost: null,
        errorMessage: false
    }
    componentDidMount() {
        axios.get('/posts/')
            .then(response => {
                const posts = response.data.slice(0, 5);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author:'Maximilliam'
                    }
                });
                this.setState({posts: updatedPosts})
                //console.log(response);
            })
            .catch(error => {
                //console.log(error);
                this.setState({errorMessage: error});
            });
    }

    displayPostHandler(id) {
        this.setState({selectedPost: id});
    }
    render () {
        let posts = <p style={{textAlign: "center"}}>Something went wrong</p>
        if(!this.state.errorMessage) {
             posts = this.state.posts.map(post => {
                return <Post 
                key={post.id} 
                title={post.title} 
                author={post.author} 
                clicked={() => this.displayPostHandler(post.id)}/>
            });
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPost}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;