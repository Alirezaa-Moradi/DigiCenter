import Styled from "styled-components";

export const StyledTopMenu = Styled.div`
    .topMenu-root{
        align-items: center;
        margin: 6px 20px 0 0; 
        justify-content: space-between !important;
    }

    .topMenu-loginBag-box{
        gap: 10px;
        display: flex;
        align-items: center;
        justify-content: left;
    }

    .topMenu-login-link{
        height: 36px;
        display: flex;
        cursor: pointer;
        padding-left: 20px;
        align-items: center;
        padding-right: 18px;
        border-radius: 0.5rem;
        background-color: #FF4748;
        /* border: 1px solid #C9C9C9; */
    }

    .topMenu-login-text1{
        font-size: 14px;
        color: #fff;
        font-weight: 500;
        padding-right: 16px;
        white-space: nowrap;
    }

    .topMenu-login-text2{
        font-size: 14px;
        color: #fff;
        font-weight: 500;
        border-left: 1px solid #fff;
        padding-left: 16px;
    }

    .topMenu-bag-link{
        padding: 6px;
        display: flex;
        cursor: pointer;
        position: relative;
        align-items: center;
        border-radius: 0.5rem;
        border: 1px solid #FF4748;
    }

    .topMenu-bag-icon{
        width: 22px;
        height: 22px;
        color : #FF4748;
    }

    .topMenu-bag-cuntBox{
        top: -12px;
        width: 18px;
        height: 18px;
        right: -11px;
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

    .navbar {
        display: flex;
        position: relative;
        flex-direction: column;
    }

    .menu-list {
        margin: 0;
        display: flex;
        list-style: none;
        align-items: center;
        flex-direction: row-reverse;
    }

    .menu-list > li {
        position: relative;
        cursor: pointer;
    }

    .topMenu-line-icon{
        width: 20px;
        height: 20px;
        fill: #C9C9C9;
        margin: 0px 0px 2px 0px;
    } 
    
    .topMenu-li-item{
        display: flex;
        line-height: 34px;
        padding: 14px 16px;
        position: relative;
        align-items: center;
    }
    
    .topMenu-li-icon{
        width: 18px;
        height: 18px;
        color: #656565;
        margin: 0px 0px 0px 10px;
        transition: all ease-in-out .3s;
    }

    .topMenu-li-span{
        display: flex;
        position: relative;
        align-items: center;
        font-family: "IRANSansXFaNum";
    }
    
    .topMenu-li-link {
        display: flex;
        color: #656565;
        font-size: 12px;
        position: relative;
        align-items: center;
        font-family: "IRANSansXFaNum";
    }
    
    .topMenu-li-text{
        border: none;
        color: #656565;
        vertical-align: baseline;
        transition: all ease-in-out .3s;
    }

    .topMenu-li-text::after{
        content: '';
        position: absolute;
        width: 0px;
        height: 2px;
        left: 50%;
        bottom: 0;
        background-color: #FF4748;
        transition: all ease-in-out .3s;
    }
        
    .topMenu-li-item:hover{
        padding: 13px 16px;
        & .topMenu-li-icon{
            color: #FF4748;
        }
        & .topMenu-li-text::after{
            width: 100%;
            left: 0px;
        }
        & .topMenu-li-text{
            color: #FF4748;
        }
    }

    .topMenu-li-megaMenu:hover > span > div{
        opacity: 1;
        visibility: visible;
        pointer-events: all;
        transition-delay: 0s;
        transform: translateX(0);
    }

`;
