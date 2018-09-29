import { AccountType } from './account-type';

export interface Account {
  id: number;
  title: string;
  accountType: string;
  balance: number;
  previousCarriedDown: number;
  parentAccount: null | { [key: string]: any };
  weight: number;
  createdAt: string;
  createdBy: string;
  lastModifiedAt: string;
  lastModifiedBy: string;
}
