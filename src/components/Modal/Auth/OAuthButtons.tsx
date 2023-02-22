import { Button, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
//import Image from 'next/image'

const OAuthButtons:React.FC = () => {
    
    return (
        <Flex direction={'column'} width='100%' mb={4} >
            <Button variant={'oauth'} mb={2}>
                <Image src="https://github.com/shadeemerhi/reddit-clone-yt/blob/main/public/images/googlelogo.png?raw=true" alt='google logo' height={'20px'}  margin="5px" marginRight={5}/>
                Continue with Google
            </Button>
            <Button variant={'oauth'}>
            <Image
                src="/facebookLogo.jpg"
                alt="A facebook logo"
                height="20px"
            />
                Continue with Facebook
            </Button>
        </Flex>
    )
}
export default OAuthButtons;