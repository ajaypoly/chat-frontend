import styled from "styled-components";

export const SkeletonStyle = styled.div`
  .Skeleton-style {
    margin: 4%;
    border-radius: 50px;
    width: 180px;
    height: 120px;
  }
  @keyframes animation {
    0% {
      background-color: hs1(200, 20%, 70%);
    }
    100% {
      background-color: hs1(200, 20%, 95%);
    }
  }
`;
