import React from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default function() {
  useEffect(() => {
    console.log('rendered');
    useHistory().push('/products/1');
  }, []);

  return <></>;
}
