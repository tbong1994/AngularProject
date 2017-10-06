
import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Injectable } from '@angular/core';


@Injectable()
export class AppService {

    constructor(private router: Router){}

    private isAuthenticated:boolean;

    setIsAuthenticated(val:boolean):void{
        this.isAuthenticated = val;
    }
    getIsAuthenticated():boolean{
        return this.isAuthenticated;
    }
    logout():void {
        this.isAuthenticated=false;
        this.router.navigate(['/login']);
    }
}
