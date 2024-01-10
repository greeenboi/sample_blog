'use client'

import React, { useEffect, useState } from 'react'
import { supabase } from './supabase.config'
import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, IconButton, Image, Text } from '@chakra-ui/react'
import { BiLike, BiShare } from 'react-icons/bi'
import { useRouter } from 'next/navigation'
import { FaCircleInfo } from "react-icons/fa6";

export const fetchCache = 'force-no-store'

const BlogPosts = () => {

  const [BlogPosts, setBlogPosts] = useState([])
  const [loading, setLoading] = useState(true)

  const Router = useRouter()

  useEffect(() => {
    const fetchPosts = async () => {
      let { data: posts, error } = await supabase
        .from('posts')
        .select('*')
      console.log(posts)
      if(error) console.log(error) 
      else setBlogPosts(posts) && console.log(posts)
    }
    fetchPosts()
  
  }, [])

  if(!BlogPosts) return <div>Loading...</div>
  if(BlogPosts.length === 0) return <div>No posts</div>

  const handlePostNavigate = (id) => {
      Router.push(`/Explore/${id}`)
  }

  return (
    <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-fit gap-4 h-fit justify-evenly md: mx-6 my-4'>
      {BlogPosts.map(post => (
        <Card maxW='md' key={post.id}  >
        <CardHeader>
          <Flex spacing='4'>
            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
              <Avatar name='Segun Adebayo' src='https://bit.ly/null' />
      
              <Box>
                <Heading size='sm'>Author</Heading>
                {/* <Text>Creator, Chakra UI</Text> */}
              </Box>
            </Flex>
            <IconButton
              variant='solid'
              colorScheme='gray'
              aria-label='See More'
              icon={<FaCircleInfo className=' text-gray-600' />}
              className=' hover:cursor-pointer' 
              onClick={() => handlePostNavigate(post.id)}
            />
          </Flex>
        </CardHeader>
        <Image
          objectFit='cover'
          src={post.banner_url}
          alt={post.title}
        />
        <CardBody >
          <Heading size='md'>{post.title}</Heading>
          <Text>
          {post.content}
          </Text>
        </CardBody>
      
        <CardFooter
          justify='space-between'
          flexWrap='wrap'
          sx={{
            '& > button': {
              minW: '136px',
            },
          }}
        >
          <Button flex='1' variant='ghost' leftIcon={<BiLike />}>
            {post.votes}
          </Button>
          <Button flex='1' variant='ghost' leftIcon={<BiShare />}>
            Share
          </Button>
        </CardFooter>
      </Card>
      ))}
    </div>
  )
}

export default BlogPosts