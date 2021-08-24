import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react'

interface InputProps extends ChakraInputProps {
  name: string
  label?: string
}

export const Input = ({ name, label, ...rest }: InputProps) => {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        id={name}
        name={name}
        focusBorderColor='purple.500'
        bgColor='gray.100'
        variant='filled'
        size='lg'
        _hover={{
          bgColor: 'gray.100',
        }}
        {...rest}
      />
    </FormControl>
  )
}
