import React, { useState } from "react";
import { StyledMegaMenu } from "./style";
import { ArrowLeft2 } from "iconsax-react";
import { ReactComponent as MobileIcon } from "../../../../assets/images/MobileIcon.svg";
import { ReactComponent as TabletIcon } from "../../../../assets/images/TabletIcon.svg";
import { ReactComponent as LaptopIcon } from "../../../../assets/images/LaptopIcon.svg";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";

const mobileListData = [
  { title: "گوشی اپل", addres: "/" },
  { title: "گوشی سامسونگ", addres: "/" },
  { title: "گوشی شیائومی", addres: "/" },
  { title: "گوشی داریا", addres: "/" },
  { title: "گوشی نوکیا", addres: "/" },
  { title: "گوشی پوکو", addres: "/" },
  { title: "گوشی گوگل", addres: "/" },
  { title: "گوشی ریلمی", addres: "/" },
  { title: "گوشی موتورولا", addres: "/" },
  { title: "گوشی آنر", addres: "/" },
  { title: "گوشی اینفینیکس", addres: "/" },
  { title: "گوشی هواوی", addres: "/" },
  { title: "گوشی ناتینگ فون", addres: "/" },
  { title: "گوشی وان پلاس", addres: "/" },
  { title: "گوشی جی پلاس", addres: "/" },
  { title: "گوشی جی ال ایکس", addres: "/" },
  { title: "گوشی داکس", addres: "/" },
  { title: "گوشی کاجیتل", addres: "/" },
  { title: "گوشی ارود", addres: "/" },
  { title: "گوشی تکنو", addres: "/" },
  { title: "گوشی آلکاتل", addres: "/" },
  { title: "گوشی TCL", addres: "/" },
  { title: "گوشی وکال", addres: "/" },
];

const tabletListData = [
  { title: "تبلت اپل (آیپد)", addres: "/" },
  { title: "تبلت سامسونگ", addres: "/" },
  { title: "تبلت شیائومی", addres: "/" },
  { title: "تبلت مایکروسافت (سرفیس)", addres: "/" },
  { title: "تبلت هواوی", addres: "/" },
  { title: "تبلت جی ال ایکس", addres: "/" },
  { title: "تبلت لنوو", addres: "/" },
  { title: "تبلت دانش آموزی", addres: "/" },
  { title: "تبلت قلم دار", addres: "/" },
  { title: "کتابخوان", addres: "/" },
];

const laptopListData = [
  { title: "لپ تاپ اپل (مک بوک)", addres: "/" },
  { title: "لپ تاپ ایسوس", addres: "/" },
  { title: "لپ تاپ لنوو", addres: "/" },
  { title: "لپ تاپ اچ پی", addres: "/" },
  { title: "لپ تاپ مایکروسافت (سرفیس)", addres: "/" },
  { title: "لپ تاپ ایسر", addres: "/" },
  { title: "لپ تاپ ام اس آی", addres: "/" },
  { title: "لپ تاپ هوآوی", addres: "/" },
  { title: "لپ تاپ گیگابایت", addres: "/" },
  { title: "لپ تاپ دل", addres: "/" },
];

const categoryList = [
  {
    name: "موبایل",
    icon: <MobileIcon className="megaMenu-li-icon" />,
    datas: mobileListData,
    titleAll: "قیمت گوشی",
    subTitleAll: "(همه محصولات)",
  },
  {
    name: "تبلت",
    icon: <TabletIcon className="megaMenu-li-icon" />,
    datas: tabletListData,
    titleAll: "قیمت تبلت",
    subTitleAll: "(همه محصولات)",
  },
  {
    name: "لپ‌تاپ‌",
    icon: <LaptopIcon className="megaMenu-li-icon" />,
    datas: laptopListData,
    titleAll: "قیمت لپ‌تاپ‌",
    subTitleAll: "(همه محصولات)",
  },
];

const MegaMenu = () => {
  const [activeSubMenu, setActiveSubMenu] = useState("موبایل"); // آیتم پیش‌فرض فعال

  const handleSubMenuEnter = (menu) => {
    setActiveSubMenu(menu);
  };

  return (
    <StyledMegaMenu>
      {/* <div className="megaMenu-list-box">
        <nav className="megaMenu-list-nav">
          <ul className="megaMenu-ul-list">
            {categoryList.map((data) => {
              return (
                <li key={data.name} className="megaMenu-li-item">
                  <div className="megaMenu-li-textBox">
                    <span className="megaMenu-li-text">{data.name}</span>
                    {data.icon}
                    <nav className="megaMenu-subMenu-nav">
                                              <li className="megaMenu-subMenu-li-header">
                                                <Link className="megaMenu-subMenu-link">
                                                  <span className="megaMenu-subMenu-title">
                                                    {data.titleAll}
                                                  </span>
                                                  <span className="megaMenu-subMenu-subTitle">
                                                    {data.subTitleAll}
                                                  </span>
                                                  <ArrowLeft2 className="megaMenu-subMenu-li-ArrowIcon"/>
                                                </Link>
                                              </li>
                                              <ul className="megaMenu-subMenu-ul">
                                                {data?.datas?.map((name) => {
                                                  return (
                                                    <li className="megaMenu-subMenu-li">
                                                      <Link className="megaMenu-subMenu-link">
                                                        <span className="megaMenu-subMenu-text">
                                                          {name.title}
                                                        </span>
                                                      </Link>
                                                    </li>
                                                  );
                                                })}
                                              </ul>
                    </nav>
                  </div>
                  <ArrowLeft2 className="megaMenu-li-ArrowIcon" />
                </li>
              );
            })}
          </ul>
        </nav>
      </div> */}

      <ul className="category-list">
        {categoryList?.map((data) => {
          return (
            <li
              onMouseEnter={() => handleSubMenuEnter(data.name)}
              className={activeSubMenu === data.name ? "active" : ""}
            >
              <div className="megaMenu-li-textBox">
                <span className="megaMenu-li-text">{data.name}</span>
                {data.icon}
              </div>
              <ArrowLeft2 className="megaMenu-li-ArrowIcon" />
            </li>
          );
        })}
      </ul>
      <div className="sub-menu-content">
        {categoryList?.map((data) => {
          return (
            activeSubMenu === data.name && (
              <>
                <li className="megaMenu-subMenu-li-header">
                  <Link className="megaMenu-subMenu-link">
                    <span className="megaMenu-subMenu-title">
                      {data.titleAll}
                    </span>
                    <span className="megaMenu-subMenu-subTitle">
                      {data.subTitleAll}
                    </span>
                    <ArrowLeft2 className="megaMenu-subMenu-li-ArrowIcon" />
                  </Link>
                </li>
                <ul key={data.name} className="megaMenu-subMenu-ul">
                  {data?.datas?.map((item) => {
                    return (
                      <li className="megaMenu-subMenu-li">
                        <Link className="megaMenu-subMenu-link">
                          <span className="megaMenu-subMenu-text">
                            {item.title}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </>
            )
          );
        })}
      </div>
    </StyledMegaMenu>
  );
};

export default MegaMenu;
