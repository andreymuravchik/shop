import React from 'react';
import { useEffect, useState, useRef, } from 'react';
import Categories from '../components/Categories';
import Goods from '../components/Goods';
import Sort from '../components/Sort';
import GoodsLoadingBlock from '../components/GoodsLoadingBlock';
import { fetchGoods } from '../redux/actions/goods'
import { useSelector, useDispatch } from 'react-redux'
import { setCategor, setSortBy } from '../redux/actions/filters'
import { addGoodstoCart } from '../redux/actions/cart'

const catesories = ['Бумага', 'Скотч', 'Ручки', 'Дневники', 'Другое'];
const sort = [
  { name: 'популярности', type: 'popular', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавиту', type: 'name', order: 'asc' }
];

const Home = () => {

  const dispatch = useDispatch()
  const items = useSelector(({ goods }) => goods.items)
  const cartItems = useSelector(({ cart }) => cart.items)
  const isLoaded = useSelector(({ goods }) => goods.isLoaded)
  const { category, sortBy } = useSelector(({ filters }) => filters)


  useEffect(() => {
    dispatch(fetchGoods(sortBy, category))
  }, [category, sortBy])

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategor(index))
  }, [])
  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type))
  }, [])

  const handleAddGoodsToCart = obj => {
    console.log(obj)
    dispatch(addGoodstoCart(obj))
  }


  return (

    <div className="container">
      <div className="description">
        <p className='title'>Интернет-магазин «Канцмарт»</p>
        <div className='subtitle'>
          <p>Добро пожаловать в интернет магазине "Канцмарт". Компания работает на рынке канцтоваров с 2005 года, занимается реализацией</p>
          <p>канцелярии для офиса, школы, товаров для художественного творчества в розницу и оптом.</p>
        </div>
      </div>
      <div className="options">
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={catesories} />
        <Sort
          items={sort}
          acttiveSortType={sortBy.type}
          onClickSortType={onSelectSortType} />
      </div>

      <div className="goods">
        {isLoaded ? items &&
          items.map((item, index) => {
            return (
              <Goods
                key={`${item.name}_${index}`}
                addedCount={cartItems[item.id] && cartItems[item.id].items.length}
                {...item}
                onClickAddGoods={handleAddGoodsToCart} />
            )
          })
          : Array(10).fill(0).map((_, index) => <GoodsLoadingBlock key={index} />)
        }
      </div>

    </div>

  )
}
export default Home


