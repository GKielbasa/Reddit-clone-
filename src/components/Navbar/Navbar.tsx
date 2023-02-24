/* eslint-disable jsx-a11y/alt-text */
import { auth } from '@/src/firebase/clientApp';
import { Flex } from '@chakra-ui/react';
import { Image } from "@chakra-ui/react";
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Directory from './Directory/Directory';
import RightContent from './RightContent/RightContent';
import SearchInput from './SearchInput';


const Navbar:React.FC = () => {  
    const [user, loading, error] = useAuthState(auth);
    return (
      //Korzystając z Flex chakry można wpisac dowolna własciwosc in line 
      <Flex
        bg="white"
        height="44px"
        padding="6px 12px"
        justify={{ md: "space-between" }}
      >
        <Flex
          align="center"
          width={{ base: "40px", md: "auto" }}
          mr={{ base: 0, md: 2 }}
        >
          <Image
            src="/RedditFace.jpg"
            alt="reddit logo"
            height="30px"
            margin-top="3px"
          />
          <Image
            src="/redditText.svg"
            alt="reddit text"
            height="46px"
            display={{ base: "none", md: "unset" }}
            marginLeft={"5px"}
          />
        </Flex>
        {user && <Directory />}
        <SearchInput user={user} />
        <RightContent user={user} />
      </Flex>
    );
};
export default Navbar;