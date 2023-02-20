/* eslint-disable jsx-a11y/alt-text */
import { Flex } from '@chakra-ui/react';
import { Image} from "@chakra-ui/react";
import React from 'react';




const Navbar:React.FC = () => {   
    return (
        //Korzystając z Flex chakry można wpisac dowolna własciwosc 
        <Flex bg="white" height='44px' padding="6px 12px">
            <Flex align="center">
                <Image src='https://static-prod.adweek.com/wp-content/uploads/2019/10/Reddit-Logo-Horizontal-1600x680.png' alt='reddit face' height="46px" />                
            </Flex>
        </Flex>
    );
};
export default Navbar;