import { useState, useEffect } from 'react'
import '../styles/App.css'
import PostList from '../components/PostList'
import PostForm from '../components/PostForm'
import PostFilter from '../components/PostFilter'
import MyModal from '../components/UI/myModal/MyModal'
import MyButton from '../components/UI/button/MyButton'
import Loader from '../components/UI/loader/Loader'
import PostService from '../API/PostService'
import { useFetching } from '../components/hooks/useFetching'
import { getPageCount} from '../utils/pages'
import { usePosts } from '../components/hooks/usePosts'
import Pagination from '../components/UI/pagination/Pagination'

function Posts() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [limit,] = useState(10)
  const [page, setPage] = useState(1)
  const sortedAndSearcedPosts = usePosts(posts, filter.sort, filter.query)



  const [fetchPosts, isPostsLoading, postError] = useFetching(
    async (limit,page) => {
      const response = await PostService.getAll(limit, page)
      // setPosts([...posts, ...response.data])
      setPosts(response.data)
      const totalCount = response.headers['x-total-count']
      setTotalPages(getPageCount(totalCount, limit))
    },
  )

  useEffect(() => {
    fetchPosts(limit,page)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter((el) => el.id !== post.id))
  }


  const changePage = (page) => {
    setPage(page)
    fetchPosts(limit,page)
  }

  return (
    <div className="App">
      <MyButton onClick={fetchPosts} style={{ marginTop: 20, marginRight: 30 }}>
        GET POSTS
      </MyButton>
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Создать пользователя
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {postError && <h1>Произошла ошибка {postError}</h1>}
      {isPostsLoading ? (
        <div className="loader">
          {' '}
          <Loader />
        </div>
      ) : (
        <PostList
          remove={removePost}
          posts={sortedAndSearcedPosts}
          title="List JS"
        />
      )}
      <Pagination 
      page={page}
      totalPages={totalPages}
      changePage={changePage}
      />
      
    </div>
  )
}

export default Posts
