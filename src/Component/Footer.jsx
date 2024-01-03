import {
    Box,
    Button,
    Heading,
    HStack,
    Input,
    Stack,
    VStack,
  } from '@chakra-ui/react';
  import React from 'react';
  import { AiOutlineSend } from 'react-icons/ai';
  

const Footer = () => {
  return (
    <Box bg={'blackAlpha.600'} minH={'40'} p="16" color={'white'}>
      <Stack direction={['column' , 'row']}> 
       <Heading
        size="md"
        position={'relative'}
        top={'4'}
        left={'2'}
        textTransform={'uppercase'}
        letterSpacing={'4'}
        textAlign={['center', 'left']}
       >CODELASH COMPANY</Heading>
       <VStack alignItems={'stretch'} w={'full'} px={'4'}>
        <HStack borderBottom={'2px solid white'} py="2">
            <Input
              placeholder="Enter Email Here..."
              border={'none'}
              borderRadius="none"
              outline={'none'}
              focusBorderColor="none"
            />
            <Button
              p={'0'}
              colorScheme={'purple'}
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={20} />
            </Button>
          </HStack>
       </VStack>
      </Stack>
        </Box>
  )
}

export default Footer