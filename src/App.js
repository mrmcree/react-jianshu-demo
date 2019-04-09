import React, { Fragment } from 'react';
import { GlobalStyle } from './style'
import {
  Route,
  Switch,
  Redirect,
  withRouter
} from 'react-router-dom'
import { connect } from 'react-redux'
import Header from './common/header'
import NotFound from './pages/notFound';
import Routers from './router'
import { actions } from './pages/accountStore'

@withRouter
@connect(state => ({
  token: state.getIn(['account', 'logined'])
}), {
    login: actions.login
  })
class App extends React.PureComponent {
  constructor(props) {
    super(props)

  }
  componentWillMount() {
    let { login } = this.props
    let account = sessionStorage.getItem('account')
    if (account) {
      login(account)
    }
  }
  render() {
    let token = this.props.token || sessionStorage.getItem('account')
    console.log(token)
    return (
      <Fragment>
        <GlobalStyle />
       
          <Header />
          <div className='wrapper'>
             
                 <Switch >
                  {Routers.map((item, index) => {
                    return <Route key={index} path={item.path} exact render={props =>
                      (!item.auth ?
                        (<item.component {...props} />)
                        : (token ? <item.component {...props} />
                          :
                          <Redirect to={{ pathname: '/login', state: { from: this.props.location, state: this.props.location.state } }} />)
                      )} />
                  })}
                  <Route component={NotFound} />
                </Switch>
    
          </div>
        
      </Fragment>


    );
  }
}
export default App;
