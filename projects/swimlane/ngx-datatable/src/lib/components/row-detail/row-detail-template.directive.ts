import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[ngx-datatable-row-detail-template]',
  standalone: false,
})
export class DatatableRowDetailTemplateDirective {
  constructor(public template: TemplateRef<any>) {}
}
