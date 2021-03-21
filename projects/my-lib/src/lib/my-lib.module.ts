import { ModuleWithProviders, NgModule } from '@angular/core';
import { SampleComponent } from './components/sample.component';
import { SAMPLE_CONFIG, SampleConfig } from './config/config';

@NgModule({
  declarations: [SampleComponent],
  imports: [],
  exports: [SampleComponent]
})
export class MyLibModule {
  static forRoot(config: SampleConfig = {}): ModuleWithProviders<MyLibModule> {
    return {
      ngModule: MyLibModule,
      providers: [
        { provide: SAMPLE_CONFIG, useValue: config }
      ]
    };
  }
}
