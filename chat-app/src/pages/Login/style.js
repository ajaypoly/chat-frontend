import styled from "styled-components";

const FormContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(to right, #3a3838 0%, #bd4a4a00 100%);
  .brands {
    margin: 10px;
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    flex-direction: column;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);

    h1,
    span {
      color: #030e12;
      text-transform: uppercase;
    }
  }
  .robo {
    height: 5rem;
  }
  .inputField {
    font-family: "Josefin Sans", sans-serif;
    padding: 10px;
    color: #030e12;
    background: #00000000;
    border: 1px solid #030e12;
    border-radius: 8px;
    width: 208px;
  }
  .passwordDiv {
    font-family: "Josefin Sans", sans-serif;
    color: #030e12;
    background: #00000000;
    border: 1px solid #030e12;
    border-radius: 8px;
    display: flex;
    align-items: center;
    padding: 0 5px;
  }
  .passwordField {
    color: #030e12;
    padding: 10px;
    background: #00000000;
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
  }
  .passwordField::placeholder {
    color: #030e1280;
  }
  .showHideBtn {
    background: #00000000;
    border: none;
    outline: none;
  }
  .inputField::placeholder {
    color: #030e1280;
  }
  .glow-on-hover {
    padding: 10px 20px;
    border: none;
    outline: none;
    color: #fff;
    background: #111;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
  }

  .glow-on-hover:before {
    content: "";
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000,
      #ffa07a,
      #ffff00,
      #808000,
      #008000,
      #008080
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }

  .glow-on-hover:active {
    color: #000;
  }

  .glow-on-hover:active:after {
    background: transparent;
  }

  .glow-on-hover:hover:before {
    opacity: 1;
  }

  .glow-on-hover:after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 10px;
  }

  @keyframes glowing {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
`;

export default FormContainer;
