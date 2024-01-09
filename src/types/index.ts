export type SidebarMenuItem = {
    id: string;
    label: string;
    icon: string;
    navigateTo: string;
}

export type Transactions = {
    orderId: string;
    orderDate: Date;
    orderAmt: number;
    transactionFees: number;
}