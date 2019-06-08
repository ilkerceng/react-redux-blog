import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ValidateEmailAlertContainer from '../containers/ValidateEmailAlertContainer';
import PostsList from '../containers/PostsListContainer';

import PostsNew from './ValidateEmail';
import PostsShow from './Profile';

class PostsIndex extends Component {
    componentDidMount() {
        console.log("component did mount");
    }


    render() {
        return (
            <div>
                I am Posts Index
                <ValidateEmailAlertContainer />
                <PostsList />
                <Route path="/posts/new" component={PostsNew} />
                <Route path="/posts/:id" component={PostsShow} />
            </div>
        );
    }
}


export default PostsIndex;
