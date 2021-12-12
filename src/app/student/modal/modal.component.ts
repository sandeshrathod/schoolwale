import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal,NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { StudentComponent } from '../student.component';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal,config: NgbModalConfig) {

   }

  ngOnInit(): void {
 
 
  }

  sentmail(){


 
  }
}
