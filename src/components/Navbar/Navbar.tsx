/* eslint-disable jsx-a11y/alt-text */
import { Flex, Image } from '@chakra-ui/react';
import React from 'react';



const Navbar:React.FC = () => {   
    return (
        //Korzystając z Flex chakry można wpisac dowolna własciwosc 
        <Flex bg="white" height='44px' padding="6px 12px">
            <Flex>
                <Image src="/public/images/redditFace.svg" height="30px" />
                <Image src="/public/images/redditText.svg" height="30px" />
            </Flex>
        </Flex>
    );
};
export default Navbar;