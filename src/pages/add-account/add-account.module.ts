import { TextMaskModule } from 'angular2-text-mask';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddAccountPage } from './add-account';

@NgModule({
  declarations: [
    AddAccountPage,
  ],
  imports: [
    IonicPageModule.forChild(AddAccountPage),
    TextMaskModule
  ],
})
export class AddAccountPageModule {}
