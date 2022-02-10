const initialState = {
  items: {},
  totalPrize: 0,
  totalCount: 0,
}
const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0)

const _get = (obj, path) => {
  const [firstKey, ...keys] = path.split('.')
  return keys.reduce((val, key) => {
    return val[key];
  }, obj[firstKey])
}

const getTotalSum = (obj, path) => {
  return Object.values(obj).reduce((sum, obj) => {
    const value = _get(obj, path);
    return sum + value
  }, 0)
}

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_GOODS_CART': {
      const currentGoodsItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];

      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentGoodsItems,
          totalPrize: getTotalPrice(currentGoodsItems)
        }
      }

      const totalCount = getTotalSum(newItems, 'items.length')
      const totalPrize = getTotalSum(newItems, 'totalPrize')
      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrize,
      };
    }

    case 'CLEAR_CART': {
      return {
        items: {},
        totalPrize: 0,
        totalCount: 0,
      }
    }
    case 'PLUS_CART_ITEM': {
      const newObjItems = [
        ...state.items[action.payload].items,
        state.items[action.payload].items[0]
      ];
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrize: getTotalPrice(newObjItems)
        }
      }
      const totalCount = getTotalSum(newItems, 'items.length')
      const totalPrize = getTotalSum(newItems, 'totalPrize')
      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrize

      }
    }
    case 'MINUS_CART_ITEM': {
      const oldItems = state.items[action.payload].items
      const newObjItems = oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems;

      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrize: getTotalPrice(newObjItems)
        }
      }
      const totalCount = getTotalSum(newItems, 'items.length')
      const totalPrize = getTotalSum(newItems, 'totalPrize')

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrize
      }
    }


    case 'REMOVE_CART_ITEM': {
      const newItems = {
        ...state.items
      }
      const currentTotlPrice = newItems[action.payload].totalPrize
      const currentTotalCount = newItems[action.payload].items.length
      delete newItems[action.payload]
      return {
        ...state,
        items: newItems,
        totalPrize: state.totalPrize - currentTotlPrice,
        totalCount: state.totalCount - currentTotalCount,
      }
    }

    default:
      return state;
  }
}

export default cart