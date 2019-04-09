import React from 'react'
import { ListItem, ListInfo, LoadMore } from '../style';
import { Link } from 'react-router-dom'
class List extends React.PureComponent {
    render() {
        const { articleList, articlePage } = this.props
        return (
            <div>
                {articleList.map((item, index) => {
                    return (

                        <ListItem key={index}>
                            <ListInfo>
                                <Link to={{ pathname: './detail', state: { id: item.get('id') } }}>
                                    <div className='title'>{item.get('title')}</div>
                                </Link>
                                <div className='desc'>{item.get('desc')}</div>
                            </ListInfo>
                            <img alt='banner' className='pic' src={item.get('imgUrl')} loading="lazy"></img>
                        </ListItem>

                    )
                })}
                <LoadMore onClick={() => this.props.getMore(articlePage)}>获取更多</LoadMore>
            </div>

        )
    }
}
export default List