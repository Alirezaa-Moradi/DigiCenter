import { Col, Row } from "antd";
import MegaMenu from "./megaMenu";
import React, { useState } from "react";
import { StyledTopMenu } from "./style";
import { Link } from "react-router-dom";
import {
  Medal,
  Category2,
  DocumentText1,
  ReceiptDiscount,
  PercentageSquare,
} from "iconsax-react";
import { ReactComponent as Vertical_Line } from "../../../assets/images/Vertical_Line.svg";

const TopMenu = () => {
  return (
    <StyledTopMenu>
      <Row className="topMenu-root">
        <Col span={4}>
          <div></div>
        </Col>
        <Col span={18}>
          <div className="topMenu-list-box">
            <nav className="topMenu-list-nav">
              <ul className="topMenu-ul-list">
                <li className="topMenu-li-item topMenu-li-item-visibility">
                  <span className="topMenu-li-text">دسته بندی ها</span>
                  <Category2 className="topMenu-li-icon" />
                  <div className="topMenu-visibility-box">
                    <MegaMenu className="topMenu-li-icon" />
                  </div>
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
                    <span className="topMenu-li-text">
                      تخفیف ها و پیشنهاد ها
                    </span>
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
          </div>
        </Col>
      </Row>
    </StyledTopMenu>
  );
};

export default TopMenu;
