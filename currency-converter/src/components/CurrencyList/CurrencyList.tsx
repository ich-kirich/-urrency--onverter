import { useContext } from "react";
import { CONTEXT } from "../../libs/constants";
import { ICurrency, ICurrencyListProps } from "../../types/types";
import Currency from "../Currency/Currency";

function CurrencyList(props: ICurrencyListProps) {
  const { baseCurrencyRates, baseCurrency } = props;
  const { listCurrencies, setListCurrency, amount } = useContext(CONTEXT);

  const calculateAmountMoney = (currency: ICurrency) => {
    if (
      Object.keys(baseCurrencyRates).length > 0 &&
      baseCurrencyRates[baseCurrency.shortName]
    ) {
      return String(
        Number(amount) *
          baseCurrencyRates[baseCurrency.shortName][currency.shortName],
      );
    }
    return "";
  };

  return (
    <>
      {listCurrencies.map((item) => (
        <Currency
          key={item.shortName}
          currency={item}
          amount={calculateAmountMoney(item)}
          listCurrencies={listCurrencies}
          setListCurrency={setListCurrency}
        />
      ))}
    </>
  );
}

export default CurrencyList;
