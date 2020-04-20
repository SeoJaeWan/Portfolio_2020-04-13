import styled from "styled-components";
import { media } from "../common/Responsive";

const DevBox = styled.div`
  margin: 0 auto;
  width: 100%;

  text-align: center;

  .pjBar {
    width: 10%;
    min-width: 250px;
    display: flex;
    justify-content: space-between;

    margin: 0 auto;
    margin-top: 20px;

    .menu {
      color: #2f3640;
      background-color: white;

      width: 10%;
      min-width: 50px;

      padding: 5px;
      border: 3px solid #2f3640;
      border-radius: 5px;

      transition: all 1s;

      &.ALL,
      &.JAVA,
      &.C,
      &.WEB {
        background-color: #2f3640;
        color: white;
      }
    }

    .menu:hover {
      background-color: #2f3640;
      color: white;
    }
  }

  .pjForm {
    width: 100%;
    min-height: 500px;

    padding: 50px;

    display: grid;

    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 40px;

    ${media.phone` grid-template-columns: 1fr; margin:0 auto`}

    margin: 0 auto;

    .pjForm-item {
      width: 100%;
      max-width: 400px;
      height: 350px;

      border: 2px solid;
      border-radius: 5px;

      display: none;

      .item-img {
        height: 70%;
      }

      .item-title {
        width: 100%;
        height: 30%;

        border-top: 3px solid;
        padding-top: 20px;

        .main-title {
          padding-top: 10px;

          font-weight: bold;

          font-size: 1.25rem;
        }
        .sub-title {
          margin-top: 5px;
          font-size: 1rem;
          color: gray;
        }
      }

      transition: all 1s;
      &.ALL,
      &.JAVA,
      &.C,
      &.WEB {
        display: block;
      }
    }
  }
`;

export default DevBox;
