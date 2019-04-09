import * as actionTypes from './actionTypes';
import axios from 'axios'
import { fromJS } from 'immutable'
const changHomeData = (result) => ({
	type: actionTypes.CHANGE_HOME_DATA,
	articleList: result.articleList,
	recommendList: result.recommendList
});
const addHomeList = (list, nextPage) => ({
	type: actionTypes.ADD_ARTICLE_LIST,
	list: fromJS(list),
	nextPage
})
const toggleScroll=(show)=>({
	type:actionTypes.TOGGLE_SHOW_SCROLL,
	show
})
export const getList = () => {
	return (dispatch) => {
		axios.get('/api/home.json').then((res) => {
			if (res.data.success) {
				const result = res.data.data;
				dispatch(changHomeData(result));
			}
		});
	}
}
export const getMore = (page) => {
	return (dispatch) => {
		axios.get('/api/homeList.json?page=' + page).then((res) => {
			const result = res.data.data
			dispatch(addHomeList(result, page + 1))
		})
	}
}
export const changeScroll=(e)=>{
	return (dispatch)=>{
		if(document.documentElement.scrollTop>e.offsetTop+e.getBoundingClientRect().height){
			dispatch(toggleScroll(true))
		}else{
			dispatch(toggleScroll(false))
		}
	}
}
