import React from 'react';
import Box from './Box';

export function IconButton({isActive, children, ...props}) {
  return (
    <Box
      appearance="none"
      type="button"
      as="button"
      borderRadius="100%"
      size="25px"
      lineHeight="1"
      borderWidth="2px"
      borderStyle="solid"



      borderColor={isActive ?
        '$gray100' : 'transparent'}
      bg="transparent"
      _hover={{bg: '$gray50'}}
      _focus={{
        outline: 'none',
      }}
      p="0"
      display="flex"
      justifyContent="center"
      alignItems="center"
      {...props}
    >
      {children}
    </Box>
  );
}
