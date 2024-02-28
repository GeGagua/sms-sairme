import { FC } from "react";
import styled from "styled-components";

interface IProps {
  onClick: () => void;
}

const BackButtonContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 64px;
  height: 64px;
  background: #f7f8f9;
  border-radius: 50%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media (max-width: 992px) {
    width: 48px;
    height: 48px;
    top: -16px;

    svg,
    img {
      width: 37px;
    }
  }
`;

const BackButton: FC<IProps> = ({ onClick }) => {
  return (
    <BackButtonContainer onClick={() => onClick()}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <path
          d="M28.0001 16.0001C28.0001 16.2653 27.8947 16.5196 27.7072 16.7072C27.5196 16.8947 27.2653 17.0001 27.0001 17.0001H7.4138L14.7076 24.2926C14.8005 24.3855 14.8742 24.4958 14.9244 24.6172C14.9747 24.7386 15.0006 24.8687 15.0006 25.0001C15.0006 25.1315 14.9747 25.2616 14.9244 25.383C14.8742 25.5044 14.8005 25.6147 14.7076 25.7076C14.6146 25.8005 14.5043 25.8742 14.383 25.9245C14.2616 25.9747 14.1314 26.0006 14.0001 26.0006C13.8687 26.0006 13.7386 25.9747 13.6172 25.9245C13.4958 25.8742 13.3855 25.8005 13.2926 25.7076L4.29255 16.7076C4.19958 16.6147 4.12582 16.5044 4.07549 16.383C4.02517 16.2616 3.99927 16.1315 3.99927 16.0001C3.99927 15.8687 4.02517 15.7385 4.07549 15.6171C4.12582 15.4957 4.19958 15.3854 4.29255 15.2926L13.2926 6.29257C13.4802 6.10493 13.7347 5.99951 14.0001 5.99951C14.2654 5.99951 14.5199 6.10493 14.7076 6.29257C14.8952 6.48021 15.0006 6.7347 15.0006 7.00007C15.0006 7.26543 14.8952 7.51993 14.7076 7.70757L7.4138 15.0001H27.0001C27.2653 15.0001 27.5196 15.1054 27.7072 15.293C27.8947 15.4805 28.0001 15.7349 28.0001 16.0001Z"
          fill="#44546F"
        />
      </svg>
    </BackButtonContainer>
  );
};

export default BackButton;
