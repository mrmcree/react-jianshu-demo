import React, { Fragment } from 'react'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Button,
    SearchInfo,
    SerachWrapper,
    NavRight
} from './style'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { actions } from './store'
import { Link } from 'react-router-dom'
import { actions as accountAction } from '../../pages/accountStore'
import {ThemeProvider} from 'styled-components'
import {
    theme1,
 } from '../../base/colors'
@connect(state => (
    {
        focused: state.getIn(['header', 'focused']),
        logined: state.getIn(['account', 'logined']),
        userName:state.getIn(['account','userName'])
    }),
    {
        handleBlur: actions.handleBlur,
        handleFocus: actions.handleFocus,
        logout: accountAction.logout
    })
class Header extends React.PureComponent {
    constructor(props){
        super(props)
        this.state={
            theme:theme1
        }
        this.changeSkin=this.changeSkin.bind(this)
       
    }
    changeSkin(color){
        var obj=Object.assign({},this.state.theme2,{orangeColor:color.value,logoColor:color.value})
        this.setState({
            theme:obj
        })
    }
    render() {
        const { focused, handleFocus, handleBlur, logout,userName } = this.props
        return (
            <ThemeProvider theme={this.state.theme}>
                <HeaderWrapper>
                <Logo>
                <svg width='100px' height='58px' xmlns="http://www.w3.org/2000/svg" viewBox="0 -2 46.36 41.12"><g><g><path fill="#ff2351" d="M39.41 21.11v-4.95h2.52V0H30.41v15.64l2.21 2.95.31.4v3.35l-2.52-3.35-.31-.4L16.09 0H7.57v2.48H5.04v11.21H0v2.47h10.09v2.48H2.52v2.47h2.52v2.48H2.52v13.53H14.1V14.88l2.52 3.33v3.34l11.79 15.57H39.41V21.11zM2.57 0h2.48v2.47H2.57z"/><path fill="#00d8eb" d="M46.88 23.59h2.47v2.47h-2.47zM41.93 21.11h4.95v-2.47H39.41v-2.48h5.05V0H32.93v18.99l-.31-.4-2.21-2.95L18.62 0H7.57v16.16h2.52v2.48H5.04v18.48h14.45v-2.48h-2.87V18.21l.29.38 14.03 18.53H41.93V21.11z"/><path fill={this.state.theme.logoColor} d="M41.93 0h-9v22.34l-2.52-3.35-.31-.4L16.09 0H7.57v16.16h2.52v2.48H5.04v18.48H14.1V14.88l2.52 3.33.29.38 14.03 18.53H39.41V16.16h2.52V0z"/></g></g>
                
                </svg>
                </Logo>
                <Nav>
                    <Link to='/'>
                        <NavItem className='home'>首页</NavItem>
                    </Link>
                    <NavItem>下载</NavItem>
                    <SerachWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={2000}
                            classNames='slider'
                        >
                            <NavSearch
                                onFocus={handleFocus}
                                className={focused ? 'focused' : ''}
                                onBlur={handleBlur}
                            />

                        </CSSTransition>
                    </SerachWrapper>


                    <SearchInfo />
                </Nav>
                <NavRight>
                    <input type='color' ref={(input) => { this.color = input }} onChange={()=>{this.changeSkin(this.color)}} placeholder='换肤'/>
                    {this.props.logined ?
                        <Fragment> 
                            <NavItem className='left'>{userName}</NavItem>
                            <Button onClick={logout} className='left'>退出</Button>
                        </Fragment>
                        :
                        <Fragment>
                            <Link to='login'>
                                <NavItem className='left'>登陆</NavItem>
                            </Link>
                            <Link to='register'>
                                <Button className='left register'>注册</Button>
                            </Link>
                        </Fragment>

                    }
                    <Button className='write'>写文章</Button>

                </NavRight>
            </HeaderWrapper>
                </ThemeProvider>
            

        )
    }
}
export default Header