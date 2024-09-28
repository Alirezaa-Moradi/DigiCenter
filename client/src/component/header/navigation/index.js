import React from "react";
import { Col, Row, Select } from "antd";
import { Link } from "react-router-dom";
import { StyledNavigation } from "./style";
import { BagHappy, SearchNormal1 } from "iconsax-react";
import { ReactComponent as Vertical_Line } from "../../../assets/images/Vertical_Line.svg";

const Navigation = () => {
  return (
    <StyledNavigation>
      <Row className="navigation-root">
        <Col span={15} className="navigation-contactUs-container">
          <div className="topMenu-loginBag-box">
            <Link className="topMenu-login-link">
              <span className="topMenu-login-text1">ثبت نام</span>
              <Vertical_Line className="topMenu-login-text2" />
              <span className="topMenu-login-text3">ورود</span>
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
        <Col span={9} className="navigation-search-container">
          <div className="navigation-search-box">
            <Select
              className="navigation-search-input"
              showSearch
              suffixIcon={<SearchNormal1 />}
              variant="borderless"
              // value={value}
              placeholder="محصول، برند یا دسته مورد نظرتان را جستجو کنید"
              // style={props.style}
              defaultActiveFirstOption={false}
              filterOption={false}
              // onSearch={handleSearch}
              // onChange={handleChange}
              notFoundContent={null}
              // options={(data || []).map((d) => ({
              //   value: d.value,
              //   label: d.text,
              // }))}
            />
          </div>
        </Col>
      </Row>
    </StyledNavigation>
  );
};

export default Navigation;
