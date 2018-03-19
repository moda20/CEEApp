import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IntegrationDayPage } from './integration-day-page';

@NgModule({
  declarations: [
    IntegrationDayPage,
  ],
  imports: [
    IonicPageModule.forChild(IntegrationDayPage),
  ],
})
export class IntegrationDayPageModule {}
