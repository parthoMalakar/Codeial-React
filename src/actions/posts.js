import { UPDATE_POSTS } from './actionsTypes';
import { APIUrls } from '../helpers/urls'

export function fetchPosts() {
  return (dispatch) => {
    const url = APIUrls.fetchPosts();
    fetch(url)
      .then((response) => {
        console.log('response', response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        dispatch(updatePosts(data.data.posts));
      });
  };
}

export function updatePosts(posts) {
    return {
       type: UPDATE_POSTS,
       posts
    }
}
