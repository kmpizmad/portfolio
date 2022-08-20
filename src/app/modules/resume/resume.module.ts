import { NgModule } from '@angular/core';
import { ResumeRoutingModule } from 'src/app/routers/resume-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ResumeComponent } from './resume.component';

@NgModule({
  declarations: [ResumeComponent],
  imports: [ResumeRoutingModule, SharedModule],
})
export class ResumeModule {}
