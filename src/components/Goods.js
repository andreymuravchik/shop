import React from 'react'
import { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types'


import Botton from './Bottons/Botton';




const Goods = ({ id, art, name, price, types, onClickAddGoods, addedCount, img }) => {


  const typesName = ['замовывоз', 'доставка']
  const [activeType, setActiveType] = useState(types[0])

  const onSelecnTipe = (index) => {
    setActiveType(index)
  }

  const onAbbGoods = () => {

    const obj = {
      id,
      name,
      img,
      price,
      art
      /*  type: typesName[activeType] */
    }

    onClickAddGoods(obj)
  }


  return (

    <div className="goods__card">
      <div className="goods__inner">
        <div className="goods__img">
          <img src={img} alt="" />
        </div>
        <div className="goods__content">
          <div className="goods__categor"></div>
          <div className="goods__name">{name}</div>
          <div className="goods__priceblock">
            {/*   <div className="goods__deliverys">
              {typesName.map((item, index) => {
                return (
                  <div key={index} onClick={() => onSelecnTipe(index)}
                    className={classNames({
                      active: activeType === index,
                      disabled: !types.includes(index),

                    })}>
                    {item}</div>
                )
              })}

            </div> */}
            <div className="goods__art">{art}</div>
            <div className="goods__price">{price} грн</div>
            <div className="goods__rating"></div>

          </div>
          <Botton onClick={onAbbGoods} className='button--add' outline>
            Add
            {addedCount &&
              <i>{addedCount}</i>
            }

          </Botton>

        </div>
      </div>
    </div >

  )
}

Goods.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  types: PropTypes.arrayOf(PropTypes.number).isRequired,
  onClickAddGoods: PropTypes.func,
  addedCount: PropTypes.number
}

Goods.defaultProps = {
  name: '---',
  price: 0,
  types: [],

};

export default Goods
