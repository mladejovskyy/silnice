'use client'
import React, {useEffect} from 'react';
import './Modal.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Modal = ({isOpen, onClose, imageUrl}) => {
    // Close the modal when clicking outside of it
    const handleClickOutside = (event) => {
        if (event.target.className === 'modal-overlay') {
            onClose();
        }
    };

    // Close the modal when pressing the "Esc" key
    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            onClose();
        }
    };

    // Add event listeners for clicks and key presses
    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('keydown', handleKeyDown);
        }
        // Cleanup event listeners when the modal is closed
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen]);

    if (!isOpen) {
        return null;
    }

    return (
        <dialog className="modal-overlay">
            <div className="modal-content flex justify-center items-center" data-aos='zoom-in-up' data-aos-once='true'>
                <button className="modal-close mr-4 mt-2" onClick={onClose}>×</button>
                <img src="/images/mapapusobnosti.webp" alt="..." draggable="false" loading="lazy" placeholder="blur"/>
            </div>
        </dialog>
    );
};

export default Modal;
