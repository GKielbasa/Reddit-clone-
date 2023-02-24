import { Button, Flex, Image, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
//import Image from 'next/image'
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth'; 
import { auth } from '../../../firebase/clientApp';

const OAuthButtons:React.FC = () => { 
    const [signInWithGoogle, user, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithFacebook, facebookUser, facebookLoading, facebookError] = useSignInWithFacebook(auth);
    return (
        <Flex direction={'column'} width='100%' mb={4} >
            <Button 
                variant={'oauth'} 
                mb={2} 
                isLoading={googleLoading} 
                onClick={ () => signInWithGoogle()}
                
            >
                <Image src="/googlelogo.jpg" alt='google logo' height={'20px'}  margin="5px" marginRight={5}/>
                Continue with Google
            </Button>
            <Button 
                variant={'oauth'}
                isLoading={facebookLoading}
                onClick={ () => signInWithFacebook()}
            >
            <Image
                src="/facebookLogo.jpg"
                alt="A facebook logo"
                height="20px"
            />
                Continue with Facebook
            </Button>
            {googleError && <Text>{googleError.message}</Text>}
            {facebookError && <Text>{facebookError.message}</Text>}
        </Flex>
    )
}
export default OAuthButtons;