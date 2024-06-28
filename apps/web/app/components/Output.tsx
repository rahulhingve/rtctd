
import React, { useState } from 'react'
import { Button } from './button'
import { executeCode } from '../api';

import { ToastContainer,  toast,    } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Output = ({ editorRef, language }: any) => {
    
    
    
    const [output, setOutput] = useState<any>(null)
    const [loading, setLoading] = useState(false)
    const [isError, setIsError] = useState(false)



    const runCode = async () => {

        const sourceCode = editorRef.current.getValue();
        if (!sourceCode) return;
        try {
            setLoading(true)
            const { run: result } = await executeCode(language, sourceCode)
            setOutput(result.output.split("\n"));
            result.stderr ? setIsError(true) : setIsError(false);

        } catch (error) {
            
            console.log("error" +error);
           toast.error("" +error);
         
            


        } finally {
            setLoading(false)
        }
    }



   
    return (
        <div className='  p-2 '>
            <Button onClick={runCode}  span={ loading?<div className="animate-spin inline-block  size-4 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500" role="status" aria-label="loading">
  
  </div> :"Run Code" }  children="" />
            
            <ToastContainer />

            <div className={`${isError?"text-red-500":"text-blue-300"} p-2  ${isError?"border border-red-500":""}`}>

                {

                    output ? 
                    output.map((line:string,i:any)=><p key={i}>{line}</p>) : 'Click "Run Code" to see the output here '
                }
            </div>
        </div>
    )
}

export default Output