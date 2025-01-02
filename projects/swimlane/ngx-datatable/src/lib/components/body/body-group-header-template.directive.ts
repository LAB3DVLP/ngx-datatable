import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[ngx-datatable-group-header-template]',
  standalone: false,
})
export class DatatableGroupHeaderTemplateDirective {
  constructor(public template: TemplateRef<any>) {}
}
