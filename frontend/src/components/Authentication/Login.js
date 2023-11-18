import React, { useState } from 'react'
import { Button, FormControl, FormLabel, VStack } from '@chakra-ui/react'
import { Input, InputGroup,InputRightElement  } from '@chakra-ui/input'

function Login() {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [show, setShow] = useState(false)

    function showPassword(){
        setShow(!show)
    }
  
    function submitHandler(){
        
    }

  return (
    <VStack spacing={'5px'} >
  
    <FormControl id='email' isRequired>
        <FormLabel >
            Email
        </FormLabel>

        <Input placeholder='Enter your email'
            onChange={(e) => setEmail(e.target.value)}>

        </Input>
    </FormControl>
    <FormControl id='password' isRequired>
        <FormLabel >
            Password
        </FormLabel>
       <InputGroup>
       <Input placeholder='Enter your Password'
          type={show ?  "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}>

        </Input>
        <InputRightElement  width="4.5em" >
            <Button h={'1.75rem'} size={'sm'} onClick={showPassword}>
             {show ? 'Hide': 'Show'}
            </Button>


        </InputRightElement>

       </InputGroup>
       
    </FormControl>

   

    <Button colorScheme='blue' width={'100%'} style={{marginTop:15}} onClick={submitHandler}>
       Login
    </Button>
</VStack>
  )
}

export default Login