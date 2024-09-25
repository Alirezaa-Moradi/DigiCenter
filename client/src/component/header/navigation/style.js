import Styled from "styled-components";

export const StyledNavigation = Styled.div`
    .navigation-root{
        display: flex;
        border-bottom: 1px solid #C9C9C9;
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
