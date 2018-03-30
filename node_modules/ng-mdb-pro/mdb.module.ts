import { ModuleWithProviders, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { MDBBootstrapModule } from './free/index';
import { MDBBootstrapModulePro } from './pro/index';

export {
  MDBBootstrapModule
} from './free';

export {
  MDBBootstrapModulePro
} from './pro';

const MODULES = [
  MDBBootstrapModule,
  MDBBootstrapModulePro
];

@NgModule({
  imports: [
    MDBBootstrapModule.forRoot(),
    MDBBootstrapModulePro.forRoot(),
  ],
  exports: MODULES,
  providers: [
  ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class MDBRootModules {
}

@NgModule({exports: MODULES})
export class MDBBootstrapModules {
  public static forRoot(): ModuleWithProviders {
  return {ngModule: MDBRootModules};
  }
}
