import { Select } from "antd";
import { IConverterSelectProps } from "../../types/types";
import styles from "./ConverterSelect.module.scss";

function ConverterSelect(props: IConverterSelectProps) {
  const { currenciesNames, currency, setCurrency } = props;
  const { Option } = Select;
  const chooseCurrency = (item: string) => {
    setCurrency(item);
  };
  return (
    <Select
      defaultValue={currency}
      onChange={chooseCurrency}
      className={styles.currency__text}
    >
      {Object.keys(currenciesNames).map((item) => (
        <Option key={item} value={item}>
          {item}
        </Option>
      ))}
    </Select>
  );
}

export default ConverterSelect;
