import React, { FunctionComponent, useState } from 'react';
import { useSlate } from 'slate-react';
import Picker, { IEmojiData } from 'emoji-picker-react';
import { insertText } from '../../utils/editorHelpers';
import { Button } from '@material-ui/core';

import './EmojiPicker.scss';

export const EmojiPicker: FunctionComponent<{}> = () => {
  const editor = useSlate();

  const [isVisible, setVisible] = useState(false);
  const [isVisible, setVisible] = useState(false);

  const handleEmojiClick = (event: MouseEvent, data: IEmojiData) => {
    insertText(editor, data.emoji);
    handleVisibility();
  };

  const handleVisibility = () => {
    setVisible(!isVisible);
  };

  return (
    <div className="EmojiPicker">
      <Button onClick={handleVisibility}>Emoji</Button>
      {isVisible && (
        <div className="EmojiPicker__picker">
          <Picker onEmojiClick={handleEmojiClick} />
        </div>
      )}
    </div>
  )
}