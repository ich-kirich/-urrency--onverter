import { Button } from "antd";
import { useEffect } from "react";
import { getCoupleCurrencies } from "../../API/PostService";
import useFetching from "../../hooks/useFetching";
import { IConvertButtonProps } from "../../types/types";
import Loader from "../Loader/Loader";
import ViewError from "../ViewError/ViewError";

function ConvertButton(props: IConvertButtonProps) {
  const { currencyTo, currencyFrom, setMoney, amount } = props;

  const [fetchCoupleCurrency, isCoupleCurrencyLoading, isErrorCoupleCurrency] =
    useFetching(async () => {
      const response = await getCoupleCurrencies(currencyFrom, currencyTo);
      console.log(response.data[currencyTo]);
      setMoney(response.data[currencyTo] * Number(amount));
    });

  const convertCurrency = () => {
    fetchCoupleCurrency();
  };

  return (
    <div>
      {isErrorCoupleCurrency ? (
        <ViewError>{isErrorCoupleCurrency}</ViewError>
      ) : (
        <div>
          {isCoupleCurrencyLoading ? (
            <Loader />
          ) : (
            <Button type="primary" onClick={convertCurrency}>
              Convert
            </Button>
          )}
        </div>
      )}
    </div>
  );
}

export default ConvertButton;
