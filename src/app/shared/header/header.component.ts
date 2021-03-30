// Angular
import { Component, OnInit } from '@angular/core';

// Terceros

import { MenuItem } from 'primeng/api';

// Propios

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit 
{

    //Arreglo de MenuItems. Nos servirá para definir los items del header
    items: MenuItem[] = [];

    constructor() { }

    ngOnInit(): void 
    {
        // Definición de items del header
        this.items = 
        [
            {   // Sección inicio
                label:'Inicio',
                routerLink:'/'
            },
            {   // Sección Hombres
                label:'Hombres',
                items:
                [   // Sub-secciones
                    {
                        label:'Todos',
                        routerLink:'hombres/todos'
                    },
                    {
                        label:'Accesorios',
                        routerLink:'hombres/accesorios'
                    },
                    {
                        label:'Camisas',
                        routerLink:'hombres/camisas'
                    },
                    {
                        label:'Pantalones',
                        routerLink:'hombres/pantalones'
                    },
                    {
                        label:'Zapatos',
                        routerLink:'hombres/zapatos'
                    }
                ]
            },
            {   // Sección Mujeres
                label:'Mujeres',
                items:
                [   //Sub-secciones
                    {
                        label:'Todos',
                        routerLink: 'mujeres/todos'
                    },
                    {
                        label:'Accesorios',
                        routerLink: 'mujeres/accesorios'
                    },
                    {
                        label:'Camisas',
                        routerLink: 'mujeres/camisas'
                    },
                    {
                        label:'Pantalones',
                        routerLink: 'mujeres/pantalones'
                    },
                    {
                        label:'Zapatos',
                        routerLink: 'mujeres/zapatos'
                    }
                ]
            },
            {   // Sección ofertas
                label:'Ofertas',
                items:
                [   // Sub-secciones ofertas
                    {
                        label:'Todos',
                        routerLink: 'ofertas/todos'
                    },
                    {
                        label:'Accesorios',
                        routerLink: 'ofertas/accesorios'
                    },
                    {
                        label:'Camisas',
                        routerLink: 'ofertas/camisas'
                    },
                    {
                        label:'Pantalones',
                        routerLink: 'ofertas/pantalones'
                    },
                    {
                        label:'Zapatos',
                        routerLink: 'ofertas/zapatos'
                    }
                ]
            }
        ];
    }
}
