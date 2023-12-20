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
  useDisclosure,
} from "@chakra-ui/react"

const Navbar = () => {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const isDrawerSidebar = useBreakpointValue({ base: true, md: false });


  return (
    <>
      <Box display={{ lg: "flex" }} flexBasis={{ lg: "auto" }}>
      {isDrawerSidebar ? (
        <>
          <button onClick={onOpen}>Open Menu</button>
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
        <nav className='flex flex-row justify-between'>
          <Link href='/Explore'>Explore</Link>
          <Link href='/Post'>Create Post</Link>
        </nav>
      )}
    </Box>
    </>
  )
}

export default Navbar