import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpComponent } from '../simp/simp.component';
import { MyServiceService } from '../my-service.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SimpComponent],
  providers: [MyServiceService],
  exports: [SimpComponent]
})
export class MyModuleModule { }
