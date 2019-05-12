import styled from "styled-components";

export const Content = styled.div`
  width: 25%;
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
  left: 2%;
  top: 3%;
  height: 94%;
  border-radius: 5px;
  overflow: auto;

  p {
    font-weight: bold;
    font-size: 14px;
    color: #000;
    text-align: center;
    padding: 15px 0;
  }

  ul {
    list-style: none;
  }

  ul li div {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 15px;
  }

  ul li div button {
    cursor: pointer;
  }

  ul li div img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    margin-right: 15px;
  }

  ul li div .info {
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
  }

  ul li div .info h2 {
    padding: 0;
    margin: 0;
    font-size: 18px;
    font-weight: bold;
  }

  ul li div .info h3 {
    padding: 0;
    margin: 0;
    margin-top: 3px;
    font-size: 12px;
    color: #666;
  }

  ul li button {
    background: transparent;
    border: none;
  }

  ul li div i {
    margin-left: 10px;
    font-size: 16px;
  }

  ul li div .remove {
    color: #f00;
  }

  ul li div .page {
    color: #333;
    font-weight: bold;
  }
`;
