import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RegisterLogService} from '../register-log.service';
import {RegisterModel} from '../register';

@Component({
    selector: 'app-register-log',
    templateUrl: './register-log.component.html',
    styleUrls: ['./register-log.component.css']
})
export class RegisterLogComponent implements OnInit {

    registers: RegisterModel[] = [];

    constructor(private route: ActivatedRoute,
                private router: Router,
                private registerLogService: RegisterLogService) {
    }

    ngOnInit(): void {
        this.registerLogService.getRegisters()
            .subscribe((res) => {
                this.registers = res;
            });
    }
}
