import { BaseListInterface } from './base-list.interface';

import { PermissionForTabInterface } from '@app/core/models/components/tab-panel.model';

/**
 * Base list interface for tab
 */
export interface BaseListForTabInterface extends BaseListInterface, PermissionForTabInterface {}
