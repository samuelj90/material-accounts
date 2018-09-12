import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { Observable, BehaviorSubject } from "rxjs";

export interface TransactionEntry {
    trDate: string;
    accountFrom: string;
    accountTo: string;
    amount: number;
}
export class LatestIncomeTransactionsDataSource implements DataSource<TransactionEntry> {
    private latestIncomeSubject = new BehaviorSubject<TransactionEntry[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);
    public loading$ = this.loadingSubject.asObservable();
    constructor() { }
    connect(collectionViewer: CollectionViewer): Observable<TransactionEntry[]> {
        return this.latestIncomeSubject.asObservable();
    }
    disconnect(collectionViewer: CollectionViewer): void {
        this.latestIncomeSubject.complete();
        this.loadingSubject.complete();
    }
    loadLatestIncomeTransactions(courseId: number, filter = '', sortDirection = 'asc', pageIndex = 0, pageSize = 3) {
        [
            { trDate: '12-10-2018', accountFrom: 'Cash A/c', accountTo: 'Bank A/c', amount: 10000 },
            { trDate: '12-10-2018', accountFrom: 'Project1 A/c', accountTo: 'Bank A/c', amount: 20000 },
            { trDate: '12-10-2018', accountFrom: 'Project2 A/c', accountTo: 'Bank A/c', amount: 350000 },
            { trDate: '12-10-2018', accountFrom: 'Cash A/c', accountTo: 'Bank A/c', amount: 20000 },
            { trDate: '12-10-2018', accountFrom: 'Cash A/c', accountTo: 'Bank A/c', amount: 5000000 },
            { trDate: '12-10-2018', accountFrom: 'Project2 A/c', accountTo: 'Project1 A/c', amount: 50000 },
            { trDate: '12-10-2018', accountFrom: 'Cash A/c', accountTo: 'Bank A/c', amount: 50000 },
            { trDate: '12-10-2018', accountFrom: 'Cash A/c', accountTo: 'Project2 A/c', amount: 50000 },
            { trDate: '12-10-2018', accountFrom: 'Cash A/c', accountTo: 'Bank A/c', amount: 150000 },
            { trDate: '12-10-2018', accountFrom: 'Project1 A/c', accountTo: 'Bank A/c', amount: 50000 },
            { trDate: '12-10-2018', accountFrom: 'Cash A/c', accountTo: 'Bank A/c', amount: 50000 },
            { trDate: '12-10-2018', accountFrom: 'Cash A/c', accountTo: 'Project1 A/c', amount: 50000 },
            { trDate: '12-10-2018', accountFrom: 'Cash A/c', accountTo: 'Bank A/c', amount: 50000 },
            { trDate: '12-10-2018', accountFrom: 'Project1 A/c', accountTo: 'Bank A/c', amount: 50000 },
            { trDate: '12-10-2018', accountFrom: 'Cash A/c', accountTo: 'Bank A/c', amount: 50000 },
            { trDate: '12-10-2018', accountFrom: 'Cash A/c', accountTo: 'Bank A/c', amount: 50000 },
            { trDate: '12-10-2018', accountFrom: 'Project2 A/c', accountTo: 'Project1 A/c', amount: 50000 },
            { trDate: '12-10-2018', accountFrom: 'Cash A/c', accountTo: 'Project2 A/c', amount: 50000 }
        ]
    }

}
