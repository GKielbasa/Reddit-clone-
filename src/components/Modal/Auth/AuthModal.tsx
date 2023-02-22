import { AuthModalState } from '@/src/atoms/authModalAtom';
import { Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text } from '@chakra-ui/react';
import React from 'react';
import { useRecoilState } from 'recoil';
import AuthInputs from './AuthInputs';
import OAuthButtons from './OAuthButtons';

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
                    //border="1px solid red"
                >  
                    <Flex //div z inputami i buttonami 
                        direction='column' 
                        align='center' 
                        justify='center'
                        width='70%'
                        // border="1px solid red"
                    >
                        <OAuthButtons />
                        <Text color={'gray.500'} fontWeight={700}>OR</Text>
                        <AuthInputs />
                        {/*<ResetPassword /> */}
                    </Flex>

                </ModalBody>
            </ModalContent>
        </Modal>
    </>
    )
}
export default AuthMadel;