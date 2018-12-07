import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons,NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-screen2',
  templateUrl: './screen2.component.html',
  styleUrls: ['./screen2.component.css','../app.component.css']
})
export class Screen2Component implements OnInit {

  ngOnInit(){

  }
  closeResult: string;

    changeCheck(event){
    debugger;
    if (document.getElementById("btn-entendi").classList.contains("btn-disabled")){
      document.getElementById("btn-entendi").classList.remove("btn-disabled")
    }else {
      document.getElementById("btn-entendi").classList.add("btn-disabled")
    }
    
  }

  constructor(private modalService: NgbModal) {}

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  closeModal() {
    document.getElementById("close-btn").click();    
    (<HTMLDivElement> document.getElementById("mainContainer")).className="hiddenContainer";
  }

}
