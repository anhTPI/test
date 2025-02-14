import { TableSearchObservableFunc } from '@app/core/models/components/table.model';

/**
 * Base list interface
 */
export interface BaseListInterface {
  /**
   * Action button's page link
   */
  actionPageLink: string;

  /**
   * Create table column
   *
   * @returns void
   */
  createTableColumn(): void;

  /**
   * Get search data result observable
   *
   * @returns TableSearchObservableFunc
   */
  getSearchObservableFunc(): TableSearchObservableFunc;

  /**
   * Table Data change
   *
   * @param event - banner data list
   * @returns void
   */
  onTableDataChange(event: unknown[]): void;
}
