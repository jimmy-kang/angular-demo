import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    exports: [
      MatTabsModule,
      BrowserAnimationsModule,
      MatTableModule,
      MatSortModule,
      MatPaginatorModule
    ],
    providers: [
    ]
})
export class MaterialModule {
    constructor() {
      console.log('MaterialModule fine');
    }
}
