// src/extensions/Hashtag.js
import { Node, mergeAttributes } from '@tiptap/core';

const Hashtag = Node.create({
  name: 'hashtag',

  group: 'inline',

  inline: true,

  selectable: false,

  atom: true,

  parseHTML() {
    return [
      {
        tag: 'span[data-hashtag]',
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ['span', mergeAttributes(HTMLAttributes, { 'data-hashtag': '' }), 0];
  },

  addAttributes() {
    return {
      text: {
        default: null,
      },
    };
  },

  addInputRules() {
    return [
      {
        expression: /#(\w+)/,
        handler: ({ state, match, range }) => {
          const [fullMatch, text] = match;
          const transaction = state.tr.replaceWith(
            range.from,
            range.to,
            this.type.create({ text })
          );
          return transaction;
        },
      },
    ];
  },
});

export default Hashtag;
