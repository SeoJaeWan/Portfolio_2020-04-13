import React from "react";
import HomeBox from "./HomeBox";
const Home = () => {
  return (
    <HomeBox>
      <div>
        <img src="/images/mainImg.jpg" alt="img" />
      </div>
      <div>
        <div className="name">Seo JaeWan</div>
        <div className="content">
          <p>개발자이자 여행을 좋아하는 서재완입니다.</p>
          <p>방문해주셔서 감사합니다!</p>
          <p>저를 여러분께 소개하기 위한 공간입니다.</p>
          <p>의견, 질문은 Guest 혹은 Mail을 이용해주세요</p>{" "}
          <p>Contact : sjw7324@gmail.com</p>
        </div>
      </div>
    </HomeBox>
  );
};

export default Home;
