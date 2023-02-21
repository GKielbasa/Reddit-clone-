/* eslint-disable jsx-a11y/alt-text */
import { Flex } from '@chakra-ui/react';
import { Image } from "@chakra-ui/react";
import React from 'react';
import RightContent from './RigthContent/RightContent';
import SearchInput from './SearchInput';





const Navbar:React.FC = () => {   
    return (
        //Korzystając z Flex chakry można wpisac dowolna własciwosc 
        <Flex bg="white" height='44px' padding="6px 12px">
            <Flex align="center" >
                <Image src='https://www.redditinc.com/assets/images/site/reddit-logo.png' alt='reddit logo' height="30px" margin-top="3px" />
                <Image src='https://upload.wikimedia.org/wikipedia/commons/b/b4/Reddit_logo.svg'  alt='reddit text' height="30px" display={{base: 'none', md: "unset"}}  marginLeft={'10px'} />                
            </Flex>
            <SearchInput />
            {/* <Direcotory /> */}
            <RightContent />
        </Flex>
    );
};
export default Navbar;