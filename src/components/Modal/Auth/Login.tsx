
import { AuthModalState } from '@/src/atoms/authModalAtom';
import { border, Button, Flex, Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';

type LoginProps = {
    
};

const Login:React.FC<LoginProps> = () => {
    const setAuthModalState = useSetRecoilState(AuthModalState);
    const [loginForm, setLoginForm] = useState({
        email: "",
        password: "",
    });
    //Firebase 
    const onSubmit = () => {};

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        //update form state
        setLoginForm(prev => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    };

    return (
        <form onSubmit={onSubmit}>
            <Input 
                required
                name="email" 
                placeholder="email" 
                type="email" 
                mb={2} //margin 
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
            <Button type="submit" width='100%' height={'36px'} mb="2">
                Log In 
            </Button>
            <Flex fontSize={'9pt'} justifyContent="center">
                <Text mr={1}>New here?</Text>
                <Text 
                    color={"blue.500"} 
                    fontWeight="700" 
                    cursor={"pointer"} 
                    onClick={() => setAuthModalState(prev => ({
                            ...prev,
                            view: 'singup',
                        }))
                    }
                    >
                        SIGN UP
                    </Text>
            </Flex>
        </form>
    )
}
export default Login;