import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts';

class App extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    console.log("props :", this.props);
    return (
      <div>
        Welcome to Codeial
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    posts: state.posts,
  };
}
export default connect(mapStateToProps)(App);