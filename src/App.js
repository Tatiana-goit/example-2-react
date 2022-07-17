import { useState } from 'react'
// import Counter from './components/Counter'
// import ClassCounter from './components/ClassCounter'
// import PostItem from './components/PostItem'
import PostList from './components/PostList'
import MyButton from './components/UI/button/MyButton'

import './styles/App.css'

function App() {
  const [posts] = useState([
    { id: 1, title: 'Javascript', body: 'Description' },
    { id: 2, title: 'Javascript 2', body: 'Description' },
    { id: 3, title: 'Javascript 3', body: 'Description' },
  ])
  return (
    <div className="App">
      {/* <Counter />
      <ClassCounter /> */}
      <form>
        <input type="text" placeholder='Name' />
        <input type="text" placeholder='Describtion' />
        <MyButton>ADD</MyButton>
      </form>
      <PostList posts={posts} title="List JS"/>



    </div>
  )
}

export default App
