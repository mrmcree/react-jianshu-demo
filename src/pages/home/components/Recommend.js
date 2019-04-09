import React from 'react'
import { RecommendWrapper, RecommendItem } from '../style'
class Recommend extends React.PureComponent {
    render() {
        return (
            <RecommendWrapper>
                {this.props.recommendList.map((item) => {
                    return <RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')} />
                })}
            </RecommendWrapper>
        )
    }
}
export default Recommend
