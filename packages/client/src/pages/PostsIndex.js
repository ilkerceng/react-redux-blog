import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import ValidateEmailAlertContainer from '../containers/ValidateEmailAlertContainer';
import PostsList from '../containers/PostsListContainer';

class PostsIndex extends Component {
    componentDidMount() {
        console.log("component did mount");
    }

    render() {
        return (
            <div>
                <div>
                    {"I am Posts Index"}
                </div>
                <ValidateEmailAlertContainer />
                <PostsList />
            </div>
        );
    }
}


export default PostsIndex;
