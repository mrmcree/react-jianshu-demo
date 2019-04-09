import React from 'react';
import { connect } from 'react-redux';
import { actions } from '../accountStore'
import { LoginWrapper, LoginBox, Input, Button } from './style';
@connect(state => ({
    logined: state.getIn(['account', 'logined'])
}), {
        login: actions.login
    })
class Login extends React.Component {
    constructor(props){
        super(props)
        this.setToken=this.setToken.bind(this)
    }
    setToken(account,password) {
        let token = this.props.logined
        if (token || sessionStorage.getItem('account')) return
        let RedirectUrl = this.props.location.state ? this.props.location.state.from.pathname : '/'
        let state=this.props.location.state ? this.props.location.state.from.state : ''
        this.props.login(account,password)
       
        this.props.history.push({
            pathname:RedirectUrl,
            state:state
        })
      }
    render() {
        
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder='账号' ref={(input) => { this.account = input }} />
                        <Input placeholder='密码' type='password' ref={(input) => { this.password = input }} />
                        <Button onClick={() => { this.setToken(this.account.value, this.password.value) }}>登陆</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        

    }
}
export default Login