import { Directive, TemplateRef } from '@angular/core';

@Directive({ selector: '[ngx-datatable-tree-toggle]', standalone: false, })
export class DataTableColumnCellTreeToggle {
  constructor(public template: TemplateRef<any>) {}
}
