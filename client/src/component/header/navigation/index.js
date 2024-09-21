import React from "react";
import { Col, Row, Select } from "antd";
import { Link } from "react-router-dom";
import { Headphone, SearchNormal1 } from "iconsax-react";
import { StyledNavigation } from "./style";

const Navigation = () => {
  return (
    <StyledNavigation>
      <Row className="navigation-root">
        <Col span={15} className="navigation-contactUs-container">
          <div className="navigation-contactUs-Box">
            <div className="navigation-phoneNumber-box">
              <div className="navigation-phoneNumber-text-box">
                <Link className="navigation-phoneNumber-link">
                  <span className="navigation-phoneNumber-text-1">021</span>
                  <span className="navigation-phoneNumber-text-2">
                    -2587414
                  </span>
                </Link>
              </div>
              <div className="navigation-phoneNumber-icon-box">
                <Headphone className="navigation-phoneNumber-icon" />
              </div>
            </div>
            {/* <div className="navigation-title-box">
              <p className="navigation-title-heading">
                همین حالا با پشتیبانی ما تماس بگیر
              </p>
            </div> */}
            <div className="navigation-list-box">
              <nav className="navigation-list-nav">
                <ul className="navigation-ul-list">
                  <li className="navigation-li-item">
                    <Link className="navigation-li-link">قوانین</Link>
                  </li>
                  <li className="navigation-li-item">
                    <Link className="navigation-li-link">سوالات متداول</Link>
                  </li>
                  <li className="navigation-li-item">
                    <Link className="navigation-li-link">شیوه پرداخت</Link>
                  </li>
                  <li className="navigation-li-item">
                    <Link className="navigation-li-link">درباره ما</Link>
                  </li>
                  <li className="navigation-li-item">
                    <Link className="navigation-li-link">تماس با ما</Link>
                  </li>
                </ul>
              </nav>
            </div>
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
