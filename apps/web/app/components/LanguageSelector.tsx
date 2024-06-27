
import React from 'react'

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'



import { LANGUAGE_VERSIONS } from '../../constants'

const languages = Object.entries(LANGUAGE_VERSIONS)
const ACTIVE_COLOR = "blue";

const LanguageSelector = ({language,onSelect}:any) => {
    return (
        <div className="bg-[#1e1e1e]  flex text-right">
        <Menu>
          <MenuButton className="inline-flex items-center gap-2 rounded-md bg-gray-800 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/5 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1 ">
            {language}
           
          </MenuButton>
  
          <MenuItems
            transition
            anchor="bottom end"
            className="w-52 origin-top-right rounded-xl border border-white/10 bg-white/5 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
          >
           
           {
            languages.map(([lang,version])=>(
                <MenuItem  key={lang}><button onClick={()=> onSelect(lang)} className={`group flex w-full text-${lang===language?ACTIVE_COLOR:""}-700 items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10`} >
               
               {lang} &nbsp; <span className='bg-gray-800'>
                {version}
               </span>
             
              </button>
               
                
                </MenuItem>
            ))
           }
          </MenuItems>
        </Menu>
      </div>
      
    )
}

export default LanguageSelector