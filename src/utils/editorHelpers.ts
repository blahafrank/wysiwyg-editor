import { Editor, Transforms, Text } from 'slate';
import { ReactEditor } from 'slate-react';


const isBoldMarkActive = (editor: Editor) => {
  // @ts-ignore
  const [match] = Editor.nodes(editor, {
    match: n => n.bold === true,
    universal: true,
  });

  return !!match;
}

const isCodeBlockActive = (editor: Editor) => {
  // @ts-ignore
  const [match] = Editor.nodes(editor, {
    match: n => n.type === 'code',
  })

  return !!match
}

export const toggleBoldMark = (editor: Editor) => {
  const isActive = isBoldMarkActive(editor)
  Transforms.setNodes(
    editor,
    { bold: isActive ? null : true },
    { match: n => Text.isText(n), split: true }
  )
}

export const toggleCodeBlock = (editor: Editor) => {
  const isActive = isCodeBlockActive(editor)
  Transforms.setNodes(
    editor,
    { type: isActive ? null : 'code' },
    { match: n => Editor.isBlock(editor, n) }
  )
}

export const insertText = (editor: ReactEditor, text: string, prevSelection: Selection) => {
  editor.apply({
    type: 'insert_text',
    path: [0, 0],
    offset: 15,
    text: text,
  })

  ReactEditor.focus(editor);
  Transforms.setSelection(editor, prevSelection)
};