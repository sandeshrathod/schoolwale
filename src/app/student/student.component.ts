import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal,NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';
import { HttpClient } from '@angular/common/http';
import { GlobalUrl } from '../comman/global_variable';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})

export class StudentComponent implements OnInit {
  constructor() { 
  /*  config.backdrop = 'static';
    config.keyboard = false;
    */
  }
  
  /*open() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.name = 'World';

  }
*/
  
  ngOnInit(): void {
   
  }


  
}
