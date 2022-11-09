import jsonPlaceholder from '../apis/jsonPlaceholder'
// Action Creator
export const fetchPosts = async () => {
  const response = await jsonPlaceholder.get('/posts')
  return {
    type: 'FETCH_POSTS',
    payload: response,
  }
}
