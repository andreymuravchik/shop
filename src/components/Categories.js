import React, { useState } from 'react'
import BottonCat from './Bottons/BottonCat'
import PropTypes from 'prop-types'

const Categories = React.memo(({ activeCategory, items, onClickCategory }) => {

    return (

        <div className="categories">
            <ul className="categories__list">
                <li className={activeCategory === null ? 'active' : ''}
                    onClick={() => onClickCategory(null)} >All</li>
                {items &&
                    items.map((item, index) => {
                        return (
                            <li onClick={() => onClickCategory(index)}
                                key={`${item}_${index}`}
                                className={activeCategory === index ? 'active' : ''} >
                                {item}
                            </li>
                        )
                    })
                }
            </ul>
        </div >

    )
}
)
Categories.defaultProps = {
    items: [],
    activeCategory: null
}
export default Categories
