export type AllCurrencies = Record<string, string>;

export interface ICurrency {
  shortName: string;
  favourite: boolean;
}

export interface IContextCurrency {
  currenciesAllNames: AllCurrencies;
}
