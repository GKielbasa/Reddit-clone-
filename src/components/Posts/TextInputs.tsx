import { Button, Flex, Input, Stack, Textarea } from '@chakra-ui/react';
import React from 'react';

type PostFormProps = {
    
};

const TextInputs:React.FC<PostFormProps> = () => {
    
    return (
      <Stack spacing={3} width="100%">
        <Input
          name="title"
          // value={}
          // onChange={}
          fontSize="10pt"
          borderRadius={4}
          placeholder="Title"
          _placeholder={{ color: "gray.500" }}
          _focus={{
            outline: "none",
            bg: "white",
            border: "1px solid",
            borderColor: "black",
          }}
        />
        <Textarea
          name="body"
          // value={}
          // onChange={}
          fontSize="10pt"
          borderRadius={4}
          height="100px"
          placeholder="Text(optional)"
          _placeholder={{ color: "gray.500" }}
          _focus={{
            outline: "none",
            bg: "white",
            border: "1px solid",
            borderColor: "black",
          }}
        />
        <Flex justify="flex-end">
          <Button height='34px' padding='0px 30px' disabled={false} onClick={() => {}}>Post</Button>
        </Flex>
      </Stack>
    );
}
export default TextInputs;