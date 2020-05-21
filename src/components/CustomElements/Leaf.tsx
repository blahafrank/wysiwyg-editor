import React, { FunctionComponent } from 'react';

type LeafProps = {
  attributes: JSX.ElementAttributesProperty;
  children: JSX.ElementChildrenAttribute;
  leaf: {
    bold: boolean;
  };
}

export const Leaf: FunctionComponent<LeafProps> = ({attributes, children, leaf}) => {
  return (
    <span {...attributes} style={{ fontWeight: leaf.bold ? 'bold' : 'normal' }}>
      {children}
    </span>
  )
};
