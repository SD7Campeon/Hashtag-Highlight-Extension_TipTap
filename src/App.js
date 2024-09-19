import React, { useContext } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import { StarterKit } from '@tiptap/starter-kit';
import Hashtag from './extensions/Hashtag';
import { HashtagContext } from './context/HashtagContext';
import './App.scss';

const TiptapEditor = () => {
  const { popularHashtags } = useContext(HashtagContext);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Hashtag.extend({
        renderHTML({ node }) {
          const { text } = node.attrs;
          const isPopular = popularHashtags.includes(`#${text}`);
          return [
            'span',
            {
              'data-hashtag': '',
              style: isPopular
                ? 'color: gold; font-weight: bold;'
                : 'color: #1da1f2; font-weight: normal;',
            },
            `#${text}`,
          ];
        },
      }),
    ],
    content: '<p>Start typing #hashtags!</p>',
  });

  const addHashtag = (hashtag) => {
    editor.chain().focus().insertContent(`#${hashtag} `).run();
  };

  return (
    <div className="editor-container">
      <EditorContent editor={editor} />
      <div className="hashtag-buttons">
        {popularHashtags.map((hashtag) => (
          <button key={hashtag} onClick={() => addHashtag(hashtag)}>
            {hashtag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TiptapEditor;
