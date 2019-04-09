import axios from 'axios';
import * as constants from './actionTypes';
const changeDetail = (title, content) => ({
	type: constants.CHANGE_DETAIL,
	title,
	content
});
export const getDetail = (id) => {
	return (dispatch) => {
		axios.get('/api/detail.json?id=' + id).then((res) => {
            const result = res.data.data.filter(item=>item.id===id);
			dispatch(changeDetail(result[0].title, result[0].content));
		}).catch(() => {
			
		})
	}
};