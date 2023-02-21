import { SearchIcon } from '@chakra-ui/icons';
import { Flex, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import React from 'react';

type SearchinputProps = {
    //user: 
};

const Searchinput:React.FC<SearchinputProps> = () => {
    
    return (
        <Flex flexGrow={1} align="center">
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