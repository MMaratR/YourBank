import React from 'react'
import post from '../styles/post.css'
// import { Link } from 'react-router-dom'

export const PostsPage = () => {
  const [posts, setPosts] = React.useState([])
  React.useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('http://localhost:4444/posts')
      const data = await response.json()
      setPosts(data)
    }
    fetchPosts()
  }, [])
  return <div class='posts' style={post}>
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          {/* <Link to={`/posts/${post.id}`}> */}
          <h2>{post.title}</h2>
          {/* </Link> */}
          <img src={post.image} alt='post.image' />
          <p>{post.text}</p>
        </li>
      ))}
    </ul>
  </div >
}