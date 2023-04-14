import { Row, Col, Input } from "antd";
import { useState } from "react";
import { DEFAULT_USD, DEFAULT_EUR } from "../../libs/constants";
import { IConverterBlockProps } from "../../types/types";
import ConvertButton from "../ConvertButton/ConvertButton";
import ConverterSelect from "../ConverterSelect/ConverterSelect";
import ConverterText from "../ConverterText/ConverterText";
import styles from "./ConverterBlock.module.scss";

function ConverterBlock(props: IConverterBlockProps) {
  const { currenciesNames } = props;
  const [currencyFrom, setCurrencyFrom] = useState(DEFAULT_USD);
  const [currencyTo, setCurrencyTo] = useState(DEFAULT_EUR);
  const [value, setValue] = useState("");
  const [money, setMoney] = useState("");
  const [resultRate, setResultRate] = useState("");
  return (
    <Row className={styles.currency__selector} gutter={[16, 16]}>
      <Col className={styles.input__wrapper}>
        <ConverterText>Amount</ConverterText>
        <Input
          type="number"
          onChange={(e) =>
            Number(e.target.value) >= 0 && setValue(e.target.value)
          }
          onKeyUp={() => setMoney(value)}
          placeholder="Enter amount..."
        />
      </Col>
      <Col className={styles.input__wrapper}>
        <ConverterText>Currency from which we convert</ConverterText>
        <ConverterSelect
          currenciesNames={currenciesNames}
          currency={currencyFrom}
          setCurrency={setCurrencyFrom}
        />
      </Col>
      <Col className={styles.input__wrapper}>
        <ConverterText>Currency to which we convert</ConverterText>
        <ConverterSelect
          currenciesNames={currenciesNames}
          currency={currencyTo}
          setCurrency={setCurrencyTo}
        />
      </Col>
      <Col className={styles.input__wrapper}>
        <ConverterText className={styles.text__center}>
          Exchange Rate:
        </ConverterText>
        <ConverterText className={styles.text__center}>
          {resultRate}
        </ConverterText>
      </Col>
      <Col span={24}>
        <ConvertButton
          setMoney={setResultRate}
          currencyFrom={currencyFrom}
          currencyTo={currencyTo}
          amount={money}
        />
      </Col>
    </Row>
  );
}

export default ConverterBlock;
