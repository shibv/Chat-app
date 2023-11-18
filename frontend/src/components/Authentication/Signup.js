import { Button, FormControl, FormLabel, VStack } from '@chakra-ui/react'
import { Input, InputGroup,InputRightElement  } from '@chakra-ui/input'
import React, { useState } from 'react'

const Signup = () => {



    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [cnfp, setCnfp] = useState()
    const [pic, setPic] = useState()
    const [show, setShow] = useState(false)
    

    function showPassword(){
        setShow(!show)
    }
    function postDetail(pics)
    {

    }

    function submitHandler(){
        
    }

    return (
        <VStack spacing={'5px'} >
            <FormControl id='first-name' isRequired>
                <FormLabel >
                    Name
                </FormLabel>

                <Input placeholder='Enter your name'
                    onChange={(e) => setName(e.target.value)}>

                </Input>
            </FormControl>
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

            <FormControl id='password' isRequired>
                <FormLabel >
                    Confirm Password
                </FormLabel>
               <InputGroup>
               <Input placeholder='Enter your Password'
                  type={show ?  "text" : "password"}
                    onChange={(e) => setCnfp(e.target.value)}>

                </Input>
                <InputRightElement  width="4.5em" >
                    <Button h={'1.75rem'} size={'sm'} onClick={showPassword}>
                     {show ? 'Hide': 'Show'}
                    </Button>


                </InputRightElement>

               </InputGroup>
               
            </FormControl>
           
            <FormControl>
            <FormLabel >Enter the Picture</FormLabel>
            <Input type='file' p={1.5} accept='image/*' onChange={(e) => postDetail(e.target.files[0])}>

            </Input>
            </FormControl>

            <Button colorScheme='blue' width={'100%'} style={{marginTop:15}} onClick={submitHandler}>
                Sign Up
            </Button>
        </VStack>
    )
}

export default Signup
