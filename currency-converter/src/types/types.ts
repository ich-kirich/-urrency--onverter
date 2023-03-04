export type AllCurrencies = Record<string, string>;

export interface ICurrency {
  shortName: string;
  favourite: boolean;
}

export interface IContextCurrency extends IMoney {
  currenciesAllNames: AllCurrencies;
}

export interface IChildernProps {
  children: React.ReactNode;
}

export interface ISelectCurrencyListProps extends ICurrencyState {
  chooseCurrency: string;
}

export interface IMoneyFieldCurrencyProps extends ICurrencyState, IMoney {
  currency?: ICurrency;
}

export interface IModalComponentProps extends IChildernProps {
  visible: boolean;
  setVisible: Function;
}

export interface ICurrencyProps extends IListCurrencies {
  currency: ICurrency;
  amount: string;
}

export interface IBaseCurrencyProps {
  baseCurrency: ICurrency;
  setBaseCurrency: Function;
}

export interface IAddNewCurrencyProps {
  setVisible: Function;
}

export interface IListCurrencies {
  listCurrencies: ICurrency[];
  setListCurrencies: Function;
}

export type Rates = {
  date: string;
} & CurrencyRates;

interface IMoney {
  amount: string;
  setMoney: Function;
}

interface ICurrencyState {
  setCurrencyValue: Function;
  currencyValue: ICurrency | ICurrency[];
}

type CurrencyRates = Record<string, Record<string, number>>;
