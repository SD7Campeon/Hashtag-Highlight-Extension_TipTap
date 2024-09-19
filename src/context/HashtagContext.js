// src/context/HashtagContext.js
import React, { createContext, useState, useEffect } from 'react';
import hashtagsData from '../data/hashtags.json';

export const HashtagContext = createContext();

export const HashtagProvider = ({ children }) => {
  const [popularHashtags, setPopularHashtags] = useState([]);

  useEffect(() => {
    // Simulate async loading of hashtags
    const loadHashtags = async () => {
      // Simulating an API call here
      setPopularHashtags(hashtagsData.popularHashtags);
    };
    
    loadHashtags();
  }, []);

  return (
    <HashtagContext.Provider value={{ popularHashtags, setPopularHashtags }}>
      {children}
    </HashtagContext.Provider>
  );
};
