import styled from 'styled-components'
const logoUrl = 'https://cdn2.jianshu.io/assets/web/nav-logo-4c7bbafe27adc892f3046e6978459bac.png'
export const HeaderWrapper = styled.div`

    width:100%;
    height:56px;
    overflow:hidden;
    position: fixed;
    right: 0;
    left: 0;
    display:flex;
    background:#fff;
    z-index:2019;
    border-bottom:1px solid #f0f0f0;
`
export const Logo = styled.a.attrs({
    href: './'
})`
    margin-left:calc(20% - 100px);
    height: 56px;
    width:100px;
    line-height:56px;
    color:rgb(255, 35, 81);
    padding: 0;
    /* background:url(${logoUrl}) center center;
    background-size:contain; */
`
export const NavRight = styled.div`
    width:200px;
    flex-basis:21%;
    /* display: flex; */
`
export const Nav = styled.div`
    height:100%;
    line-height:56px;
    flex-basis:60%;
    
`
export const NavItem = styled.div`
    padding:0 15px;
    font-size:17px;
    line-height:56px;
    text-decoration:none;
    cursor: pointer;
    color:#333;
    display: inline-block;
    &.left{
        display: inline-block;
        color:${props=>props.theme.grayColor};
        width:50px;
    }
    &.home{
        color:${props=>props.theme.orangeColor};
    }
`
export const Button = styled.div`
    cursor: pointer;
    border-radius:20px;
    padding:0 20px;
    line-height:38px;
    margin-top:9px;
    margin-right:10px;
    text-align:center;
    width:50px;
    display: inline-block;
    &.register{
        border:1px solid ${props=>props.theme.orangeColor};
        color:${props=>props.theme.orangeColor};
    }
    &.write{
        display: inline-block;
        color:#fff;
        background:${props=>props.theme.orangeColor};

    }
`
export const SerachWrapper = styled.div`
    width:160px;
    height: 58px;
    position:relative;
    display: inline-block;
    padding:0 20px;
    
`
export const SearchInfo = styled.div`
    position: absolute;
	left: 0;
	top: 56px;
	width: 240px;
	padding: 0 20px;
	box-shadow: 0 0 8px rgba(0, 0, 0, .2);
	background: #fff;
    
`
export const NavSearch = styled.input.attrs({
    type: 'search',
    placeholder: '搜索'
})`
    width:160px;
    height: 38px;
    border:none;
    outline:none;
    border-radius:20px;
    padding:0 20px;
    margin-top:9px;
    box-sizing:border-box;
    background:#eee;
    font-size:14px;
    ::placeholder{
        color:${props=>props.theme.grayColor};
    }
    &.focused{
        width:240px;
    }
    &.slider-enter{
        width:160px;
        transition:all .2s ease-out;
    }
    &.slider-enter-active{
        width:240px;
        
    }
    &.slider-exit{
        transition:all .2s ease-out;
    }
    &.slider-exit-active{
        width:160px;
        
    }
`
