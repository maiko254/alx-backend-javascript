import { RowID, RowElement } from './interface';

declare module './crud' {
    export function insertRow(row: RowElement): number;
    export function deleteRow(id: RowID): void;
    export function updateRow(id: RowID, row: RowElement): RowID;
}
