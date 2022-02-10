import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames';

const Botton = ({ onClick, outline, children, className }) => {
    return (
        <button onClick={onClick} className={classNames('button', className, {
            'button--outline': outline,
        })}>
            {children}
        </button>
    )
}



export default Botton

