export type AllCurrencies = Record<string, string>;

export interface ICurrency {
  shortName: string;
  favourite: boolean;
}

export interface IContextCurrency extends IMoney, IListCurrencies {
  currenciesAllNames: AllCurrencies;
}

export interface IChildernProps {
  children: React.ReactNode;
}

export interface ISelectCurrencyListProps extends ICurrencyState {
  chooseCurrency: string;
}

export interface IModalComponentProps extends IChildernProps {
  visible: boolean;
  setVisible: Function;
}

export interface ICurrencyProps extends IListCurrencies {
  currency: ICurrency;
  amount: string;
}

export interface ICurrencyBlockProps extends IBaseCurrencyProps {
  baseCurrencyRates: Rates;
}

export interface IBaseCurrencyProps {
  baseCurrency: ICurrency;
  setBaseCurrency: Function;
}

export interface IAddNewCurrencyProps {
  setVisible: Function;
}

export interface IMoneyFieldCurrencyProps extends ICurrencyState {
  amount: string;
}

export interface ICurrencyListProps {
  baseCurrencyRates: Rates;
  baseCurrency: ICurrency;
}

export interface IListCurrencies {
  listCurrencies: ICurrency[];
  setListCurrency: Function;
}

export interface IMoney {
  amount: string;
  setMoney: Function;
}

export interface ICurrencyState {
  setCurrencyValue: Function;
  currencyValue?: ICurrency;
  listCurrency?: ICurrency[];
}

export type Rates = {
  date: string;
} & CurrencyRates;

type CurrencyRates = Record<string, Record<string, number>>;
