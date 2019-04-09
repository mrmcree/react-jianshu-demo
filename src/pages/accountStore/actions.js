import * as constants from './actionTypes';
export const login=(account,password)=>{
	return(dispath)=>{
		const action={
			type:constants.LOGIN_SUCCESS,
			account
		}
		sessionStorage.setItem('account',account)
		dispath(action)
		
	}
}
export const logout=(account,password)=>{
	return(dispath)=>{
		const action={
			type:constants.LOGOUT_SUCCESS
		}
		sessionStorage.setItem('account','')
		dispath(action)
	}
}