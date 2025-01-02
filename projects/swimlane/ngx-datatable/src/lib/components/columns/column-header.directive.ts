import { Directive, TemplateRef } from '@angular/core';

@Directive({ selector: '[ngx-datatable-header-template]', standalone: false, })
export class DataTableColumnHeaderDirective {
  constructor(public template: TemplateRef<any>) {}
}
