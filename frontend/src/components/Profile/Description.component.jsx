import React from 'react';

const description = {
  background: '#F2F5F7',
  textAlign: 'left',
  padding: '1rem 0'
};

export default function Description({ txt }) {
  return <p style={description}>{txt}</p>;
}
