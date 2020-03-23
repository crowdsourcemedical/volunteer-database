import React from 'react';

import { Box } from '@material-ui/core';

export const ImageCover = ({ imgCover }) => {
  const imgStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  };

  return (
    <Box width={1 / 3}>
      <img
        src='https://images.unsplash.com/photo-1575468130797-aa950b68aeec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
        alt=''
        style={imgStyle}
      />
    </Box>
  );
};
