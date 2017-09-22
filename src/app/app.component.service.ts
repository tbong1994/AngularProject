
import { Router } from '@angular/router';
import { Component,OnInit } from '@angular/core';

export class AppService {
    private isAuthenticated:boolean;

    setIsAuthenticated(val:boolean):void{
        this.isAuthenticated = val;
    }
    getIsAuthenticated():boolean{
        return this.isAuthenticated;
    }
}
