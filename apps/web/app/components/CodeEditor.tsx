'use client'
import React, { useRef, useState } from 'react';
import Editor from '@monaco-editor/react';
import LanguageSelector from './LanguageSelector';
import { CODE_SNIPPETS } from '../../constants';
import Output from './Output';
import * as Y from 'yjs';
import { WebrtcProvider } from 'y-webrtc';
import { MonacoBinding } from 'y-monaco';

// Utility function to generate unique room ID
const generateRoomId = () => {
  return 'room_' + Math.random().toString(36).substr(2, 9);
};

const CodeEditor = () => {
  const editorRef = useRef(null);
  const [value, setValue] = useState('');
  const [language, setLanguage] = useState('Select Language');
  const [roomId, setRoomId] = useState('');
  const docRef = useRef(null);
  const providerRef = useRef(null);
  const bindingRef = useRef(null);

  const initializeEditor = (roomId) => {

    const doc = new Y.Doc();
    const provider = new WebrtcProvider(roomId, doc);



    const type = doc.getText('monaco');
    const binding = new MonacoBinding(type, editorRef.current?.getModel(), new Set([editorRef.current]), provider.awareness);


    docRef.current = doc;
    providerRef.current = provider;
    bindingRef.current = binding;

    const languageMap = doc.getMap('language');
    languageMap.observe(() => {
      const sharedLanguage = languageMap.get('language');
      if (sharedLanguage && sharedLanguage !== language) {
        setLanguage(sharedLanguage);
        setValue(CODE_SNIPPETS[sharedLanguage]);

      }
    });

    languageMap.set('language', language);

  };

  const onMount = (editor, monaco) => {
    editorRef.current = editor;
    editor.focus();
    if (roomId) {
      initializeEditor(roomId);
    }
  };

  const onSelect = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    setValue(CODE_SNIPPETS[selectedLanguage]);
    if (docRef.current) {
      const languageMap = docRef.current.getMap('language');
      languageMap.set('language', selectedLanguage);

    }
  };

  const onJoinRoom = (newRoomId) => {

    if (providerRef.current) {
      providerRef.current.destroy();
    }

    setRoomId(newRoomId);
    initializeEditor(newRoomId);
  };

  const onCreateRoom = () => {
    const newRoomId = generateRoomId();

    setRoomId(newRoomId);
    if (providerRef.current) {
      providerRef.current.destroy();
    }
    initializeEditor(newRoomId);
  };

  return (
    <div className='flex bg-[#333]'>
      <div className='w-[60%] h-screen'>
        <LanguageSelector
          language={language}
          onSelect={onSelect}
          roomId={roomId}
          onJoinRoom={onJoinRoom}
          onCreateRoom={onCreateRoom}
        />
        <Editor
          theme='vs-dark'
          height="95vh"
          language={language}
          defaultValue={CODE_SNIPPETS[language]}
          onMount={onMount}
          value={value}
          onChange={(value) => setValue(value)}
        />
      </div>
      <div className='w-[40%] h-screen bg-[#333]'>
        <Output editorRef={editorRef} language={language} />
      </div>
    </div>
  );
};

export default CodeEditor;
