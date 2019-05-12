import styled from "styled-components";

export const Content = styled.div`
  h2 {
    text-align: center;
    padding: 0;
    margin: 0;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 15px;
  }

  .form {
    display: flex;
    flex-direction: column;
  }

  .form input {
    font-size: 14px;
    padding: 10px;
    border-radius: 4px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
  }

  .form .buttons-container {
    display: flex;
  }

  .form .buttons-container button {
    display: flex;
    flex: 1;
    justify-content: center;
    border-radius: 5px;
    padding: 10px;
    font-weight: bold;
    color: #fff;
    font-size: 12px;
  }

  .form .buttons-container button:nth-child(2n - 1) {
    margin-right: 15px;
    border: 1px solid #999;
    color: #999;
  }

  .form .buttons-container button:nth-child(2n - 1):hover {
    background: #999;
    color: #fff;
  }

  .form .buttons-container button:nth-child(2n) {
    border: 1px solid #5cdb95;
    color: #5cdb95;
  }

  .form .buttons-container button:nth-child(2n):hover {
    background: #5cdb95;
    color: #fff;
  }
`;
