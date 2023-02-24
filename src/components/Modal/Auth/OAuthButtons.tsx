import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { User } from "@firebase/auth";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import React, { useEffect } from "react";
//import Image from 'next/image'
import {
  useSignInWithFacebook,
  useSignInWithGoogle
} from "react-firebase-hooks/auth";
import { auth, firestore } from "../../../firebase/clientApp";

const OAuthButtons: React.FC = () => {
  const [signInWithGoogle, userCred, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithFacebook, facebookUserCred, facebookLoading, facebookError] =
    useSignInWithFacebook(auth); // niebedę wprowadzał tej opcji

  const createUserDocument = async (user: User) => {
    const userDocRef = doc(firestore, 'users', user.uid);
    await setDoc(userDocRef, JSON.parse(JSON.stringify(user)));
  };

  useEffect(() => {
    if(userCred !== undefined){
        createUserDocument(userCred.user);
    }
  }, [userCred]);
  //use Effect - hook w React, który umożliwia wykonywanie operacji po renderowaniu komponentu. W powyższym kodzie, useEffect zostaje użyty do wywołania funkcji createUserDocument po zmianie wartości userCred.  

  return (
    <Flex direction={"column"} width="100%" mb={4}>
      <Button
        variant={"oauth"}
        mb={2}
        isLoading={googleLoading}
        onClick={() => signInWithGoogle()}
      >
        <Image
          src="/googlelogo.jpg"
          alt="google logo"
          height={"20px"}
          margin="5px"
          marginRight={5}
        />
        Continue with Google
      </Button>
      <Button
        variant={"oauth"}
        isLoading={facebookLoading}
        onClick={() => signInWithFacebook()}
      >
        <Image src="/facebookLogo.jpg" alt="A facebook logo" height="20px" />
        Continue with Facebook
      </Button>
      {googleError && <Text>{googleError.message}</Text>}
      {facebookError && <Text>{facebookError.message}</Text>}
    </Flex>
  );
};
export default OAuthButtons;
