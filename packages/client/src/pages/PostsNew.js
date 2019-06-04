import React, { Component } from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import PostFormContainer from '../containers/PostFormContainer';

class PostsNew extends Component {
  render() {
    return (
      <div>
        <HeaderContainer type="posts_new"/>
        <PostFormContainer />
      </div>
    );
  }
}


export default PostsNew;
