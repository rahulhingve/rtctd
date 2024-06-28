'use client'
import React, { useRef, useState } from 'react'
import Editor from '@monaco-editor/react';
import LanguageSelector from './LanguageSelector';
import { CODE_SNIPPETS } from '../../constants';
import Output from './Output';

const CodeEditor = () => {
  const editorRef = useRef()
  const [value, setValue] = useState('')
  const [language, setLanguage] = useState('javascript')

  const onMount = (editor: any) => {
    editorRef.current = editor;
    editor.focus()
  }

  const onSelect = (language:any) => {
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