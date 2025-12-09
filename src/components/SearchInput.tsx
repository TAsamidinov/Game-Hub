import { Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react'
import { BsSearch } from 'react-icons/bs'
import { CiSearch } from 'react-icons/ci'

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input borderRadius={20} placeholder='Seach games...' variant={'filled'} />
    </InputGroup>
  )
}

export default SearchInput
