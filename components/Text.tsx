import React from 'react';
import Box from './Box';

export function Text(props) {
  return <Box m="$0" as="span" color="$hiContrast" {...props} />;
}
