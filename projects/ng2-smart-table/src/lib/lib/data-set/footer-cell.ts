import { Cell } from './cell';
export class FooterCell extends Cell {
  newValue: any = '';
  rowIndex = this.row.index;
  config = this.column.getFooterRowConfig(this.rowIndex);
  getValue(): any {
    if (!this.config) {
      return '';
    }
    const value = this.config.value;

    return typeof value !== undefined ? value : (this.config.valuePrepareFunction && this.config.valuePrepareFunction(this.value)) || '';
  }

  getType(): string {
    return this.config?.type || 'text';
  }

  isEditable(): boolean {
    return false;
  }
}
