import styled from 'styled-components'
export const HomeWrapper=styled.div`
    padding-top:30px;
    overflow:hidden;
    display:flex;
`
export const HomeLeft=styled.div`
    flex-basis:60%;
    margin-right:5%;

`
export const HomeRight=styled.div`
    flex-basis:30%;
`
export const Banner=styled.img.attrs({
    src:'https://upload.jianshu.io/admin_banners/web_images/4592/22f5cfa984d47eaf3def6a48510cc87c157bf293.png?imageMogr2/auto-orient/strip%7CimageView2/1/w/1250/h/540'
})`

    width:100%;
    border-radius:15px;
    height:270px;
    margin-bottom:15px;
`
export const ListItem = styled.div`
	overflow: hidden;
	padding: 20px 0;
	border-bottom: 1px solid #dcdcdc;
    display:flex;
	.pic {
		display: block;
		width: 125px;
		height: 100px;
		flex-basis:125px;
		border-radius: 10px;
	}
`;

export const ListInfo =	styled.div`
	width: 500px;
	flex-basis:500px;
	.title {
		line-height: 27px;
		font-size: 18px;
		font-weight: bold;
		color: #333;
		cursor: pointer;
		&:hover{
			text-decoration: underline;

		}
	}
	.desc {
		line-height: 24px;
		font-size: 13px;
		color: #999;
        text-overflow:ellipsis;
	}
`;
export const RecommendWrapper = styled.div`
	margin: 0 0 30px 0;
	width: 280px;
`;

export const RecommendItem = styled.a`
	width: 280px;
	height: 50px;
	display: block;
	cursor: pointer;
	background: url(${(props) => props.imgUrl});
	background-size: contain;
	margin-bottom:6px;
`;
export const LoadMore = styled.div`
	width: 100%;
	height: 40px;
	line-height: 40px;
	margin: 30px 0;
	background: #a5a5a5;
	text-align:center;
	border-radius: 20px;
	color: #fff;
	cursor: pointer;
`;

export const BackTop = styled.div`
	position: fixed;
	right: 100px;
	bottom: 100px;
	width: 60px;
	height: 60px;
	line-height: 60px;
	text-align: center;
	border: 1px solid #ccc;
	font-size: 14px;
	cursor: pointer;
	user-select:none;
`