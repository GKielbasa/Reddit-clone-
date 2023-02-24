import { AuthModalState } from '@/src/atoms/authModalAtom';
import { Button } from '@chakra-ui/react';
import React from 'react';
import { useSetRecoilState } from "recoil";

const AuthButtons:React.FC = () => {
    const setAuthModalState = useSetRecoilState(AuthModalState);
    
    return (
      <>
        <Button
          variant="outline"
          height="28px"
          display={{ base: "none", sm: "flex" }}
          width={{ base: "70px", md: "110px" }}
          mr={2}
          onClick={() => setAuthModalState({ open: true, view: "login" })}
        >
          Log In
        </Button>
        <Button //variant solid jest standardowo
          height="28px"
          display={{ base: "none", sm: "flex" }}
          width={{ base: "70px", md: "110px" }}
          mr={2}
          onClick={() => setAuthModalState({ open: true, view: "singup" })}
        >
          Sing Up
        </Button>
      </>
    );
}
export default AuthButtons;