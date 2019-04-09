import React from 'react'
import { DetailWrapper, Header, Content } from './style';
import { connect } from 'react-redux'
import { actions } from './store';
import { withRouter } from 'react-router-dom';
@withRouter
@connect(
	state => ({
		title: state.getIn(['detail', 'title']),
		content: state.getIn(['detail', 'content'])
	}),{
		getDetail:actions.getDetail
	}
)

class Detail extends React.PureComponent {
	componentDidMount(){
		// console.log(this.props.location.state.id)
		this.props.getDetail(this.props.location.state.id)
	}
	render() {
		return (
			<DetailWrapper>
				<Header>{this.props.title}</Header>
				<Content
					dangerouslySetInnerHTML={{ __html: this.props.content }}
				/>
			</DetailWrapper>
		)
	}
}
export default Detail