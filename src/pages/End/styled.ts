import styled from "styled-components";

export const EndContainer = styled.div``;

export const EndContainerBlock = styled.div`
  max-width: 1048px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  text-align: center;

  @media (max-width: 992px) {
    margin-bottom: 2vh;
  }
`;

export const EndContainerBox = styled.div`
    width: 100%;
    height: auto;
    max-height: 35vh;
    overflow: auto;
    padding: 24px;
    margin: 18px 0;
    border-radius:  8px;
    border: 1px solid  rgba(9, 30, 66, 0.14);
    text-align: left;

    p {
        margin-bottom: 16px;
    }

    @media (max-width: 992px) {
      max-height: 47vh;
      width: auto;
      margin: 0 16px;
      padding: 0;
      border: 0;
      margin-top: 24px;
      margin-bottom: 24px;
    }
`;
