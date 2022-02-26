import { AlertIcon, Flex, Text, Alert, Box, Heading, FormControl, FormLabel,Input, Button } from '@chakra-ui/react';
import { useFormik } from "formik";



function Signin() {

  const formik = useFormik({ 
    initialValues: {
      email: "",
      password: "",
    },
  });

const err = () => {
  "err"
}

  return (
    <div>
        <Box mb={5} >
        <Alert status='error' as='samp' align="center" justifyContent="center" color="red"> 
        <AlertIcon />
          Some Backend Problems :)
        </Alert>
        </Box>

      <Flex align="center" width="full" justifyContent="center" >


        <Box pt={10} >
         <Box textAlign="center" >
           <Heading>Sign In</Heading>
         </Box>

        <Box my={5} textAlign="left">
          <form onSubmit={formik.handleSubmit}>

          <FormControl>
            <FormLabel>E-Mail</FormLabel>
            <Input 
            name="email" 
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            isInvalid={formik.touched.email && formik.errors.email}
            //email'e touch olunmuşsa ve email ile ilgili hata varsa orayı(inputu) kırmızı olarak göster dedim
            />
            {
              <Text color="red">{formik.errors.email}</Text>
            }
          </FormControl>


          <FormControl mt="4">
            <FormLabel>Password</FormLabel>
            <Input 
            name="password" 
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            isInvalid={formik.touched.password && formik.errors.password}
            />
          {
            <Text color="red">{formik.errors.password}</Text>
          }
          </FormControl>


        <Button 
        mt="4" 
        width="full" 
        type="submit" 
        onChange={err}

        >
          Sign In
        </Button>

          </form>
         </Box>
        </Box>
      </Flex>

    </div>
  )
}

export default Signin;