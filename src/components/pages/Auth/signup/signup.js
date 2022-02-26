import { useState, useEffect, } from "react";
import { Flex, Text, Alert, Box, Heading, FormControl, FormLabel,Input, Button } from '@chakra-ui/react';
import { useFormik } from "formik";
import validationSchema from './validations';
import { useAuth } from '../../../../context/AuthContext';
import { useNavigate  } from "react-router-dom";

function Signup() {

  const { login, loggedIn } = useAuth();
  const navigate = useNavigate()

  const formik = useFormik({ 
    initialValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
    validationSchema,
    onSubmit: async (values, bag) => {
      console.log("values =",values)
      login(values)
      // localStorage.setItem("valuesKey", JSON.stringify(values))
    },
  });
// values: Form'daki datalar,
// bag: O form üzerinde yapabileceğimiz bir takım işlemler var, 
// onları bize sağlıyor; örneğin formu resetlemek gibi


// useEffect(()=>{
//   console.log("formik =",formik.values);
// },[formik])
// // bir kontrol edeyim log ile

if (loggedIn) {
  navigate("/products") 
}

  return (
    <div>
      <Flex align="center" width="full" justifyContent="center" >

        <Box pt={10} >
         <Box textAlign="center" >
           <Heading>Sign Up</Heading>
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

          <FormControl mt="4">
            <FormLabel>Password Confirm</FormLabel>
            <Input 
            name="passwordConfirm" 
            type="password" 
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.passwordConfirm}
            isInvalid={formik.touched.passwordConfirm && formik.errors.passwordConfirm}
            />
            {
              <Text color="red">{formik.errors.passwordConfirm}</Text>
            }
          </FormControl>

        <Button 
        mt="4" 
        width="full" 
        type="submit" 
        >
          Sign Up
        </Button>

          </form>
         </Box>
        </Box>
      </Flex>

      {/* <Box mt={10} align="center" width="full" >
        <Alert align="center" width="full" justifyContent="center" w="20%" >
          E-Mail:  {JSON.stringify(formik.values.email)} <br/>
          Password:  {JSON.stringify(formik.values.password)}
        </Alert>
      </Box> */}
    </div>
  )
}

export default Signup;