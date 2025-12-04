import { HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/logo.webp'

const navBar = () => {
  return (
    <HStack>
        <Image boxSize={'60px'} src={logo} />
        <Text>NavBar</Text> 
    </HStack>
  )
}

export default navBar
