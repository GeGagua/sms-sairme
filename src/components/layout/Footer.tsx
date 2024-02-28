import { FC } from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  gap: 16px;
  width: calc(100% - 112px);
  justify-content: center;
  position: relative;

  &.fullWidth {
    width: 100%;
  }

  & > p {
    position: absolute;
    top: -32px;
    left: 0;
    width: 100%;
    text-align: center;
    font-size: 14px;
    cursor: pointer;
    color: #09326C;
    display: none;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  section {
    flex: 1;
    pointer-events: none;

    p {
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      margin: 0 0 8px 0;
    }

    div {
      width: 100%;
      display: flex;
      gap: 8px;

      span {
        background: rgba(9, 30, 66, 0.06);
        height: 4px;
        border-radius: 8px;
        flex: 1;

        &.active,
        &:hover {
          background: #ffcf51;
        }
      }
    }
  }

  @media (max-width: 992px) {
    width:calc(100% - 12px);
    max-width: 400px;

    section {
      width: 25%;
      height: 36px;
      display: flex;
      align-items: end;
    }
    
    & > p {
      display: inline-flex;
    }

    &.fullWidth {
      width:calc(100% - 12px);

      & > p {
        display: none;
      }
    }

    section > p {
      display: none;

      &.active {
        display: block;
        position: absolute;
        left: 0;
        top: 0;
      }
    }
  }
`;

interface IProps {
  active: number;
  fullWidth?: boolean;
}

const Footer: FC<IProps> = ({ active, fullWidth }) => {
  const scrollDown = () => {
    window.scrollBy({ top: 300, left: 0, behavior: 'smooth' });
  }

  return (
    <FooterContainer id="footer" className={fullWidth ? "fullWidth" : ""}>
      <p onClick={() => scrollDown()}>
        მნიშვნელოვანი ინფორმაცია
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M12.8535 9.35375L8.35354 13.8538C8.3071 13.9002 8.25196 13.9371 8.19126 13.9623C8.13056 13.9874 8.0655 14.0004 7.99979 14.0004C7.93408 14.0004 7.86902 13.9874 7.80832 13.9623C7.74762 13.9371 7.69248 13.9002 7.64604 13.8538L3.14604 9.35375C3.05222 9.25993 2.99951 9.13268 2.99951 9C2.99951 8.86732 3.05222 8.74007 3.14604 8.64625C3.23986 8.55243 3.36711 8.49972 3.49979 8.49972C3.63247 8.49972 3.75972 8.55243 3.85354 8.64625L7.49979 12.2931V2.5C7.49979 2.36739 7.55247 2.24021 7.64624 2.14645C7.74 2.05268 7.86718 2 7.99979 2C8.1324 2 8.25958 2.05268 8.35334 2.14645C8.44711 2.24021 8.49979 2.36739 8.49979 2.5V12.2931L12.146 8.64625C12.2399 8.55243 12.3671 8.49972 12.4998 8.49972C12.6325 8.49972 12.7597 8.55243 12.8535 8.64625C12.9474 8.74007 13.0001 8.86732 13.0001 9C13.0001 9.13268 12.9474 9.25993 12.8535 9.35375Z"
            fill="#172B4D"
          />
        </svg>
      </p>
      <section>
        <p className={active === 1 ? "active" : ""}>იდენტიფიკაცია</p>
        <div>
          <span className={active >= 1 ? "active" : ""} />
        </div>
      </section>
      <section>
        <p className={active === 2 || active === 3 || active === 4 ? "active" : ""}>ვერიფიკაცია</p>
        <div>
          <span className={active >= 2 ? "active" : ""} />
          <span className={active >= 3 ? "active" : ""} />
          <span className={active >= 4 ? "active" : ""} />
        </div>
      </section>
      <section>
        <p className={active === 5 ? "active" : ""}>კომპანიები</p>
        <div>
          <span className={active >= 5 ? "active" : ""} />
        </div>
      </section>
      <section>
        <p className={active === 6 || active === 7 ? "active" : ""}>დასასრული</p>
        <div>
          <span className={active >= 6 ? "active" : ""} />
          <span className={active >= 7 ? "active" : ""} />
        </div>
      </section>
    </FooterContainer>
  );
};

export default Footer;
