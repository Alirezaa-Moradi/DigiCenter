import Styled from "styled-components";

export const StyledNavigation = Styled.div`
    .navigation-root{
        display: flex;
        border-bottom: 1px solid #C9C9C9;
    }

    .topMenu-loginBag-box{
        gap: 2px;
        display: flex;
        align-items: center;
        justify-content: left;
    }

    .topMenu-login-link{
        /* gap: 16px; */
        height: 40px;
        display: flex;
        cursor: pointer;
        padding-left: 20px;
        align-items: center;
        padding-right: 18px;
        border-radius: 6px;
        background-color: #FF4748;
        transition: all ease-in-out .3s;
        /* border: 1px solid #C9C9C9; */
    }

    .topMenu-loginBag-box:hover .topMenu-login-link{
        background-color: #f43c40;
    }

    .topMenu-login-text1{
        font-size: 14px;
        color: #fff;
        font-weight: 500;
        /* padding-right: 16px; */
        white-space: nowrap;
    }

    .topMenu-login-text2{
        fill: #fff;
        width: 26px;
        height: 26px;
        margin-top: 2px;
        transform: rotate(25deg);
    }

    .topMenu-login-text3{
        font-size: 14px;
        color: #fff;
        font-weight: 500;
        /* border-left: 1px solid #fff; */
        /* padding-left: 16px; */
    }

    .topMenu-line-icon{
        width: 28px;
        height: 28px;
        fill: #C9C9C9;
    } 

    .topMenu-bag-link{
        padding: 7px;
        display: flex;
        cursor: pointer;
        position: relative;
        align-items: center;
        border-radius: 6px;
        border: 1px solid #656565;
    }

    .topMenu-bag-icon{
        width: 24px;
        height: 24px;
        color : #656565;
    }

    .topMenu-bag-cuntBox{
        top: -10px;
        width: 18px;
        height: 18px;
        right: -10px;
        padding: 2px;
        border-radius: 50%;
        position: absolute;
        background-color: #FF4748;
    }
    
    .topMenu-bag-cunt{
        color : #fff;
        font-size: 12px;
        font-weight: 500;
    }

    .navigation-list-box{
        display: flex;
        margin-right: 24px;
        flex-direction: column;
    }

    .navigation-list-nav{
        //none
    }

    .navigation-ul-list {
        margin: 0;
        padding: 0;
        display: flex;
        overflow: hidden;
        list-style-type: none;
        flex-direction: row-reverse;
    }

    .navigation-li-item{
        line-height: 48px;
        position: relative;
        margin: 0px 28px 0px 0px;
    }
    .navigation-li-link {
        color: #656565;
        font-size: 12px;
        font-family: "IRANSansXFaNum";
    }

    .navigation-li-link:hover {
        color: #FF4748;
    }

    .navigation-contactUs-container{
        display: flex;
        align-items: center;
    }

    .navigation-contactUs-Box{
        display: flex;
        align-items: center;
    }

    .navigation-phoneNumber-box{
        display: flex;
        margin-right: 10px;
        padding-right: 10px;
        flex-direction: row-reverse;
        border-right: 1px solid #C9C9C9;
    }

    .navigation-phoneNumber-text-box{
        //None
    }

    .navigation-phoneNumber-link{
        //None
    }

    .navigation-phoneNumber-text-1{
        font-size: 15px;
        color: #FF4748;
        letter-spacing: 1px;
    }
    
    .navigation-phoneNumber-text-2{
        font-size: 15px;
        color: #929292;
        letter-spacing: 1px;
    }

    .navigation-phoneNumber-icon-box{
        margin: 0px 5px -9px 0px;
    }

    .navigation-phoneNumber-icon{
        height: 20px;
        width: 20px;
        color: #656565;
    }

    .navigation-title-box{
        //None
    }

    .navigation-title-heading{
        margin: 0px;
        color: #8692A6;
        font-size: 12px;
        line-height: 12px;
    }

    .navigation-search-container{
        display: flex;
        align-items: center;
        flex-direction: row-reverse;
        padding-right: 25px;  
    }

    .navigation-search-box{
        width: 100%;
    }

    .navigation-search-input{
        width: 100%;
        margin: 10px 0;
        height: 44px;
    }

    .ant-select-selector{
        padding-right: 22px !important;
        background-color: #f0f0f1 !important;
    }

    .ant-select-show-search:where(.css-dev-only-do-not-override-qnu6hi).ant-select:not(.ant-select-customize-input) .ant-select-selector input {
        direction: rtl;
        padding-right: 30px !important;
    }

    .ant-select-selection-placeholder{
        text-align: right;
    }

    .ant-select-arrow svg{
        width: 22px;
        height: 22px;
    }
`;
