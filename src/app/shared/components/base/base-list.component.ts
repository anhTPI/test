import { Component, Injector, OnInit } from '@angular/core';

import { TableColumn } from '@app/core/models/components/table.model';
import { TableService } from '@app/core/services/components/table.service';
import {
  TableColumnMapping,
  TABLE_COLUMN_MAPPING,
} from '@app/core/token/table-column-mapping.token';
import { BaseComponent } from '@app/shared/components/base/base.component';

@Component({
  template: '',
})
export abstract class BaseListComponent extends BaseComponent implements OnInit {
  tableColumn: TableColumn[] = [];

  tableDataList: unknown[] = [];

  protected tableService: TableService;

  protected tableColumnMapping: TableColumnMapping;

  constructor(injector: Injector) {
    super(injector);

    this.tableService = injector.get(TableService);
    this.tableColumnMapping = injector.get(TABLE_COLUMN_MAPPING);
  }

  ngOnInit(): void {
    this.createTableColumn();
  }

  /**
   * Table Data change
   *
   * @param event - banner data list
   * @returns void
   */
  onTableDataChange(event: unknown[]): void {
    this.tableDataList = event;
  }

  /**
   * Create table column
   *
   * @returns void
   */
  createTableColumn(): void {
    this.tableColumn = [];
  }
}
