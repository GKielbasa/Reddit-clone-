import { AuthModalState } from '@/src/atoms/authModalAtom';
import { auth } from '@/src/firebase/clientApp';
import { Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRecoilState } from 'recoil';
import AuthInputs from './AuthInputs';
import OAuthButtons from './OAuthButtons';

const AuthModal:React.FC = () => {    
    const [modalState, setModalState] = useRecoilState(AuthModalState);
    const [user, loading, error] = useAuthState(auth);

    const handleClose = () => {
        setModalState(prev => ({
            ...prev,
            open: false,
        }))
    };

    useEffect(() => {
        if (user) handleClose();
        console.log("user", user);
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [user]);

    return (
    <>
        
        <Modal isOpen={modalState.open} onClose={handleClose}>
            <ModalOverlay />
            <ModalContent > 
                {/* text w modalu     */}
                <ModalHeader textAlign={'center'} > 
                    {modalState.view === 'login' && 'Login'}
                    {modalState.view === 'singup' && "Sing up"}
                    {modalState.view === 'resetPassword' && "Reset Password"}

                </ModalHeader>
                <ModalCloseButton />
                <ModalBody 
                    display='flex' 
                    flexDirection='column' 
                    alignItems='center' 
                    justifyContent='center'
                    pb={6}
                    //border="1px solid red"
                >  
                    <Flex //div z inputami i buttonami 
                        direction='column' 
                        align='center' 
                        justify='center'
                        width='70%'
                        // border="1px solid red"
                    >
                    {modalState.view ==='login' || modalState.view ==='singup' ? (
                        <>                   
                            <OAuthButtons />
                            <Text color={'gray.500'} fontWeight={700}>OR</Text>
                            <AuthInputs />
                        </>
                        ) : (
                            <ResetPassword /> 
                        )}
                    </Flex>

                </ModalBody>
            </ModalContent>
        </Modal>
    </>
    )
}
export default AuthModal;