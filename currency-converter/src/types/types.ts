export type AllCurrencies = Record<string, string>;

export interface ICurrency {
  shortName: string;
  favourite: boolean;
}

export interface IContextCurrency {
  currenciesAllNames: AllCurrencies;
  amount: string;
  setMoney: Function;
}

type CurrencyRates = {
  [key: string]: {
    [key: string]: number;
  };
};

export type Rates = {
  date: string;
} & CurrencyRates;
