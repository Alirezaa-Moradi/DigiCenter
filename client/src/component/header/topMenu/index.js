import React from "react";
import { Col, Row } from "antd";
import MegaMenu from "./megaMenu";
import { StyledTopMenu } from "./style";
import { Link } from "react-router-dom";
import { ReactComponent as Vertical_Line } from "../../../assets/images/Vertical_Line.svg";
import {
  Medal,
  BagHappy,
  Category2,
  DocumentText1,
  ReceiptDiscount,
  PercentageSquare,
} from "iconsax-react";

const TopMenu = () => {
  return (
    <StyledTopMenu>
      <Row className="topMenu-root">
        <Col span={4}>
          <div className="topMenu-loginBag-box">
            <Link className="topMenu-login-link">
              <span className="topMenu-login-text1">ثبت نام</span>
              <span className="topMenu-login-text2">ورود</span>
            </Link>
            <Vertical_Line className="topMenu-line-icon" />
            <Link className="topMenu-bag-link">
              <BagHappy className="topMenu-bag-icon" />
              <div className="topMenu-bag-cuntBox">
                <span className="topMenu-bag-cunt">99</span>
              </div>
            </Link>
          </div>
        </Col>
        <Col span={18}>
          <nav className="navbar">
            <ul className="menu-list">
              <li className="topMenu-li-item topMenu-li-megaMenu">
                <span className="topMenu-li-span">
                  <span className="topMenu-li-text">دسته بندی ها</span>
                  <Category2 className="topMenu-li-icon" />
                  <MegaMenu className="topMenu-li-megaMenu" />
                </span>
              </li>
              <Vertical_Line className="topMenu-line-icon" />
              <li className="topMenu-li-item">
                <Link className="topMenu-li-link">
                  <span className="topMenu-li-text">شگفت انگیز</span>
                  <PercentageSquare className="topMenu-li-icon" />
                </Link>
              </li>
              <Vertical_Line className="topMenu-line-icon" />
              <li className="topMenu-li-item">
                <Link className="topMenu-li-link">
                  <span className="topMenu-li-text">پر فروش ترین ها</span>
                  <Medal className="topMenu-li-icon" />
                </Link>
              </li>
              <Vertical_Line className="topMenu-line-icon" />
              <li className="topMenu-li-item">
                <Link className="topMenu-li-link">
                  <span className="topMenu-li-text">تخفیف ها و پیشنهاد ها</span>
                  <ReceiptDiscount className="topMenu-li-icon" />
                </Link>
              </li>
              <Vertical_Line className="topMenu-line-icon" />
              <li className="topMenu-li-item">
                <Link className="topMenu-li-link">
                  <span className="topMenu-li-text">وبلاگ</span>
                  <DocumentText1 className="topMenu-li-icon" />
                </Link>
              </li>
            </ul>
          </nav>
        </Col>
      </Row>
    </StyledTopMenu>
  );
};

export default TopMenu;
