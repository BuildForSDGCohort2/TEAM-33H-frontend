export interface ICard {
    cardOwner: string;
    cardNumber: string;
    expirationDate: Date;
    cvc: string;
}
export interface IDeposit {
    accountNumber: string;
    stokvel: string;
    reference: string;
    amount: number;
}
export interface IWallet {
    accountNumber: string;
    address: string;
    firstName: string;
    lastName: string;
    balance: number;
}
