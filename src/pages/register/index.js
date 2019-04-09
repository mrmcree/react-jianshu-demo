import React from 'react'
// import { Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';
import { LoginWrapper, LoginBox, Input, Button } from '../login/style';
class Login extends React.PureComponent {
    render() {
        return (
            <LoginWrapper>
            <LoginBox>
                <Input placeholder='账号'/>
                <Input placeholder='密码' type='password'/>
                <Input placeholder='确认密码' type='password'/>
                <Button>注册</Button>
            </LoginBox>
        </LoginWrapper>
        )
    }
}
export default Login