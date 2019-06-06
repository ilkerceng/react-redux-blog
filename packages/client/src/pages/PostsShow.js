import React, { Component } from 'react';
import PropTypes from 'prop-types'; // ES6
import { connect } from 'react-redux';
import { deletePost } from '../actions/posts';
import Header from '../containers/HeaderContainer';
import PostDetailsContainer from '../containers/PostDetailsContainer';

class PostsShow extends Component {

  onDeleteClick() {
    this.props.deletePost(this.props.params.id)
      .then(() => { this.context.router.push('/'); });
  }

  render() {
    return (
      <div className='container'>
        <Header type="posts_show" postId={this.props.params.id}/>
        <PostDetailsContainer id={this.props.params.id}/>
      </div>
    );
  }
}

// PostsShow.propTypes = {
//   router: PropTypes.object
// };

export default PostsShow;
