'use client'

import React, { useEffect, useState } from 'react'
import { supabase } from './supabase.config'

export const fetchCache = 'force-no-store'

const BlogPosts = () => {

  const [BlogPosts, setBlogPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      let { data: posts, error } = await supabase
        .from('posts')
        .select()
      console.log(posts)
      if(error) console.log(error) 
      else setBlogPosts(posts) && console.log(posts)
    }
    fetchPosts()
  
  }, [])

  if(!BlogPosts) return <div>Loading...</div>
  if(BlogPosts.length === 0) return <div>No posts</div>

  return (
    <div>
      {BlogPosts.map(post => (
        <div key={post.id}>
          <img src={post.banner_url} alt={post.title} />
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <p>{post.votes}</p>
        </div>
      ))}
    </div>
  )
}

export default BlogPosts