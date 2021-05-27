import React, { MouseEvent } from 'react';
import { Box, BoxProps } from './Box';

export interface IconButtonProps extends BoxProps {
  isActive?: boolean;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

export function IconButton({
  isActive = false,
  children,
  ...props
}: IconButtonProps) {
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
      borderColor={isActive ? '$gray100' : 'transparent'}
      bg="transparent"
      color="$hiContrast"
      _hover={{ bg: '$gray100' }}
      _focus={{
        outline: 'none',
      }}
      _active={{
        borderColor: '$gray100',
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
