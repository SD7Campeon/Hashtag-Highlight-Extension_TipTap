import { Node } from '@tiptap/core';
import Hashtag from '../extensions/Hashtag';

describe('Hashtag Extension', () => {
  it('correctly parses hashtags', () => {
    const editorState = Hashtag.create();
    const content = '#Hello';
    const parsedContent = editorState.addInputRules()[0].expression.exec(content);
    
    expect(parsedContent[0]).toBe('#Hello');
  });
});
