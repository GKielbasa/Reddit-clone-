import { AuthModalState } from '@/src/atoms/authModalAtom';
import { useDisclosure, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Flex } from '@chakra-ui/react';
import React from 'react';
import { useRecoilState } from 'recoil';
import AuthInputs from './AuthInputs';

// nasz modal ma się pokazywac onClick buttonów należy zmodyfikowac import  z chakra UI
const AuthMadel:React.FC = () => {    
    const [modalState, setModalState] = useRecoilState(AuthModalState);

    const handleClose = () => {
        setModalState(prev => ({
            ...prev,
            open: false,
        }))
    }
    return (
    <>
        
        <Modal isOpen={modalState.open} onClose={handleClose}>
            <ModalOverlay />
            <ModalContent > 
                {/* text w modalu     */}
                <ModalHeader textAlign={'center'}> 
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
                >  
                    <Flex //pasek w modal formie
                        direction='column' 
                        align='center' 
                        justify='center'
                        width='70%'
                        // border="1px solid red"
                    >
                        <AuthInputs />
                        {/* <OAuthButtons />
                        <ResetPassword /> */}
                    </Flex>

                </ModalBody>
            </ModalContent>
        </Modal>
    </>
    )
}
export default AuthMadel;