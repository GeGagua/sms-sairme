import { ButtonHTMLAttributes, FC } from "react";
import styled, { css } from "styled-components";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  small?: boolean;
  light?: boolean
}

const StyledButton = styled.button<ButtonProps>`
  color: #172B4D;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  border: 0;
  outline: 0;
  background: #FFC52C;
  border-radius: 8px;
  padding: 12px 60px;
  cursor: pointer;
  width: 100%;
  max-width: 378px;
  transition: all 0.3s easy-in-out;

  &:hover {
    background: #445170;
    color: #fff;
  }

  ${({ small }) =>
    small &&
    css`
        padding: 12px 30px;
        font-size: 16px;
        line-height: 24px;
    `}

  ${({ light }) =>
    light &&
    css`
        background: rgba(9, 30, 66, 0.06);
        color: #172B4D;

        &:hover {
          color: #fff;
        }
    `}
`;

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
