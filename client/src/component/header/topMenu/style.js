import Styled from "styled-components";

export const StyledTopMenu = Styled.div`
    .topMenu-root{
        margin: 20px 20px 0 0; 
        justify-content: space-between !important;
    }

    .topMenu-list-box{
        display: flex;
        margin-right: 24px;
        flex-direction: column;
    }

    .topMenu-list-nav{
        //none
    }

    .topMenu-ul-list {
        margin: 0;
        padding: 0;
        display: flex;
        overflow: hidden;
        align-items: center;
        list-style-type: none;
        flex-direction: row-reverse;
    }
    
    .topMenu-li-item{
        display: flex;
        line-height: 34px;
        padding-bottom: 2px;
        position: relative;
        align-items: center;
    }
    
    .topMenu-li-item:hover{
        padding-bottom: 0px;
        border-bottom: 2px solid red;
        /* transition: border ease 1s, padding ease 1s; */
        
        .topMenu-li-icon{
            color: red;
            /* transition: color 2s; */
        }
        .topMenu-li-text{
            color: #232332;
            /* transition: color 2s; */
        }
    }

    .topMenu-li-link {
        display: flex;
        color: #656565;
        font-size: 12px;
        align-items: center;
        font-family: "IRANSansXFaNum";
    }
    
    .topMenu-visibility-box{
            /* visibility: hidden; */
            position: absolute;
    }

    .topMenu-li-item-visibility:hover ~ .topMenu-visibility-box{
        background: red;
        visibility: visible !important;
    }

    .topMenu-li-text{
        vertical-align: baseline;
        color: #929292;
    }
    
    .topMenu-li-icon{
        width: 18px;
        height: 18px;
        color: #656565;
        margin: 0px 0px 0px 10px;
    }

    .topMenu-line-icon{
        width: 20px;
        height: 20px;
        fill: #C9C9C9;
        margin: 0px 16px 2px 16px;
    }
    
`;
