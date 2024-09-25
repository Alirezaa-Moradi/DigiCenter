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
  const [showMegaMenu, setShowMegaMenu] = useState(false);

  // نمایش و مخفی‌سازی مگامنو
  const handleMouseEnter = () => {
    setShowMegaMenu(true);
  };

  const handleMouseLeave = () => {
    setShowMegaMenu(false);
  };

  return (
    <StyledTopMenu>
      <Row className="topMenu-root">
        <Col span={4}>
          <div></div>
        </Col>
        <Col span={18}>
          <nav className="navbar">
            <ul className="menu-list">
              <li
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="topMenu-li-item"
              >
                <span className="topMenu-li-text">دسته بندی ها</span>
                <Category2 className="topMenu-li-icon" />
                {showMegaMenu && <MegaMenu />}
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
