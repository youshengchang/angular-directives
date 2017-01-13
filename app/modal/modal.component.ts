import { Component, Output, EventEmitter } from '@angular/core';
import { Sensor } from '../core/sensor';

@Component({
    selector: 'modal',
    templateUrl: 'app/modal/modal.component.html',
    styles: [
        `
            .md-dialog {
            position: fixed;
            top: 150px;
            margin: 0 auto;
            z-index: 51;
        }

        .md-dialog-content {
            min-width: 450px;
            min-height: 100px;
            padding: 24px;
            -webkit-order: 1;
            -ms-flex-order: 1;
            order: 1;
            -webkit-flex-direction: column;
            -ms-flex-direction: column;
            flex-direction: column;
            overflow: auto;
            -webkit-overflow-scrolling: touch;
        }

        .md-dialog-content > mdl-typography--headline {
            font-weight: 600;
        }

        .md-dialog-content-body {
            padding: 15px 0 5px 0;
        }


        .md-dialog-actions {
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-order: 2;
            -ms-flex-order: 2;
            order: 2;
            box-sizing: border-box;
            -webkit-align-items: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-justify-content: flex-end;
            -ms-flex-pack: end;
            justify-content: flex-end;
            margin-bottom: 0;
            padding-right: 8px;
            padding-left: 16px;
            min-height: 52px;
            overflow: hidden;
        }

        .md-backdrop {
            background-color: rgba(33,33,33,1.0);
            opacity: .48;
            transition: opacity 450ms;
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 50;
        }
        `
    ]
})

export class ModalComponent {
     private isOpen: boolean = false;
     
    @Output() confirm: EventEmitter<any> = new EventEmitter();

     constructor() {}

    open(){
      this.isOpen = true;
    }
    ok(){
        this.isOpen = false;
        this.confirm.emit();
    }
    cancel(){
        this.isOpen = false;
    }

}