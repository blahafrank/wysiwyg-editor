import React, { FunctionComponent } from 'react';

type CodeElementProps = {
  attributes: JSX.ElementAttributesProperty;
  children: JSX.ElementChildrenAttribute;
}

export const CodeElement: FunctionComponent<CodeElementProps> = ({attributes, children}) => {
  return (
    <pre {...attributes}>
      <code>{children}</code>
    </pre>
  )
}