// src/App.js
import React, { useEffect, useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import { StarterKit } from '@tiptap/starter-kit';
import Hashtag from './extensions/Hashtag';
import './App.scss';
import hashtagsData from './data/hashtags.json';

const TiptapEditor = () => {
  const [popularHashtags, setPopularHashtags] = useState([]);

  useEffect(() => {
    // Fetching hashtags from the JSON file
    setPopularHashtags(hashtagsData.popularHashtags);
  }, []);

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
    content: '<p>Type hashtags like #React, #JavaScript, or #TipTap.</p>',
  });

  return (
    <div className="editor-container">
      <EditorContent editor={editor} />
    </div>
  );
};

export default TiptapEditor;
