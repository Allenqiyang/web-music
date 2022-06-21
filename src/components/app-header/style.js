import styled from "styled-components";

export const HeaderWrapper = styled.div`
  font-size: 14px;
  height: 75px;
  background-color: #242424;
  color: #fff;

  .content {
    height: 70px;

    display: flex;
    justify-content: space-between;
  }

  .divider {
    height: 5px;
    background-color: #c20c0c;
  }
`;

export const HeaderLeft = styled.div`
  display: flex;

  .logo {
    display: block;
    width: 176px;
    height: 69px;
    background-position: 0 0;
  }

  .select-list {
    display: flex;
    line-height: 70px;
    justify-content: space-around;

    .select-item {
      position: relative;

      a {
        display: block;
        padding: 0 20px;
        color: #ccc;

        &:hover,
        &.active {
          color: #fff;
          background: #000;
          text-decoration: none;
        }
      }

      /* 导航指示标志 */
      .active .icon {
        position: absolute;

        display: inline-block;
        width: 12px;
        height: 6px;
        bottom: 0;
        left: 50%;
        /* 向左移动自身宽度的50% */
        transform: translate(-50%, 0);
        background-position: -226px 0;
      }

      /* HOT 标志 */
      :last-of-type a {
        position: relative;
        ::after {
          position: absolute;
          content: "";
          width: 28px;
          height: 19px;
          background-image: url(${require("@/assets/images/sprite_01.png")});
          background-position: -190px 0;
          top: 20px;
          right: -15px;
        }
      }
    }
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 30%;
  font-size: 12px;
  color: #ccc;

  .search {
    width: 158px;
    height: 32px;
    /* 圆角 */
    border-radius: 2rem;
    font-size: 12px;

    input {
      &::placeholder {
        font-size: 12px;
      }
    }
  }

  .button-center {
    text-align: center;
    padding: 6px 0;
    color: #ccc;
    width: 90px;
    border-radius: 2rem;
    border: 1px solid #4f4f4f;
  }

  .button-login {
    width: 28px;
    color: #ccc;
  }
`;
