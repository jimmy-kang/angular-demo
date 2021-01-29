import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from 'app/components/main-page/main-page.component';
import { UserInfoTableComponent } from 'app/components/user-info-table/user-info-table.component';
import { CounterComponent } from 'app/components/counter/counter.component';
import { MaterialModule } from 'app/material/material.module';

@NgModule({
  declarations: [
    MainPageComponent,
    UserInfoTableComponent,
    CounterComponent
  ],
  exports: [
    MainPageComponent,
    UserInfoTableComponent,
    CounterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
})
export class ComponentsModule { }
