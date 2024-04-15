import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lbl-genred',
  templateUrl: './lbl-genred.component.html',
  styleUrl: './lbl-genred.component.css'
})
export class LblGenredComponent {

    @Input({required:true}) title : string | undefined
}
