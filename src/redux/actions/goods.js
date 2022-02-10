import axios from 'axios';

export const fetchGoods = (sortBy, category) => (dispatch) => {
  dispatch(setLoaded(false))
  axios.get(`/goods?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`).then(({ data }) => {
    dispatch(setGoods(data))
  })

};
export const setLoaded = (bool) => ({
  type: 'SET_LOADED',
  payload: bool,
});
export const setGoods = (items) => ({
  type: "SET_GOODS",
  payload: items
})