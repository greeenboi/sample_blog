import React from 'react'
import BlogPosts from '../BlogPosts'
import Navbar from '../Navbar'

function page() {
  return (
    <main className=' w-screen h-auto'>
      <Navbar />
      <BlogPosts />
    </main>
  )
}

export default page