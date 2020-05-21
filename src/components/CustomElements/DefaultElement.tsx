import React, { FunctionComponent } from 'react';

type DefaultElementProps = {
  attributes: JSX.ElementAttributesProperty;
  children: JSX.ElementChildrenAttribute;
}

export const DefaultElement: FunctionComponent<DefaultElementProps> = ({ attributes, children }) => {
  return <p {...attributes}>{children}</p>
}