'use client'
import Link from 'next/link'
import React from 'react'

import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useBreakpointValue,
  Button,
  useDisclosure
} from "@chakra-ui/react"



const Navbar = () => {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const isDrawerSidebar = useBreakpointValue({ base: true, md: false });


  return (
    <>
      <Box display={{ lg: "flex" }} flexBasis={{ lg: "auto" }}>
      {isDrawerSidebar ? (
        <>
          <Button onClick={onOpen}>Open Menu</Button>
          <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay>
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Menu</DrawerHeader>
                <DrawerBody>
                  <Link href='/Explore'>Explore</Link>
                  <Link href='/Post'>Create Post</Link>
                </DrawerBody>
              </DrawerContent>
            </DrawerOverlay>
          </Drawer>
        </>
      ) : (
        <nav className='flex flex-row justify-evenly w-screen bg-white bg-opacity-80 px-12 shadow-lg py-4'>
          <Link href='/Explore'>Explore</Link>
          <Link href='/Post'>Create Post</Link>
        </nav>
      )}
    </Box>
    </>
  )
}

export default Navbar