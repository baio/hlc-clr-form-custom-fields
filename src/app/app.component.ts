import { Component } from '@angular/core';
import { ClrFormLayouts } from '@ng-holistic/clr-forms';
import { TextMask } from '@ng-holistic/clr-controls';
import { map } from 'rxjs/operators';
import { FormGroup, Validators } from '@angular/forms';

const definition: ClrFormLayouts.ClrFormLayout = {
    kind: 'fields',
    fields: [
        {
            id: 'custom',
            kind: 'CustomField'
        },
        {
            id: 'customControl',
            kind: 'CustomField',
            /**
             * Will sync value changes of first component inside custom
             * field template container with form value
             */
            valueAccessor: 'self'
        },
        {
            id: 'customWrappedControl',
            kind: 'CustomField',
            /**
             * Will sync value changes of first component's first child
             * inside custom field template container (this is most common case wrapper -> input)
             * with form value
             */
            valueAccessor: 'first-child',
            validators: [Validators.required]
        }
    ]
};

@Component({
  selector: 'my-app',
  template: `
    <hlc-clr-form [definition]="definition">
        <ng-template hlcCustomField="custom"> <p>any content of template could be custom field</p> </ng-template>
        <hlc-clr-text *hlcCustomField="'customControl'"></hlc-clr-text>
        <ng-template hlcCustomField="customWrappedControl" let-control="control">
            <hlc-clr-input-container label="Custom field in wrapper" [formControl]="control">
                <hlc-clr-text></hlc-clr-text>
            </hlc-clr-input-container>
        </ng-template>
    </hlc-clr-form>
  `
})
export class AppComponent {
  readonly definition = definition;
}
