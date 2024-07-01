'use client'
import React, { useRef, useState } from 'react'
import Editor from '@monaco-editor/react';
import LanguageSelector from './LanguageSelector';
import { CODE_SNIPPETS } from '../../constants';
import Output from './Output';
import * as Y from "yjs";
import { WebrtcProvider } from 'y-webrtc';
import { MonacoBinding } from 'y-monaco';

const CodeEditor = () => {
  const editorRef = useRef()
  const [value, setValue] = useState('')
  const [language, setLanguage] = useState('Select Language')
  const docRef = useRef();
  const providerRef = useRef();

  const onMount = (editor: any, monaco: any) => {
    editorRef.current = editor;
    editor.focus()

    // Yjs to handle all steps here
    const doc = new Y.Doc();
    const provider = new WebrtcProvider("room", doc);
    const type = doc.getText("monaco");
    const binding = new MonacoBinding(type, editorRef.current?.getModel(),new Set([editorRef.current]),provider.awareness);


    docRef.current = doc;
    providerRef.current = provider;

 
    const languageMap = doc.getMap('language');

    languageMap.observe(() => {
      const sharedLanguage = languageMap.get('language');
      if (sharedLanguage && sharedLanguage !== language) {
        setLanguage(sharedLanguage);
        setValue(CODE_SNIPPETS[sharedLanguage]);
      }
    });

    
    languageMap.set('language', language);

    
console.log(provider.awareness);
  }

  const onSelect = (selectedLanguage: any) => {
    setLanguage(selectedLanguage)

    setValue(

      CODE_SNIPPETS[selectedLanguage]
    )
    if (docRef.current) {
      const languageMap = docRef.current.getMap('language');
      languageMap.set('language', selectedLanguage);
    }
  }

  return (
    <div className=' flex bg-[#333]'>



      <div className='w-[60%] h-screen ' >
        <LanguageSelector language={language} onSelect={onSelect} />
        <Editor theme='vs-dark' height="95vh" language={language} defaultValue={CODE_SNIPPETS[language]} onMount={onMount} value={value} onChange={(value: any) => setValue(value)} />
      </div>
      <div className='w-[40%] h-screen bg-[#333]'>
        <Output editorRef={editorRef} language={language} />
      </div>



    </div>
  )
}

export default CodeEditor