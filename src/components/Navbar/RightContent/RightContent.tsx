import { Flex } from '@chakra-ui/react';
import { User } from 'firebase/auth';
import React from 'react';
import AuthModal from '../../Modal/Auth/AuthModal';
import AuthButtons from './AuthButtons';
import Icons from './Icons';
import UserMenu from './UserMenu';

type RightContentProps = {
    user?: User | null; //typescrit 
};

const RightContent:React.FC<RightContentProps> = (props) => {
    
    return (
        <>
        <AuthModal />
        <Flex justify='center' align='center' marginLeft={'10px'}>
            {props.user ? <Icons /> : <AuthButtons />} 
            <UserMenu user={props.user} />
        </Flex>
        </>
    )
}
export default RightContent;