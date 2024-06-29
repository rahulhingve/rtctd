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
  const [language, setLanguage] = useState('javascript')

  const onMount = (editor: any, monaco: any) => {
    editorRef.current = editor;
    editor.focus()

    // Yjs to handle all steps here
    const doc = new Y.Doc();
    const provider = new WebrtcProvider("room", doc);
    const type = doc.getText("monaco");
    const binding = new MonacoBinding(type, editorRef.current?.getModel(),new Set([editorRef.current]),provider.awareness);

console.log(provider.awareness);
  }

  const onSelect = (language: any) => {
    setLanguage(language)

    setValue(

      CODE_SNIPPETS[language]
    )
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