import { useState } from 'react'
// import Counter from './components/Counter'
// import ClassCounter from './components/ClassCounter'
// import PostItem from './components/PostItem'
import PostList from './components/PostList'
import PostForm from './components/PostForm'

import './styles/App.css'

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description' },
    { id: 2, title: 'Javascript 2', body: 'Description' },
    { id: 3, title: 'Javascript 3', body: 'Description' },
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter((el) => el.id !== post.id))
  }

  return (
    <div className="App">
      {/* <Counter />
      <ClassCounter /> */}
      <PostForm create={createPost} />
      {posts.length !== 0 ? (
        <PostList remove={removePost} posts={posts} title="List JS" />
      ) : (
        <h1 style={{ textAlign: 'center' }}>Постов нет!</h1>
      )}
    </div>
  )
}

export default App
