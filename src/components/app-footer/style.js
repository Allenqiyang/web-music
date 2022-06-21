import styled from "styled-components";

export const FooterWrapper = styled.div`
  /* justify-content: space-between; */

  font-size: 12px;
  height: 173px;
  background-color: #f2f2f2;
  border-top: 1px solid #d3d3d3;

  .content {
    display: flex;
    width: 980px;
    margin: 0px auto;
    justify-content: space-between;
  }
`;

export const FooterLeft = styled.div`
  padding-top: 15px;

  .item.links {
    width: 520px;
    display: flex;
    justify-content: space-between;
  }

  .links-item {
    display: inline-block;

    a {
      color: #999;
    }
    span {
      margin: 0 10px;
      color: #999;
    }
  }

  .text {
    p {
      margin: 5px 0;
    }
    span {
      margin: 0 5px;
    }
  }
`;

export const FooterRight = styled.div`
  padding-left: 10px;

  .links {
    position: relative;
    top: 10%;
    display: flex;
    justify-content: space-around;
    width: 420px;

    .item {
      background: url(${require("@/assets/images/sprite_footer_01.png")}) no-repeat;
      display: inline-block;
      width: 50px;
      height: 45px;
      background-size: 104px 545px;
    }

    & :nth-child(1) .item {
      background-position: -60px -451px;
    }

    & :nth-child(2) .item {
      background-position: -60px -100px;
    }

    & :nth-child(3) .item {
      background-position: 0 0;
    }

    & :nth-child(4) .item {
      background-position: -60px -50px;
    }

    & :nth-child(5) .item {
      background-position: 0 -100px;
    }

    .title {
      background: url(${require("@/assets/images/sprite_footer_02.png")}) no-repeat;
      display: inline-block;
      text-align: center;
      background-size: 170px 153px;
      width: 52px;
      height: 20px;
    }

    & :nth-child(1) .title {
      width: 72px;
      background-position: -1px -119px;
      transform: translateX(-10%);
    }
    & :nth-child(2) .title {
      background-position: -5px -100px;
    }
    & :nth-child(3) .title {
      /* background-position: 0px,0px; */
    }
    & :nth-child(4) .title {
      background-position: -15px -60px;
      transform: translateX(20%);
    }
    & :nth-child(5) .title {
      background-position: -5px -80px;
    }
  }

  /* .links {
    display: flex;
    justify-content: space-between;

    .unit {
      display: block;
      background: url(${require("@/assets/images/sprite_footer_01.png")}) no-repeat -1px -902px;
      width: 88px;
      height: 88px;
      background-size: 50px 45px;
    }

    .title {
      display: block;
      width: 132px;
      height: 21px;
      background: url(${require("@/assets/images/sprite_footer_02.png")}) no-repeat -1px -238px;
      background-size: 72px 14px;
    }
  } */
`;
