import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';

@Component({
  selector: 'app-navbar',
  imports: [Menubar],
  template: `
    <p-menubar [model]="items" />
  `,
  styles: ``,
})
export class AppNavbar {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
        { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['/pages/dashboard'] },
        { label: 'Agenda', icon: 'pi pi-fw pi-circle', routerLink: ['/pages/agenda'] },
        { label: 'Cliente agendar', icon: 'pi pi-fw pi-circle', routerLink: ['/pages/agendarCliente'] },
        { label: 'Atendimento Funcionario', icon: 'pi pi-fw pi-circle', routerLink: ['/pages/atendimentoFuncionario'] },
        { label: 'Atendimentos', icon: 'pi pi-fw pi-circle', routerLink: ['/pages/atendimentos'] },
    ]
  }
}
