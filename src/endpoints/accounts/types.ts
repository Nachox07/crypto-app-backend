export type Transaction = {
    confirmedDate: Date;
    orderId: string;
    orderCode: string;
    transactionType: string;
    credit: string;
    balance: string;
};

export type BTAccount = {
    accountId: string;
    name: string;
    category: string;
    tag: string;
    balance: string;
    availableBalance: string;
    transactions: Transaction[];
};
