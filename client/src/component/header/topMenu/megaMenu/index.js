import React from "react";
import { StyledMegaMenu } from "./style";
import { ArrowLeft2 } from "iconsax-react";
import { ReactComponent as MobileIcon } from "../../../../assets/images/MobileIcon.svg";
import { ReactComponent as TabletIcon } from "../../../../assets/images/TabletIcon.svg";
import { ReactComponent as LaptopIcon } from "../../../../assets/images/LaptopIcon.svg";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";

const mobileListData = [
  "گوشی اپل",
  "گوشی سامسونگ",
  "گوشی شیائومی",
  "گوشی داریا",
  "گوشی نوکیا",
  "گوشی پوکو",
  "گوشی گوگل",
  "گوشی ریلمی",
  "گوشی موتورولا",
  "گوشی آنر",
  "گوشی اینفینیکس",
  "گوشی هواوی",
  "گوشی ناتینگ فون",
  "گوشی وان پلاس",
  "گوشی جی پلاس",
  "گوشی جی ال ایکس",
  "گوشی داکس",
  "گوشی کاجیتل",
  "گوشی ارود",
  "گوشی تکنو",
  "گوشی آلکاتل",
  "گوشی TCL",
  "گوشی وکال",
];

const tabletListData = [
  { name: "aaaaaa" },
  { name: "ssssss" },
  { name: "dddddd" },
  { name: "ffffff" },
  { name: "qqqqqq" },
  { name: "wwwwww" },
  { name: "eeeeee" },
  { name: "zzzzzz" },
  { name: "xxxxxx" },
  { name: "cccccc" },
];

const laptopListData = [
  { name: "111" },
  { name: "222" },
  { name: "333" },
  { name: "444" },
  { name: "555" },
  { name: "666" },
  { name: "777" },
  { name: "888" },
  { name: "999" },
  { name: "000" },
];

const categoryList = [
  {
    name: "موبایل",
    icon: <MobileIcon className="megaMenu-li-icon" />,
    datas: mobileListData,
  },
  // {
  //   name: "تبلت",
  //   icon: <TabletIcon className="megaMenu-li-icon" />,
  //   // datas: tabletListData,
  // },
  // {
  //   name: "لپ‌تاپ‌",
  //   icon: <LaptopIcon className="megaMenu-li-icon" />,
  //   // datas: laptopListData,
  // },
];

const MegaMenu = () => {
  return (
    <StyledMegaMenu>
      <div className="megaMenu-list-box">
        <nav className="megaMenu-list-nav">
          <ul className="megaMenu-ul-list">
            {categoryList.map((data) => {
              return (
                <li key={data.name} className="megaMenu-li-item">
                  <div className="megaMenu-li-textBox">
                    <span className="megaMenu-li-text">{data.name}</span>
                    {data.icon}
                    <nav className="megaMenu-subMenu-nav">
                      <ul className="megaMenu-subMenu-ul">
                        {data?.datas?.map((name) => {
                          return (
                            <li className="megaMenu-subMenu-li">
                              <Link className="megaMenu-subMenu-link">
                                <span className="megaMenu-subMenu-text">
                                  {name}
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
      </div>
    </StyledMegaMenu>
  );
};

export default MegaMenu;
