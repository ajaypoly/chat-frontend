import styled from "styled-components";

const AvatarStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
  background-color: #0f0f30;
  height: 100vh;
  width: 100vw;

  .loader {
    max-inline-size: 100%;
  }
  .title {
    h1 {
      color: white;
    }
  }
  .avatars {
    gap: 2rem;
    display: flex;

    .avatar {
      border: 0.4rem solid transparent;
      padding: 0.4rem;
      border-radius: 5rem;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        height: 7rem;
        transition: transform 2s ease;
      }
      img:hover {
        transform: scale(1.15);
        transition: 1.5s;
      }
    }
    .selected {
      border: 0.4rem solid red;
    }
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
  .profile-button{
    width: 270px;
    display: flex;
    justify-content: space-between;
  }
`;

export default AvatarStyle;
