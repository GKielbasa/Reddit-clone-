import { AuthModalState } from '@/src/atoms/authModalAtom';
import { Button, Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';


type SingUpProps = {
    
};

const SingUp:React.FC<SingUpProps> = () => {
    
    const setAuthModalState = useSetRecoilState(AuthModalState);
    const [loginForm, setLoginForm] = useState({
        email: "",
        password: "",
    })
    const onSubmit = () => {};
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLoginForm(prev => ({
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
            <Button type="submit" width='100%' height='36px' mb="2">
                Sing Up
            </Button>
        </form>    
    )
}
export default SingUp;