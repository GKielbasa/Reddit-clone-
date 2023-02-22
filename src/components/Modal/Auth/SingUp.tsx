import { AuthModalState } from '@/src/atoms/authModalAtom';
import { Button, Flex, Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';


type SingUpProps = {
    
};

const SingUp:React.FC<SingUpProps> = () => {
    
    const setAuthModalState = useSetRecoilState(AuthModalState);
    const [SingUpForm, setSingUpForm] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    })
    const onSubmit = () => {};
    
//funkcja onChange jest używana do aktualizacji stanu formularza, który jest przechowywany w hooku useState. Jest ona wywoływana za każdym razem, gdy użytkownik wprowadza zmiany w polu formularza.   
//Dzięki temu, za każdym razem gdy użytkownik wprowadza zmiany w polu formularza, stan formularza jest aktualizowany i przechowuje nowe wartości

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSingUpForm(prev => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    }

    return (
        <form onSubmit={onSubmit}>
            <Input
                required
                name='email'
                placeholder='email'
                type="emial"
                mb="2"
                onChange={onChange}
                fontSize="10pt"
                _placeholder={{color: "grey.500"}}
                _hover={{
                    bg: "white",
                    border: "1px solid",
                    borderColor: "blue.500",
                }}
                _focus={{
                    outline: "none",
                    bg: "white",
                    border: "1px solid",
                    borderColor: "blue.500"
                }}
                bg="gray.50"              
            />                
            <Input 
                required
                name="password"
                placeholder='password'
                type='password'
                mb={2}
                onChange={onChange}
                fontSize="10pt"
                _placeholder={{color: "grey.500"}}
                _hover={{
                    bg: "white",
                    border: "1px solid",
                    borderColor: "blue.500",
                }}
                _focus={{
                    outline: "none",
                    bg: "white",
                    border: "1px solid",
                    borderColor: "blue.500",
                }}
                bg="gray.50"
            />
            <Input 
                required
                name="confirm password"
                placeholder='confirm password'
                type='password'
                mb={2}
                onChange={onChange}
                fontSize="10pt"
                _placeholder={{color: "grey.500"}}
                _hover={{
                    bg: "white",
                    border: "1px solid",
                    borderColor: "blue.500",
                }}
                _focus={{
                    outline: "none",
                    bg: "white",
                    border: "1px solid",
                    borderColor: "blue.500",
                }}
                bg="gray.50"
            />
            <Button type="submit" width='100%' height='36px' mb="2">
                Sing Up
            </Button>
            <Flex fontSize={'9pt'} justifyContent="center">
                <Text mr={1}>Already redditor?</Text>
                <Text
                    color={"blue.500"}
                    fontWeight="700"
                    cursor={"pointer"}
                    onClick={() =>
                    setAuthModalState((prev) => ({
                        ...prev,
                        view: "login",
                    }))
                }
                >
                    LOG IN
                </Text>
            </Flex>
        </form>    
    )
}
export default SingUp;