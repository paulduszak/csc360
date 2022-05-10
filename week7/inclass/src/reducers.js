function userReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
    case "REGISTER":
      return action.username;
    case "LOGOUT":
      return "";
    default:
      return state;
  }
}

function postReducer(state, action) {
  switch (action.type) {
    case "FETCH_POSTS":
      return action.posts;
    case "CREATE_POST":
      const newPost = {
        title: action.title,
        content: action.content,
        author: action.author,
        dateCreated: action.dateCreated,
        dateCompleted: action.dateCompleted,
        completed: action.completed,
        id: action.id,
      };
      return [newPost, ...state];
    case "TOGGLE_POST":
      return action.updatedPosts;
    case "DELETE_POST":
      // implement logic for deleting post
      return action.updatedPosts;
    default:
      return state;
  }
}

export default function appReducer(state, action) {
  return {
    user: userReducer(state.user, action),
    posts: postReducer(state.posts, action),
  };
}
