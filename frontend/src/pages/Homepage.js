import React from "react";
import { Container, Box, Text , Tabs, TabList, TabPanel, Tab, TabPanels} from "@chakra-ui/react";
import Signup from "../components/Authentication/Signup";
import Login from "../components/Authentication/Login";


const Homepage = () => {
  return (
    <Container maxW="xl">
      <Box
        display={'flex'}
        justifyContent={'center'}
       
        p={3}
        bg={"white"}
        w={"100%"}
        m={"40px 0 15px 0 "}
        borderRadius={"lg"}
        borderWidth={"1px"}
      >
        <Text fontSize={"4xl"} color={"black"}>
          Talk-A-Tive
        </Text>
      </Box>
      <Box 
      bg={'white'}
      width={"100%"}
      color={'black'}
      p={4}
      borderRadius={'lg'}
      borderWidth={"1px"}
      >
      <Tabs variant='soft-rounded' >
  <TabList mb={'1em'}>
    <Tab width={'50%'}>Login</Tab>
    <Tab width={'50%'}>SignUp</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <Login />
    </TabPanel>
    <TabPanel>
     <Signup />
    </TabPanel>
  </TabPanels>
</Tabs>
      </Box>
    </Container>
  );
};

export default Homepage;