import * as React from 'react'

import './Modal.scss'

export interface ModalProps {
    onModalClose: () => void
    children?: React.ReactNode
}
 
const Modal: React.SFC<ModalProps> = (props: ModalProps) => {
    const { onModalClose, children } = props
    return (
        <div className="modal">
            <div className="modal-content">
                <button onClick={onModalClose} className="modal-close">
                    <span>&times;</span>
                </button>
                {children}
            </div>
        </div>
    )
}
 
export default Modal