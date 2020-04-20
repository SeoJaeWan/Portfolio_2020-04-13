import React from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";

const FooterBox = styled.div`
  width: 100%;
  height: 300px;

  text-align: center;

  background-color: #2f3640;
  color: white;

  .icons {
    display: flex;
    padding-top: 100px;
    width: 10%;
    min-width: 110px;
    justify-content: space-between;
    margin: 0 auto;

    font-size: 2rem;

    a:hover {
      color: #ced6e0;
    }
  }

  .info {
    margin-top: 50px;
  }
`;

const Footer = () => {
  return (
    <FooterBox>
      <div className="icons">
        <a href="https://github.com/SeoJaeWan" target="_git">
          <Icon name="github" />
        </a>
        <a href="https://blog.naver.com/sjw7324" target="_blog">
          <Icon name="bold" />
        </a>
        <a href="mailto:sjw7314@gmail.com" target="_mail">
          <Icon name="mail outline" />
        </a>
      </div>
      <div className="info">Copyrightⓒ2020 Seo-JaeWan All rights reserved.</div>
    </FooterBox>
  );
};

export default Footer;
