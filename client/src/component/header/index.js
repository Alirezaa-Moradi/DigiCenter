import React from "react";
import TopMenu from "./topMenu";
import Navigation from "./navigation";
import { Col, Image, Row } from "antd";
import { StyledHeader } from "./style";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo.png";

const Header = () => {
  return (
    <StyledHeader>
      <Row>
        <Col span={18}>
          <Navigation />
          <TopMenu />
        </Col>
        <Col>
          <div className="LogoBox">
            <Link>
              <Image preview={false} src={logo} />
            </Link>
          </div>
        </Col>
      </Row>
    </StyledHeader>
  );
};

export default Header;
