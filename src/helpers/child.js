import React from 'react';

export function getSpecificChild(children, index) {
  let elem;

  React.Children.forEach(children, (c, i) => {
    if (index === i) {
      elem = c;
    }
  });

  return elem;
}
