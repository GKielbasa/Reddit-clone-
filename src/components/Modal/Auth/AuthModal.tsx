import { AuthModalState } from '@/src/atoms/authModalAtom';
import { useDisclosure, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from '@chakra-ui/react';
import React from 'react';
import { useRecoilState } from 'recoil';

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
            <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    Modal button
                </ModalBody>
            </ModalContent>
        </Modal>
    </>
    )
}
export default AuthMadel;