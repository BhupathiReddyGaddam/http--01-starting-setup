import React, { Component } from 'react';
//import axios from '../../axios/axios';
import Posts from './Posts/Posts';
import {Route, NavLink, Switch} from 'react-router-dom';

//import Post from '../../components/Post/Post';
//import FullPost from './FullPost/FullPost';
//import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import NewPost from './NewPost/NewPost';
//import FullPost from './FullPost/FullPost';

class Blog extends Component {
    render () {
        return (
            <div className="Blog">
                <header>
                    <ul>
                        <li><NavLink to='/posts/' 
                        exact 
                        activeClassName="my-active"
                        activeStyle={{
                            color:'#fa923f',
                            textDecoration: 'underline'
                        }}>Posts</NavLink></li>
                        <li><NavLink to={{
                            pathname: '/new-posts',
                            hash: '#submit',
                            search: '?quick-submit=true'
                        }}>New Post</NavLink></li>
                    </ul>
                </header>
                {/* <Route path='/' exact render={() => <h1>Home</h1>}/>
                <Route path='/' exact render={() => <h1>Home1</h1>}/> */}
                <Switch> 
                    <Route path='/new-posts' component={NewPost}/>
                    <Route path='/posts/' component={Posts}/>
                </Switch>
            </div>
        );
    }
}

export default Blog;