import React from 'react'
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'

function Error404() {
  return (
    <div>
        <Alert
            status='error'
            variant='subtle'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            textAlign='center'
            height='200px'
            w={"100%"}
          >
          <AlertIcon boxSize='40px' mr={0} />
          <AlertTitle mt={4} mb={1} fontSize="30">
            Eror 404!
          </AlertTitle>
          <AlertDescription maxWidth='sm'>
            This page was not found...
          </AlertDescription>
        </Alert>
    </div>
  )
}

export default Error404