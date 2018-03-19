import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BrainStormingPage } from './brain-storming-page';

@NgModule({
  declarations: [
    BrainStormingPage,
  ],
  imports: [
    IonicPageModule.forChild(BrainStormingPage),
  ],
})
export class BrainStormingPageModule {}
