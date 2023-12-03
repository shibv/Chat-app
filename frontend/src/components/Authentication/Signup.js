import { Button, FormControl, FormLabel, VStack } from '@chakra-ui/react'
import { Input, InputGroup,InputRightElement  } from '@chakra-ui/input'
import React, { useState } from 'react'
import { useToast } from '@chakra-ui/react'
import { color } from 'framer-motion'
import axios from "axios"

const Signup = () => {



    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [cnfp, setCnfp] = useState()
    const [pic, setPic] = useState()
    const [show, setShow] = useState(false)
    const [loading, setLoading] = useState(false)
    const toast = useToast()
    

    function showPassword(){
        setShow(!show)
    }
    function postDetail(pics)
    {
          
    }

    const  submitHandler = async() =>{
        setLoading(true);

        if(!name || !email || !password || !cnfp){
            toast({
               title:"Please fill all the blanks!!",
               status:"warning",
               duration:5000,
               isClosable:true,
               position:"bottom",
            });
            setLoading(false)
            return;
        }

        if( password != cnfp)
        {
            toast({
                title:"Passwords are Not Matching!!",
                status:"warning",
                duration:5000,
                isClosable:true,
                position:"bottom",
             });
             
             return;

        }
     console.log(name, email,password,pic)

        try{
            const config = {
                headers: {
                  "Content-type": "application/json",
                },
              };
              const {data} = await axios.post("/api/user",{name, email, password, pic}, config );
              toast({
                title:"Registration is Successful!!",
                status:"success",
                duration:5000,
                isClosable:true,
                position:"bottom",
             });

             
        }catch{
            toast({
                title:"Error Occured!!",
                status:"warning",
                duration:5000,
                isClosable:true,
                position:"bottom",
             });
             setLoading(false)
        }
        
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

            <Button colorScheme='blue' width={'100%'} style={{marginTop:15}} onClick={submitHandler} isLoading={loading}>
                Sign Up
            </Button>
        </VStack>
    )
}

export default Signup
