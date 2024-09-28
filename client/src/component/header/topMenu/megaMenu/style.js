import Styled from "styled-components";

export const StyledMegaMenu = Styled.div`
    
    right: 0;
    cursor: auto;
    background-color: white;
    top: 46px;
    display: flex;
    /* padding: 20px; */
    z-index: 99999999;
    position: absolute;
    border-radius: 12px;
    flex-direction: row-reverse;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transition-delay: .1s;
    transform: translateX(-20px);
    transition: all ease-in-out .3s;

    .category-list {
        display: flex;
        list-style: none;
        padding: 10px;
        padding-left: 20px;
        flex-direction: column;
        border-radius: 0px 10px 10px 0px;
        background-color: #F7F7F7;
    }

    .category-list > li {
        padding: 16px 12px 16px;
        width: 146px;
        display: flex;
        cursor: pointer;
        align-items: center;
        flex-direction: row-reverse;
        justify-content: space-between;
    }
    
    .megaMenu-category-list-li:hover{
        .megaMenu-li-text{
            font-weight: bold;
            color: #FF4748;
        }
        .megaMenu-li-LinkBox > svg{
            fill: #FF4748;
        }
        .megaMenu-li-ArrowIcon{
            fill: #FF4748;
            opacity: 1;
            visibility: visible;
            pointer-events: all;
            transition-delay: 0s;
            transform: translateX(0);
        }
    }

    .sub-menu-content {
        flex-grow: 1;
        padding: 20px;
        margin-right: 20px;
    }

    .sub-menu-content ul {
        list-style: none;
    }

    .sub-menu-content li {
        padding: 5px 0;
    }

    .sub-menu-content li:hover {
        color: #007bff;
    }

    .MegaMenu-root{
        margin: 25px 20px 0 0; 
        
    }

    .megaMenu-list-box{
        display: flex;
        flex-direction: column;
        background-color: pink;
        height: 416px;
    }
    
    .megaMenu-list-nav{
        max-height: 570px !important;
        position: relative;
    }
    
    .megaMenu-ul-list {
        margin: 0;
        padding: 0;
        display: flex;
        overflow: hidden;
        font-weight: 400;
        padding: 42px 0px;
        align-items: center;
        list-style-type: none;
        flex-direction: column;
        box-sizing: border-box;
        background-color: rgb(255 255 255);
        -webkit-tap-highlight-color: transparent;
    }
    
    .megaMenu-li-item{
        width: 236px;
        display: flex;
        align-items: center;
        padding: 0 32px 32px;
        flex-direction: row-reverse;
        justify-content: space-between;
    }

    .megaMenu-li-item:last-child {
        padding-bottom: 0 !important;
    }

    .megaMenu-li-LinkBox{
        display: flex;
        align-items: center;
    }

    .megaMenu-li-text{
        color: #929292;
        vertical-align: baseline;
    }

    .megaMenu-li-icon{
        width: 38px;
        height: 38px;
        padding-left: 4px;
        margin-top: -7px;
        fill :#929292;
    }

    .megaMenu-li-ArrowIcon{
        width: 10px;
        height: 9px;
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
        transition-delay: .1s;
        transform: translateX(20px);
        transition: all ease-in-out .3s;
    }

    .megaMenu-subMenu-nav{
        top: 0;
        z-index: 1;
        right: 300px;
        display: none;
        position: absolute;
        visibility: hidden;
        background-color: yellow;
        padding: 32px 16px 32px 0;
    }

    .megaMenu-subMenu-ul{
        margin: 0;
        padding: 0;
        gap: 0 5px;
        display: flex;
        height: 400px;
        overflow: hidden;
        width: max-content;
        align-items: center;
        list-style-type: none;
        flex-direction: column;
        flex-wrap: wrap-reverse;
    }

    .megaMenu-subMenu-li{
        width: 180px;
        height: 22px;
        padding-top: 2px;
        text-align: right;
        margin-bottom: 8px;
    }

    .megaMenu-subMenu-li-header{
        display: flex;
        margin-bottom: 12px;
        flex-direction: row-reverse;
    }
    
    .megaMenu-subMenu-link{
        gap: 5px;
        display: flex;
        color: #656565;
        font-size: 13px;
        align-items: center;
        flex-direction: row-reverse;
        font-family: "IRANSansXFaNum";
    }

    .megaMenu-subMenu-title{
        font-size: 12px;
        font-weight: 500;
        color: #50a0bf;
    }

    .megaMenu-subMenu-subTitle{
        font-size: 11px;
        font-weight: 400;
    }

    .megaMenu-subMenu-li-ArrowIcon{
        width: 10px;
        height: 9px;
        padding-right: 2px;
        padding-bottom: 2px;
        color: #008eb2;
        fill: #50a0bf;
    }

    .megaMenu-subMenu-link:hover{
        .megaMenu-subMenu-title{
            color: #008eb2;
        }
        .megaMenu-subMenu-li-ArrowIcon{
            fill: #008eb2;
        }
    }

    .megaMenu-subMenu-li:hover{
        .megaMenu-subMenu-link{
            color: black;
        }
    }

`;
