import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DatePicker } from 'primeng/datepicker';

export interface Cliente {
  nome: string;
  servicos: string[];
  horario: string;
  valorTotal: number;
  id: string;
}

@Component({
  selector: 'app-atendimentofuncionario',
  imports: [CardModule, ButtonModule, FormsModule, DatePicker],
  template: `
<div class="card flex flex-col gap-6 w-full">
  <div class="flex justify-between items-center">
    <h1 class="font-semibold text-xl">Lista de atendimentos</h1>

    <div class="flex items-center gap-2 pr-25">
      <h2 for="data" class="whitespace-nowrap">Data</h2>
      <p-datepicker 
        inputId="data"
        [(ngModel)]="date" 
        [minDate]="minDate" 
        [maxDate]="maxDate" 
        [readonlyInput]="true" 
        dateFormat="dd/mm/yy"
        class="w-40"
      />
    </div>
  </div>

  <h4 class="font-semibold text-xl">Angelica</h4>

  <div class="flex flex-wrap gap-4">
      @for(cliente of clientes; track cliente) {
        <p-card [style]="{ width: '25rem', overflow: 'hidden' }">
                   
          <ng-template #header></ng-template>
                
          <ng-template #title>Cliente: {{cliente.nome}}</ng-template>
                
          <ng-template #subtitle>{{cliente.horario}}</ng-template>
                
          <div class="flex flex-col gap-1">
            @for (servico of cliente.servicos; track servico) {
              <span> {{servico}}</span>
              }
          </div>
                    
            <ng-template #footer>
              <div class="flex gap-4">
                <p-button label="Cancel" severity="secondary" class="w-full" [outlined]="true" styleClass="w-full" />
                <p-button label="Save" class="w-full" styleClass="w-full" />
              </div>
            </ng-template>
        </p-card>
        }
  </div>
  

 





</div>
  `,
  styles: ``
})
export class Atendimentofuncionario {

clientes: Cliente[];

  date: Date | undefined;
  minDate: Date | undefined;
  maxDate: Date | undefined;

constructor() {
    this.clientes = [
      {
        id: "1001",
        nome: "Brenda Crespi",
        servicos: ["Unha Mão"],
        valorTotal: 90,
        horario: "10:30"
      },
      {
        id: "1002",
        nome: "Yasmin Benevenutti",
        servicos: ["Unha Pé", "unha Mão"],
        valorTotal: 80,
        horario: "14:00"
      },
      {
        id: "1003",
        nome: "Raissa Benevenutti",
        servicos: ["Cabelo"],
        valorTotal: 130,
        horario: "15:30"
      },
    ]
  }
  
  ngOnInit() {
      let today = new Date();
      let month = today.getMonth();
      let year = today.getFullYear();
      let prevMonth = (month === 0) ? 11 : month -1;
      let prevYear = (prevMonth === 11) ? year - 1 : year;
      let nextMonth = (month === 11) ? 0 : month + 1;
      let nextYear = (nextMonth === 0) ? year + 1 : year;
      this.minDate = new Date();
      this.minDate.setMonth(prevMonth);
      this.minDate.setFullYear(prevYear);
      this.maxDate = new Date();
      this.maxDate.setMonth(nextMonth);
      this.maxDate.setFullYear(nextYear);
    }
}
