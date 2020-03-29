import React from 'react';

import { Box } from '@material-ui/core';

const ImageCover = () => {
  const imgStyle = {};

  return (
    <Box width={1}>
      <img
        src="https://images.unsplash.com/photo-1567274333060-04b18e634717?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1588&q=80"
        alt=""
        style={imgStyle}
      />
    </Box>
  );
};

export default ImageCover;
