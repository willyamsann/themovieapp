import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {
  ModalDismissReasons,
  NgbModal,
  NgbModalOptions,
} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent {
  @Input()
  movies: any;
  title = 'themovieapp';
  modalOptions: NgbModalOptions;

  closeResult = '';
  constructor(private modalService: NgbModal, private router: Router) {
    this.modalOptions = { backdrop: 'static', keyboard: false };
  }

  openModalTs(content: any) {
    this.modalService.open(content, this.modalOptions).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  openInformation(id: string) {
    this.router.navigate(['/information', { id }]);
  }
}
