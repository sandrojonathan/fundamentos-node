import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface RequestTransaction {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class TransactionsRepository {
  private transactions: Transaction[];

  private balance: Balance;

  constructor() {
    this.transactions = [];
    this.balance = { income: 0, outcome: 0, total: 0 };
  }

  public all(): Transaction[] {
    // TODO
    return this.transactions;
  }

  public getIncomeBecome(type: string): number {
    const values = this.transactions
      .filter(element => element.type === type)
      .map(currentValue => currentValue.value);

    if (values.length > 0) {
      const sumValues = values.reduce((a, b) => {
        return a + b;
      });
      return sumValues;
    }
    return 0;
  }

  public getBalance(): Balance {
    // TODO
    this.balance.income = this.getIncomeBecome('income');
    this.balance.outcome = this.getIncomeBecome('outcome');
    this.balance.total = this.balance.income - this.balance.outcome;
    return this.balance;
  }

  public create({ title, value, type }: RequestTransaction): Transaction {
    // TODO
    const transaction = new Transaction({ title, value, type });
    this.transactions.push(transaction);
    return transaction;
  }
}

export default TransactionsRepository;
