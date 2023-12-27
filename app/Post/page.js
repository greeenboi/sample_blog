'use client'
import React, { useState } from 'react'
import { supabase } from '../supabase.config'
import { Button, Input, Textarea } from '@chakra-ui/react'

function page() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [ banner_url, setBannerUrl ] = useState('')
  const [ tags, setTags ] = useState([''])
  const [files, setFiles] = useState(null)
  const [loading, setLoading] = useState(false)

  const uploadPost = async () => {
  setLoading(true)
  const filename = Math.random().toString().substring(2) + '.png';
  const { data, error: storageError } = await supabase
  .storage
  .from('banner')
  .upload(filename, files, {
    cacheControl: '3600',
    upsert: false
  })
  if (storageError) alert(storageError.message)

  const { data: publicUrl } = supabase
  .storage
  .from('public-bucket')
  .getPublicUrl(filename)
  setBannerUrl(publicUrl.publicUrl, async () => {
    console.log(publicUrl.publicUrl)
  
    const { error: uploadError } = await supabase
      .from('posts')
      .insert({
        title: title,
        tags: tags,
        content: content,
        banner_url: banner_url,
      })
    if (uploadError) alert(uploadError.message)
    else alert('Post created!') && setLoading(false)
  })
  }

  return (
    <main className='w-screen h-auto flex flex-col justify-center items-center'>
      
      <section className=''>
        <h1 className='text-4xl font-bold text-center'>Create a new post</h1>
        <form className='flex flex-col justify-center items-center'>
          <Input
            className='w-1/2 h-10 border-2 border-gray-400 rounded-md p-2 m-2'
            type='text'
            placeholder='Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            className='w-1/2 h-10 border-2 border-gray-400 rounded-md p-2 m-2'
            type='text'
            placeholder='Tags'
            value={tags.join(', ')}
            onChange={(e) => setTags(e.target.value.split(',').map(tag => tag.trim()))}
          />
          <Textarea
            className='w-1/2 h-40 border-2 border-gray-400 rounded-md p-2 m-2'
            type='text'
            placeholder='Content'
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <Input
            className='w-1/2 h-10 border-2 border-gray-400 rounded-md p-2 m-2'
            type='file'
            accept='image/*'
            onChange={(e) => setFiles(e.target.files[0])}
          />
          <Button
            className='w-1/2 h-10 border-2 border-gray-400 rounded-md p-2 m-2'
            type='button'
            onClick={uploadPost}
          >
            Create Post
          </Button>
        </form>
      </section>
    </main>
  )
}

export default page