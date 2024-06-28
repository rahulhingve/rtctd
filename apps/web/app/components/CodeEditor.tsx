'use client'
import React, { useRef, useState } from 'react'
import Editor from '@monaco-editor/react';
import LanguageSelector from './LanguageSelector';
import { CODE_SNIPPETS } from '../../constants';

const CodeEditor = () => {
  const editorRef = useRef()
  const [value, setValue] = useState('')
  const [language, setLanguage] = useState('javascript')

  const onMount = (editor: any) => {
    editorRef.current = editor;
    editor.focus()
  }

  const onSelect = (language:any)=>{
    setLanguage(language)
    setValue(
      CODE_SNIPPETS[language] 
    )
  }

  return (
    <div>
     <LanguageSelector language={language} onSelect={onSelect}/>
      <div>
      
        <Editor  theme='vs-dark' height="90vh" language={language} defaultValue="// some comment" onMount={onMount} value={value} onChange={(value: any) => setValue(value)} />;
      </div>


    </div>
  )
}

export default CodeEditor