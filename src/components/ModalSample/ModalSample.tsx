import * as React from 'react'
import { useState } from 'react'
import Modal from '../../library-components/Modal/Modal'

export interface ModalSampleProps {
    
}
 
const ModalSample: React.SFC<ModalSampleProps> = () => {
    const [displayModal, setDisplayModal] = useState(false)
    return (
        <div>
            <button onClick={() => setDisplayModal(true)}>Show Modal</button>
            {displayModal && (
                <Modal onModalClose={() => setDisplayModal(false)}>
                    <p>This is modal</p>
                </Modal>
            )}
        </div>
    )
}
 
export default ModalSample;