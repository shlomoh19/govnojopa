import React, {useEffect, useRef, useState} from 'react'
import './Modal.scss'

const Modal = ({show, closeModal, title, children}) => {
    const [unmount, setUnmount] = useState(false)

    useEffect(() => {
        if (show) {
            document.body.style.overflow = 'hidden'
            window.addEventListener('keydown', event => {
                if (event.keyCode === 27) {
                    closeModal()
                }
            })
            setUnmount(false)
        }
        if (!show) {
            document.body.style.overflow = 'auto'
            window.removeEventListener('keydown', event => {
                if (event.keyCode === 27) {
                    closeModal()
                }
            })
            setTimeout(() => {
                setUnmount(true)
            }, 300)
        }
    }, [show])

    const modalRef = useRef()

    const closeModalFromOverlay = e => {
        if (e.target == modalRef.current) return
        closeModal()
    }
    return (
        <>
            <div
                className={show ? "overlay overlay-active" : "overlay"}
                onClick={closeModalFromOverlay}
            />
            <div ref={modalRef} className={show ? "terms_wrapper terms_wrapper-open" : "terms_wrapper"}>
                <div className="terms_wrapper-title">
                    <span className="terms_wrapper-title-name">{title}</span>
                    <i onClick={closeModal} className="fas fa-times x-icon"/>
                </div>
                {!unmount && children}
                <div className="terms_footer">
                    <button className="terms_button" type="button" onClick={closeModal}>Close</button>
                </div>
            </div>
        </>
    )
}

export default Modal
