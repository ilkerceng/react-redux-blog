import React, { Component } from 'react';
import PropTypes from 'prop-types'; // ES6

class PostDetails extends Component {

    componentWillUnmount() {
        //Important! If your component is navigating based on some global state(from say componentWillReceiveProps)
        //always reset that global state back to null when you REMOUNT
        this.props.resetMe();
    }

    componentDidMount() {
        this.props.fetchPost(this.props.postId);
    }

    render() {
        const { post, loading, error } = this.props.activePost;
        if (loading) {
            return <div className="container">Loading...</div>;
        } else if (error) {
            return <div className="alert alert-danger">{error.message}</div>
        } else if (!post) {
            return <span />
        }

        return (
            <div className="container">
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        );
    }
}

// PostDetails.propTypes = {
//     router: PropTypes.object
// };

export default PostDetails;
