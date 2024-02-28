import { FC } from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  margin: 16px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px;
    color: #172b4d;
  }

  input {
    width: 100%;
    font-size: 16px;
    max-width: 378px;
    border-radius: 8px;
    border: 1px solid rgba(9, 30, 66, 0.14);
    background: #fff;
    height: 54px;
    color: #44546f;
    padding: 0 12px;
    font-family: 'FiraGO';
  }

  ::placeholder {
    color: #44546f;
    opacity: 1;
    font-family: 'FiraGO';
  }

  ::-ms-input-placeholder {
    color: #44546f;
    font-family: 'FiraGO';
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    font-family: 'FiraGO';
  }

  /* For Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
    font-family: 'FiraGO';
  }

  &.isMobile {
    position: relative;

    input {
      padding-left: 92px;
    }

    span {
      position: absolute;
      left: 12px;
      top: 17px;
      height: 24px;
      line-height: 24px;
      padding-right: 12px;
      border-right: 1px solid rgba(9, 30, 66, 0.31);
    }
  }

  &.newCode {
    position: relative;

    input {
      padding-right: 180px;
    }

    span {
      position: absolute;
      right: 34px;
      top: 17px;
      color: #D67D00;
      font-size: 16px;
      display: flex;
      align-items: center;
      gap: 6px;
      cursor: pointer;
    }
  }
`;

interface IProps {
  label?: string;
  placeholder: string;
  value: string | number;
  isMobile?: boolean;
  newCode?: boolean;
  type?: string;
  onSmSCLick?: () => void;
  onChange: (val: string | number) => void;
}

const Input: FC<IProps> = ({
  isMobile,
  placeholder,
  value,
  type,
  onChange,
  onSmSCLick,
  newCode,
}) => {
  return (
    <InputContainer
      className={isMobile ? "isMobile" : newCode ? "newCode" : ""}
    >
      {isMobile && <span>🇬🇪 +995</span>}
      {newCode && (
        <span onClick={() => onSmSCLick && onSmSCLick()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M15.25 3.49999V6.49999C15.25 6.6989 15.171 6.88967 15.0303 7.03032C14.8897 7.17097 14.6989 7.24999 14.5 7.24999H11.5C11.3011 7.24999 11.1103 7.17097 10.9697 7.03032C10.829 6.88967 10.75 6.6989 10.75 6.49999C10.75 6.30108 10.829 6.11031 10.9697 5.96966C11.1103 5.82901 11.3011 5.74999 11.5 5.74999H12.5687L11.3812 4.66374C11.3731 4.65624 11.365 4.64874 11.3575 4.64061C10.8069 4.09034 10.1295 3.68382 9.38483 3.45683C8.64022 3.22983 7.85122 3.18933 7.08728 3.33887C6.32333 3.4884 5.60784 3.82341 5.00377 4.3144C4.39969 4.80539 3.92555 5.43733 3.62305 6.15459C3.32055 6.87186 3.19898 7.65249 3.26902 8.42777C3.33906 9.20306 3.59857 9.94926 4.02471 10.6007C4.45086 11.2521 5.03058 11.7889 5.71287 12.1637C6.39516 12.5384 7.1591 12.7398 7.93748 12.75H7.99998C9.21243 12.7529 10.3795 12.2892 11.2594 11.455C11.404 11.3183 11.597 11.2447 11.7959 11.2503C11.9948 11.256 12.1833 11.3404 12.32 11.485C12.4566 11.6296 12.5303 11.8226 12.5246 12.0215C12.519 12.2204 12.4346 12.4089 12.29 12.5456C11.1318 13.6434 9.59575 14.2536 7.99998 14.25H7.91436C6.89126 14.2356 5.88735 13.9702 4.99078 13.4771C4.09421 12.9841 3.3324 12.2785 2.77224 11.4222C2.21208 10.566 1.87071 9.58531 1.7781 8.56632C1.68548 7.54732 1.84447 6.52117 2.24108 5.57797C2.63769 4.63477 3.25981 3.80336 4.05281 3.15676C4.8458 2.51016 5.78541 2.06814 6.78915 1.86951C7.79288 1.67088 8.83003 1.72171 9.80952 2.01755C10.789 2.31339 11.6809 2.84519 12.4069 3.56624L13.75 4.79499V3.49999C13.75 3.30108 13.829 3.11031 13.9697 2.96966C14.1103 2.82901 14.3011 2.74999 14.5 2.74999C14.6989 2.74999 14.8897 2.82901 15.0303 2.96966C15.171 3.11031 15.25 3.30108 15.25 3.49999Z"
              fill="#D97008"
            />
          </svg>
          ახალი კოდი
        </span>
      )}
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        type={type ? type : "number"}
        inputMode={type ? 'email' : "numeric"}
      />
    </InputContainer>
  );
};

export default Input;
