import React from "react";
import { Col, Row } from "antd";
import Navigation from "./navigation";
import { StyledHeader } from "./style";
import { ReactComponent as Logo } from "../../assets/images/Logo.svg";
import TopMenu from "./topMenu";

const Header = () => {
  return (
    <StyledHeader>
      <Row>
        <Col>
          <Navigation />
          <TopMenu />
        </Col>
        <Col>
          <div className="LogoBox">
            <Logo className="LogoIcon"/>
          </div>
        </Col>
      </Row>
    </StyledHeader>
  );
};

export default Header;
