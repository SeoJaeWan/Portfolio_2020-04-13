import styled from "styled-components";
import { media } from "../common/Responsive";

const HomeBox = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  text-align: center;

  padding: 62px;

  img {
    margin-top: 10px;

    width: 200px;
    height: 200px;
    border-radius: 100px;

    ${media.phone`width:250px; height:250px; margin-top: 25px;`}
  }

  .name {
    margin-top: 50px;

    font-weight: bold;
    font-size: 3rem;
  }

  .content {
    margin-top: 30px;
    margin-left: 20px;
    text-align: left;
    font-weight: 600;
  }

  .content p {
    margin: 0;
    margin-top: 5px;
  }

  ${media.phone`flex-wrap:wrap`}
`;

export default HomeBox;
