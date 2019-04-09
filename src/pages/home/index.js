import React from 'react'

import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    Banner,
    BackTop
} from './style'
import List from './components/List'
import { actions } from './store'
import { connect } from 'react-redux'
import Recommend from './components/Recommend';
import Referrer from './components/Referrer';
@connect(state => ({
    articleList: state.getIn(['home', 'articleList']),
    recommendList: state.getIn(['home', 'recommendList']),
    articlePage: state.getIn(['home', 'articlePage']),
    showScroll: state.getIn(['home', 'showScroll'])
}), {
        getList: actions.getList,
        getMore: actions.getMore,
        changeScroll:actions.changeScroll
    })
class Home extends React.PureComponent {
    componentDidMount() {
        this.props.getList()
        this.bindEvent()
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.props.changeScroll.bind(this,this.banner))
    }
    handleScroll() {
        window.scroll(0, 0)
    }
    bindEvent(){
        window.addEventListener('scroll',this.props.changeScroll.bind(this,this.banner))
    }
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <Banner ref={r=>{this.banner=r}}/>
                    <List
                        articleList={this.props.articleList}
                        getMore={this.props.getMore}
                        articlePage={this.props.articlePage}
                    />
                </HomeLeft>
                <HomeRight>
                    <Recommend recommendList={this.props.recommendList} />
                    <Referrer />
                </HomeRight>
                {this.props.showScroll ?
                    <BackTop onClick={this.handleScroll}>△</BackTop>
                    : null}
            </HomeWrapper>

        )
    }
}
export default Home