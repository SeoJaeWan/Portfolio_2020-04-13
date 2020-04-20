import React from "react";
import styled from "styled-components";
import ReactTypingEffect from "react-typing-effect";
import { Link } from "react-router-dom";
import { media } from "./Responsive";

const HeaderBox = styled.div`
  width: 100%;
  height: 300px;
  color: white;
  background-color: #2f3640;

  .menu {
    display: flex;
    justify-content: flex-end;

    margin-right: 10px;
    padding: 20px 20px 0 0;

    font-weight: 600;
    .link {
      color: white;
      margin-right: 28px;
    }

    .link:hover {
      color: #ced6e0;
    }
  }

  .HeadLine {
    width: 50%;
    overflow: hidden;
    margin: 0 auto;
    padding: 30px;

    text-align: center;

    ${media.phone`width:100%`}

    margin-top: 60px;
    .mainText {
      font-size: 4rem;
      font-weight: bold;
      ${media.phone`font-size:3rem;`}
    }

    .subText {
      margin-top: 20px;
      font-size: 1.1rem;
    }
  }
`;

const Header = () => {
  const text = ["Hello, World!", "I'm  Seo JaeWan", "Developer"];
  const menus = ["Home", "Developer", "Travel", "Guest"];
  return (
    <HeaderBox>
      <div className="menu">
        {menus.map((menu, index) => {
          return (
            <Link to={menu} key={index}>
              <div className="link">{menu}</div>
            </Link>
          );
        })}
      </div>

      <div className="HeadLine">
        <ReactTypingEffect
          className="mainText"
          text={text}
          speed="200"
          typingDelay="0"
          eraseDelay="2500"
        />

        <div className="subText">Programming is my Life</div>
      </div>
    </HeaderBox>
  );
};

export default Header;
