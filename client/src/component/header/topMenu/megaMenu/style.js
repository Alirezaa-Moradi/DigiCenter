import Styled from "styled-components";

export const StyledMegaMenu = Styled.div`
    position: absolute;
    top: 12px;
    right: 0px;
    z-index: 9999999990000000000000000;
    background-color: aquamarine;
    /* border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem; */

    .MegaMenu-root{
        margin: 25px 20px 0 0; 
        
    }

    .megaMenu-list-box{
        display: flex;
        flex-direction: column;
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
        padding: 42px 32px;
        align-items: center;
        list-style-type: none;
        flex-direction: column;
        /* background-color: rgb(255 255 255) */
        background-color: whitesmoke;
    }
    
    .megaMenu-li-item{
        width: 236px;
        display: flex;
        cursor: pointer;
        /* position: relative; */
        align-items: center;
        padding-bottom: 2px;
        padding-bottom: 32px;
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
        /* display: none; */
        display: block;
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

    .megaMenu-li-item:hover .megaMenu-subMenu-nav {
        display: block;
    }

    .megaMenu-subMenu-link{
        color: #656565;
        font-size: 13px;
        align-items: center;
        font-family: "IRANSansXFaNum";
    }

    .megaMenu-subMenu-text{

    }

`;
