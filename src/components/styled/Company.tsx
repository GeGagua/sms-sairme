import { FC, useState } from "react";
import { CompanyContainer, icons } from "./CompanyData";

export interface ICompany {
  id: string;
  number: string;
  title: string;
  address: string;
  logo: string;
  brand: string[];
  onUpdate: (id: string) => void;
}

const Company: FC<ICompany> = ({
  number,
  title,
  address,
  logo,
  brand,
  onUpdate,
  id,
}) => {
  const [check, setChecked] = useState(true);

  return (
    <CompanyContainer>
      {brand.length < 2 && (
        <div>
          <img src={logo} alt={title} />
        </div>
      )}
      <div>
        <p>{number}</p>
        <h2>{title.replace("შშპს", "შპს")}</h2>
        <p>{address}</p>
        {brand && brand.length > 0 && (
          <section>
            {brand.map(
              (item, index) =>
                //@ts-ignore
                icons[item.replace(" ", "_")] &&
                (id === "206316645" && item === "XCMG" ? (
                  <img
                    key={item}
                    src={icons['TGTC']}
                    alt={item}
                  />
                ) : (
                  <img
                    key={item + index}
                    //@ts-ignore
                    src={icons[item.replace(" ", "_")]}
                    alt={item}
                  />
                ))
            )}
          </section>
        )}
      </div>
      <div className="checkbox">
        <label className="custom-checkbox">
          <input
            onChange={() => {
              onUpdate(id);
              setChecked(!check);
            }}
            checked={check}
            type="checkbox"
          />
          <span className="checkmark"></span>
        </label>
      </div>
    </CompanyContainer>
  );
};

export default Company;
