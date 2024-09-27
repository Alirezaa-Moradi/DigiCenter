import React, { useState } from "react";
import { Link } from "react-router-dom";
import { StyledMegaMenu } from "./style";
import { ReactComponent as ArrowIcon } from "../../../../assets/images/ArrowIcon.svg";
import { ReactComponent as MobileIcon } from "../../../../assets/images/MobileIcon.svg";
import { ReactComponent as TabletIcon } from "../../../../assets/images/TabletIcon.svg";
import { ReactComponent as LaptopIcon } from "../../../../assets/images/LaptopIcon.svg";

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
    datas: mobileListData,
    titleAllItems: "همه محصولات موبایل",
    icon: <MobileIcon className="megaMenu-li-icon" />,
  },
  {
    name: "تبلت",
    datas: tabletListData,
    titleAllItems: "همه محصولات تبلت",
    icon: <TabletIcon className="megaMenu-li-icon" />,
  },
  {
    name: "لپ‌تاپ‌",
    datas: laptopListData,
    titleAllItems: "همه محصولات لپ‌تاپ‌",
    icon: <LaptopIcon className="megaMenu-li-icon" />,
  },
];

const MegaMenu = () => {
  const [activeSubMenu, setActiveSubMenu] = useState("موبایل");

  const handleSubMenuEnter = (menu) => {
    setActiveSubMenu(menu);
  };

  return (
    <StyledMegaMenu>
      <ul className="category-list">
        {categoryList?.map((data) => {
          return (
            <li
              onMouseEnter={() => handleSubMenuEnter(data.name)}
              // className={activeSubMenu === data.name ? "active" : ""}
              className="megaMenu-category-list-li"
            >
              <div className="megaMenu-li-textBox">
                <span className="megaMenu-li-text">{data.name}</span>
                {data.icon}
              </div>
              <ArrowIcon className="megaMenu-li-ArrowIcon" />
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
                      {data.titleAllItems}
                    </span>
                    <ArrowIcon className="megaMenu-subMenu-li-ArrowIcon" />
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
