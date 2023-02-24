import { auth, firestore } from '@/src/firebase/clientApp';
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, background, Box, Divider, Text, Input, Stack, Checkbox, CheckboxState, Flex, Icon } from '@chakra-ui/react';
import { doc, getDoc, serverTimestamp } from '@firebase/firestore';
import { setDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {BsFillEyeFill, BsFillPersonFill} from 'react-icons/bs';
import {HiLockClosed} from 'react-icons/hi';
//ten modal będzie zarządzał logiką tworzenia społeczności 



type CreateCommunityModalProps = {
    open: boolean;
    handleClose: () => void;
};

const CreateCommunityModal:React.FC<CreateCommunityModalProps> = ({
    open,
    handleClose
}) => {
    const [user] = useAuthState(auth);
    const [communityName, setCommunityName] = useState('');
    const [charsRemaining, setCharsRemaining] =useState(21);
    const [communityType, setCommunityType] = useState("public");
    const [error, setError] = useState('');

    const handleCharsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.value.length > 21) return;

      setCommunityName(event.target.value);
      //recalculte how many chars we have left in the input
      setCharsRemaining(21 - event.target.value.length);
    }

    const onCommunityTypeChange =(event: React.ChangeEvent<HTMLInputElement>) => {

      setCommunityType(event.target.name)
    };

    const handleCreateCommunity = async () => {
      //validate the community name
      const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
      if (specialChars.test(communityName) || communityName.length < 3) {
        setError('Community names must be between 3-21 characters, and can only contain letters, numbers or underscores');
        return;
      }
      //create the community document in firestorme
        //check that name is not taken
        //if valid name, create community (create document reference )
        const communityDocRef = doc(firestore, 'communities', communityName)
        const communityDoc = await getDoc(communityDocRef);
        //firebase działa na zasadzie że mamy dokument i referencjie do neiego fire storm zawsze musi być 1 arg aby wiedział w której bazie szukac

        if (communityDoc.exists()){
          setError(`Sorry, r/${communityName} is taken. Try another.`);
          return;
        }

        // Create communmity 

        //fucntion provided by firebase it wil update existing doc or create new one 
        await setDoc(communityDocRef, {
          // creatorId, createdAt, numberOfMembers, privacyType
          creatorId: user?.uid,
          createdAt: serverTimestamp(),
          numberOfMembers: 1,
          privacyType: communityType,
        });
    }

    return (
      <>
        <Modal isOpen={open} onClose={handleClose} size="lg">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader
              display="flex"
              flexDirection="column"
              fontSize={15}
              padding="3"
            >
              Create a community
            </ModalHeader>
            <Box pl={3} pr={3}>
              <Divider />
              <ModalCloseButton />
              <ModalBody
                display="flex"
                flexDirection="column"
                padding="10px 0px"
                //border="1px solid red"
              >
                <Text fontWeight={600} fontSize={15} />
                Name
                <Text />
                <Text fontSize={11} color="gray.500">
                  Community names including capitalization cannot be changed
                </Text>
                <Text
                  position="relative"
                  top="28px"
                  left="10px"
                  width="20px"
                  color="gray.400"
                >
                  r/
                </Text>
                <Input
                  value={communityName}
                  size="sm"
                  pl="22"
                  onChange={handleCharsChange}
                ></Input>
                <Text
                  color={charsRemaining === 0 ? "red" : "grey.500"}
                  fontSize="9pt"
                >
                  {charsRemaining} Characters remaining
                </Text>
                <Text fontSize='9pt' color="red" pt={1} >{error}</Text>
                <Box mt={4} mb={4}>
                  <Text fontWeight={600} fontSize={15}>
                    Community type
                  </Text>
                  {/* Stack z chakra UI to flex box automatycznie ogarniajacy spacing */}
                  <Stack spacing={2}>
                    <Checkbox
                      name="public"
                      isChecked={communityName === "public"}
                      onChange={onCommunityTypeChange}
                      
                    >
                      <Flex align="center">
                        <Icon as={BsFillPersonFill} color="gray.500" mr={2} />
                        <Text fontSize="10pt" mr={1}>
                          Public
                        </Text>
                        <Text fontSize="8pt" color="gray.500">
                          Anyone can view, post, and comment to this community
                        </Text>
                      </Flex>
                    </Checkbox>
                    <Checkbox
                      name="restricted"
                      isChecked={communityName === "restricted"}
                      onChange={onCommunityTypeChange}
                    >
                      <Flex align="center">
                        <Icon as={BsFillEyeFill} color="gray.500" mr={2} />
                        <Text fontSize="10pt" mr={1}>
                          Restricted
                        </Text>
                        <Text fontSize="8pt" color="gray.500">
                          Any one can view this community but only approved user
                          can post
                        </Text>
                      </Flex>
                    </Checkbox>
                    <Checkbox
                      name="private"
                      isChecked={communityName === "private"}
                      onChange={onCommunityTypeChange}
                    >
                      <Flex align="center">
                        <Icon as={HiLockClosed} color="gray.500" mr={2} />
                        <Text fontSize="10pt" mr={1}>
                          Private{" "}
                        </Text>
                        <Text fontSize="8pt" color="gray.500">
                          Ony approved user can view and submit to this
                          community
                        </Text>
                      </Flex>
                    </Checkbox>
                  </Stack>
                </Box>
              </ModalBody>
            </Box>

            <ModalFooter bg="gray.100" borderRadius="0px 0px 10px 10px">
              <Button
                variant="outline"
                height="30px"
                mr={3}
                onClick={handleClose}
              >
                Cancel
              </Button>
              <Button  height="30px" onClick={() => {}}>
                Create Community
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
}
export default CreateCommunityModal;