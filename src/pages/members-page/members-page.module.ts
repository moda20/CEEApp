import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MembersPage } from './members-page';
import { IonicImageViewerModule } from 'ionic-img-viewer';
@NgModule({
  declarations: [
    MembersPage,
  ],
  imports: [
    IonicPageModule.forChild(MembersPage),
    IonicImageViewerModule
  ],
})
export class MembersPageModule {}
