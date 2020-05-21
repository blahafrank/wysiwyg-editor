import React, { FunctionComponent, useCallback, useMemo, useState } from 'react';
import { createEditor, Node } from 'slate';
import { Slate, Editable, withReact, ReactEditor } from 'slate-react';
import { Button } from '@material-ui/core';
import { withHistory } from 'slate-history';

import { CodeElement, DefaultElement, Leaf } from '../CustomElements';
import { toggleBoldMark, toggleCodeBlock } from '../../utils/editorHelpers';
import { EmojiPicker } from '../EmojiPicker';

import './TextEditor.scss';

export const TextEditor: FunctionComponent<{}> = () => {
  const editor = useMemo<ReactEditor>(
    () => withHistory(withReact(createEditor())),
    []
  );

  const [value, setValue] = useState<Node[]>([
    {
      type: 'paragraph',
      children: [{ text: 'A line of text in a paragraph.' }],
    },
  ]);

  const renderElement = useCallback((props: any) => {
    switch (props.element.type) {
      case 'code':
        return <CodeElement {...props} />
      default:
        return <DefaultElement {...props} />
    }
  }, [])

  const renderLeaf = useCallback(props => {
    return <Leaf {...props} />
  }, [])

  const handleChange = (value: Node[]) => {
    setValue(value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (!event.ctrlKey) return;

    event.preventDefault();

    switch (event.key) {
      case '`': {
        toggleCodeBlock(editor);
        break;
      }
      case 'b': {
        toggleBoldMark(editor);
        break;
      }
    }
  };

  return (
    <div className="TextEditor">
      <Slate editor={editor} value={value} onChange={handleChange}>
        <div className="TextEditor__buttons">
          <Button onClick={(e: any) => toggleCodeBlock(editor)}>Code</Button>
          <Button onClick={(e: any) => toggleBoldMark(editor)}>Bold</Button>
          <EmojiPicker />
        </div>
        <Editable
          className="TextEditor__textArea"
          onKeyDown={handleKeyDown}
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          autoFocus={true}
        />
      </Slate>
    </div>
  )
};

