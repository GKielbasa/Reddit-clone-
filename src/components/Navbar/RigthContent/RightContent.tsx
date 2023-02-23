import { auth } from '@/src/firebase/clientApp';
import { Button, Flex } from '@chakra-ui/react';
import { signOut } from 'firebase/auth';
import React from 'react';
import AuthModal from '../../Modal/Auth/AuthModal';
import AuthButtons from './AuthButtons';

type RightContentProps = {
    user: any;
};

const RightContent:React.FC<RightContentProps> = (props) => {
    
    return (
        <>
        <AuthModal />
        <Flex justify='center' align='center' marginLeft={'10px'}>
            {props.user ? <Button onClick={() => signOut(auth)} >Log out</Button> : <AuthButtons />}           
        </Flex>
        </>
    )
}
export default RightContent;