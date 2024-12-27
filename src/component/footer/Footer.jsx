import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faCopyright } from '@fortawesome/free-regular-svg-icons';

export default function Footer() {
  return (
     <>
     <footer className='text-center p-2 bg-secondary  fw-bold fs-5 d-'>
       2024
       <FontAwesomeIcon icon={faCopyright} /> rahmeh daraghmeh

     </footer>
     </>
  )
}
