import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { DataService } from './services/data.service';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [CommonModule, TranslateModule],
  exports: [TranslateModule, NotFoundComponent],
  providers: [DataService],
})
export class SharedModule {}
