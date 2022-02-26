import React from 'react'
import { useAuth } from '../../../context/AuthContext'
import { Flex, AlertIcon, AlertTitle, AlertDescription,  Text, Alert, Box, Button } from '@chakra-ui/react';
import "../../../App.css";
import { useNavigate  } from "react-router-dom";

function Profile() {

    const { user, logout} = useAuth();
    const navigate = useNavigate()

    const handleLogout = () => {
        logout(() => {
            navigate("/products")
        });
    }

  return (
    <div className='profile'>
        {/* <Text fontSize={30}>Profile:</Text> */}

        <Alert 
          mt={10}
          status='success'
          variant='subtle'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          textAlign='center'
          height='300px'  
          w="30%"
        >
        <AlertIcon boxSize='40px' mr={0} />
        <AlertTitle mt={4} mb={1} fontSize='lg'>
          Profile Successful!
        </AlertTitle>
        <AlertDescription mt={5} align="left" maxWidth='sm'>
        <strong>E-Mail:</strong> { JSON.stringify(user.email)  } <br />
        <strong>Password:</strong>  { JSON.stringify(user.password) }
        </AlertDescription>
        <br />
        <Button 
        mt="10px"
        alignItems='center'
        justifyContent='center'
        colorScheme="red" 
        variant="solid" 
        onClick={handleLogout}
        >Log Out
        </Button>
        </Alert>


    </div>
  )
}

export default Profile