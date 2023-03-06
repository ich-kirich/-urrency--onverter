import { Box } from "@mui/material";
import { Col, Input, Row, Typography } from "antd";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { getAllCurrencies } from "../../API/PostService";
import useFetching from "../../hooks/useFetching";
import { DEFAULT_USD, DEFAULT_EUR } from "../../libs/constants";
import { AllCurrencies } from "../../types/types";
import ConvertButton from "../ConvertButton/ConvertButton";
import ConverterSelect from "../ConverterSelect/ConverterSelect";
import Loader from "../Loader/Loader";
import ViewError from "../ViewError/ViewError";
import styles from "./ConvertPage.module.scss";

function ConvertPage() {
  const [value, setValue] = useState("");
  const [money, setMoney] = useState("");
  const [resultRate, setResultRate] = useState("");
  const [currenciesNames, setCurrenciesNames] = useState({} as AllCurrencies);
  const [currencyFrom, setCurrencyFrom] = useState(DEFAULT_USD);
  const [currencyTo, setCurrencyTo] = useState(DEFAULT_EUR);

  const [fetchCurrencies, isAllCurrLoading, isErrorAllCurr] = useFetching(
    async () => {
      const response = await getAllCurrencies();
      setCurrenciesNames({ ...response.data });
    },
  );

  useEffect(() => {
    fetchCurrencies();
  }, []);

  return (
    <div>
      {isErrorAllCurr ? (
        <ViewError>{isErrorAllCurr}</ViewError>
      ) : (
        <Box>
          {isAllCurrLoading ? (
            <Loader />
          ) : (
            <Row className={styles.currency__selector} gutter={[16, 16]}>
              <Col className={styles.input__wrapper}>
                <Typography.Text className={styles.currency__text}>
                  Amount
                </Typography.Text>
                <Input
                  type="number"
                  onChange={(e) =>
                    Number(e.target.value) >= 0 && setValue(e.target.value)
                  }
                  onKeyUp={() => setMoney(value)}
                  placeholder="Amount"
                />
              </Col>
              <Col className={styles.input__wrapper}>
                <Typography.Text className={styles.currency__text}>
                  Currency from which we convert
                </Typography.Text>
                <ConverterSelect
                  currenciesNames={currenciesNames}
                  currency={currencyFrom}
                  setCurrency={setCurrencyFrom}
                />
              </Col>
              <Col className={styles.input__wrapper}>
                <Typography.Text className={styles.currency__text}>
                  Currency to which we convert
                </Typography.Text>
                <ConverterSelect
                  currenciesNames={currenciesNames}
                  currency={currencyTo}
                  setCurrency={setCurrencyTo}
                />
              </Col>
              <Col className={styles.input__wrapper}>
                <Typography.Text
                  className={classNames(
                    styles.currency__text,
                    styles.text__center,
                  )}
                >
                  Exchange Rate
                </Typography.Text>
                <Typography.Text
                  className={classNames(
                    styles.currency__text,
                    styles.text__center,
                  )}
                >
                  {resultRate}
                </Typography.Text>
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
          )}
        </Box>
      )}
    </div>
  );
}

export default ConvertPage;
