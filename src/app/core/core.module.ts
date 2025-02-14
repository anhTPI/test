import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';

/**
 * Project core module
 */
@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
    // CoreModule can only be loaded once in AppModule, it is forbidden to load CoreModule in other Modules
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
