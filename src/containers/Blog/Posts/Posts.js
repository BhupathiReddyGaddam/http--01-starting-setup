import React, {Component} from 'react';
import axios from '../../../axios/axios';
import Post from '../../../components/Post/Post';
import './Posts.css';
import { Link } from 'react-router-dom';
import FullPost from '../FullPost/FullPost';
import { Route } from 'react-router-dom';

class Posts extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        axios.get('/posts')
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
                console.log(error);
                //this.setState({errorMessage: error});
            });
    }

    displayPostHandler(id) {
        this.setState({selectedPost: id});
    }

    render() {
        let posts = <p style={{textAlign: "center"}}>Something went wrong</p>
        if(!this.state.errorMessage) {
             posts = this.state.posts.map(post => {
                return (
                <Link to={'/posts/' + post.id} key={post.id}>
                    <Post  
                    title={post.title} 
                    author={post.author} 
                    clicked={() => this.displayPostHandler(post.id)}/>
                </Link>)
            });
        }
        return(
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + '/:id'} exact component={FullPost}/>
            </div>
        );
    }
}
export default Posts;
