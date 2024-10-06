import React from 'react'

import '../../styles/modal.css'

type Props = {
    children: React.ReactNode // says: 'using jsx (children)'
}

const Modal = ({ children }: Props) => {
    
    const closeModal = (e: React.MouseEvent): void => {
        const modal = document.querySelector('#modal')
        modal!.classList.add('hide')
    }

    return (
        <div id='modal' className='hide'>
            <div className='fade' onClick={closeModal}></div>
            <div className='modal'>
                {children}
            </div>
        </div>
    )
}

export default Modal