import React from 'react';

import Filho from './Filho';

export default () => {
  let x = 1;
  let y = 2;

  return (
    <>
      <Filho a={x} b={y}/>
      <Filho a={x + 10} b={y + 10}/>
    </>
  )
}