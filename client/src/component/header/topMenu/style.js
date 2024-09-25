import Styled from "styled-components";

export const StyledTopMenu = Styled.div`
    .topMenu-root{
        margin: 10px 20px 0 0; 
        justify-content: space-between !important;
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
    }

    .topMenu-li-text{
        vertical-align: baseline;
        color: #929292;
    }
    
    .topMenu-li-item:hover{
        padding: 13px 16px;
        
        .topMenu-li-icon{
            color: red;
        }
        .topMenu-li-text{
            color: #232332;
            line-height: 24px;
            border-bottom: 2px solid red;
        }
    }

    .topMenu-li-link {
        display: flex;
        color: #656565;
        font-size: 12px;
        align-items: center;
        font-family: "IRANSansXFaNum";
    }
    
    
`;
