import styled from "styled-components";

const FormContainer = styled.div`
  .glow-on-hover {
    padding: 4px 10px;
    border: none;
    outline: none;
    color: #fff;
    background: #111;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 8px;
  }

  .glow-on-hover:before {
    content: "";
    background: linear-gradient(
      45deg,
      #00ffd5,
      #ff00c8,
      #ff0000,
      #ffa07a,
      #ffff00,
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
  .emoji-picker-react {
    background-color: #14191f00;
    box-shadow: 0 5px 10px #6900db;
    border-color: #5b06f1;

    .emoji-scroll-wrapper::-webkit-scrollbar {
      width: 0.2rem;
    }

    .emoji-scroll-wrapper::-webkit-scrollbar-track {
      border-radius: 100vh;
      background: #797876;
    }

    .emoji-scroll-wrapper::-webkit-scrollbar-thumb {
      background-color: #ffffff39;
      width: 0.1rem;
      border-radius: 1rem;
    }

    .emoji-scroll-wrapper::-webkit-scrollbar-thumb:hover {
      background: #d200a4;
    }
    .emoji-categories {
      button {
        filter: contrast(0);
      }
    }
    .emoji-search {
      background-color: transparent;
    }
    .emoji-group:before {
      background-color: #14191f00;
    }
  }
`;

export default FormContainer;
