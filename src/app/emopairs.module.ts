import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PairsModule } from 'ng2pairs';
import { EmoPairsComponent } from './emopairs.component';

@NgModule({
    declarations: [EmoPairsComponent],
    imports: [BrowserModule, FormsModule, PairsModule.forRoot()],
    bootstrap: [EmoPairsComponent]
})
export class EmoPairsModule {}
