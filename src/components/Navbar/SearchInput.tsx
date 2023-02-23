import { SearchIcon } from '@chakra-ui/icons';
import { Flex, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { User } from 'firebase/auth';
import React from 'react';

type SearchinputProps = {
    user?: User | null
};

const Searchinput:React.FC<SearchinputProps> = (props) => {
    
    return (
        <Flex flexGrow={1} maxWidth={props.user ? 'auto' : "600px"} align="center" mr={1}>
            <InputGroup>
                <InputLeftElement
                    pointerEvents='none'                   
                    // eslint-disable-next-line react/no-children-prop
                    children={<SearchIcon color='gray.500' marginLeft={'10px'} marginBottom={'5px'}/>}
                />
                    <Input placeholder='Search Reddit' fontSize="10pt" _placeholder={{color: "gray.700"}}
                    _hover={{
                        bg: 'white',
                        border: '1px solid',
                        borderColor: "blue.500",
                    }}
                    _focus={{
                        outline: 'none',
                        border: '1px solid',
                        borderColor: 'blue.500',
                    }} 
                    height='34px'
                    bg='gray.50' 
                    marginLeft='10px'

                />
            </InputGroup>
        </Flex>
    )
}
export default Searchinput;