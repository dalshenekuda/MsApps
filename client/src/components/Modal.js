import React from 'react';

// abstract component to create different models (pop up)
const Modal = ({children, visible, closeModal}) => {
    const classes = ['modal']
    if (!visible) {
        classes.push('hide')
    } else {
        if (classes.includes('hide')) {
            classes.splice(classes.indexOf('hide'), 1)
        }
    }
    //if user clicks to some area except model, model will be closed
    const closeHandler = (e) => {
        if (e.target.classList.contains('modal')){
            closeModal(false)
        }
    }
    return (
        <div className={classes.join(' ')} onClick={(e) => closeHandler(e)}>
           {children}
        </div>
    );
};

export default Modal;