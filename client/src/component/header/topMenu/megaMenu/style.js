import Styled from "styled-components";

export const StyledMegaMenu = Styled.div`
    
    right: 0;
    background-color: white;
    top: 52px;
    display: flex;
    padding: 20px;
    z-index: 99999999;
    position: absolute;
    flex-direction: row-reverse;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);


    .category-list {
        list-style: none;
        /* width: 150px; */
        padding-left: 20px;
        border-left: 1px solid #ccc;
        padding-right: 0px;
        border-right: unset;
        display: flex;
        flex-direction: column;
    }

    .category-list > li {
        padding: 16px 12px 16px;
        cursor: pointer;
        width: 200px;
        display: flex;
        cursor: pointer;
        align-items: center;
        flex-direction: row-reverse;
        justify-content: space-between;
    }

    .category-list > li.active {
        font-weight: bold;
        color: #007bff;
    }

    .sub-menu-content {
        margin-right: 20px;
        flex-grow: 1;
    }

    .sub-menu-content ul {
        list-style: none;
    }

.sub-menu-content li {
  padding: 5px 0;
  cursor: pointer;
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
        padding: 42px 0px;
        align-items: center;
        list-style-type: none;
        flex-direction: column;
        background-color: rgb(255 255 255);
        /* background-color: whitesmoke; */
        box-sizing: border-box;
        font-weight: 400;
        -webkit-tap-highlight-color: transparent;
    }
    
    .megaMenu-li-item{
        width: 236px;
        display: flex;
        cursor: pointer;
        /* position: relative; */
        align-items: center;
        padding: 0 32px 32px;
        flex-direction: row-reverse;
        justify-content: space-between;
    }

    .megaMenu-li-item:last-child {
        padding-bottom: 0 !important;
    }

    .megaMenu-li-textBox{
        display: flex;
        align-items: center;
    }

    .megaMenu-li-text{
        vertical-align: baseline;
        color: #929292;
    }

    .megaMenu-li-icon{
        width: 36px;
        height: 36px;
        padding-left: 10px;
    }

    .megaMenu-li-ArrowIcon{
        width: 14px;
        height: 14px;
    }

    .megaMenu-subMenu-nav{
        position: absolute;
        background-color: yellow;
        top: 0;
        right: 300px;
        display: none;
        /* display: block; */
        visibility: hidden;
        z-index: 1;
        padding: 32px 16px 32px 0;
    }

    .megaMenu-subMenu-ul{
        margin: 0;
        padding: 0;
        display: flex;
        overflow: hidden;
        align-items: center;
        list-style-type: none;
        flex-direction: column;
        flex-wrap: wrap-reverse;
        height: 416px;
        width: max-content
    }

    .megaMenu-subMenu-li{
        width: 200px;
        height: 22px;
        padding-top: 2px;
        text-align: right;
        margin-bottom: 8px;
        /* line-height: 24.5px; */
    }

    /* .megaMenu-li-item:hover .megaMenu-subMenu-nav {
        display: block;
        visibility: visible;
    } */

    .megaMenu-subMenu-li-header{
        display: flex;
        flex-direction: row-reverse;
        margin-bottom: 12px;
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
        font-size: 14px;
        font-weight: 700;
    }

    .megaMenu-subMenu-subTitle{
        font-size: 11px;
        font-weight: 400;
    }

    .megaMenu-subMenu-li-ArrowIcon{
        width: 14px;
        height: 14px;
        padding-right: 2px;
        padding-bottom: 2px;
    }

`;
