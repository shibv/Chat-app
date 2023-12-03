import React, { useState } from 'react'
import { Button, FormControl, FormLabel, VStack } from '@chakra-ui/react'
import { Input, InputGroup,InputRightElement  } from '@chakra-ui/input'
import { useToast } from '@chakra-ui/react'
import axios from 'axios'
import { useHistory } from "react-router-dom";

function Login() {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [show, setShow] = useState(false)
    const [loading , setLoading] = useState(false);
    const toast = useToast()
    const navigate = useHistory();

    function showPassword(){
        setShow(!show)
    }
  
    const submitHandler = async () =>{
        setLoading(true);
        if(!email ||  !password) {
            toast({
                title:"Please fill all the blanks!!",
                status:"warning",
                duration:5000,
                isClosable:true,
                position:"bottom",
             });
             setLoading(false);
             return ;

        }

        try {
            const config = {
                headers: {
                  "Content-type": "application/json",
                },
              };

              const {data} = await axios.post("/api/user/login", {email,password}, config);
              toast({
                title:"Registration is Successful!!",
                status:"success",
                duration:5000,
                isClosable:true,
                position:"bottom",
             });
            localStorage.setItem("userInfo", JSON.stringify(data));
            setLoading(false);
            navigate.push("/chats");



        } catch (error) {
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

   

    <Button colorScheme='blue' width={'100%'} style={{marginTop:15}} onClick={submitHandler} isLoading={loading}>
       Login
    </Button>
</VStack>
  )
}

export default Login