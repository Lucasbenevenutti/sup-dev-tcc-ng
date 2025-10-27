import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
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
  selector: 'app-atendimentos',
  imports: [CardModule, ButtonModule, FormsModule, DatePicker, AccordionModule],
  template: `

<div class="card flex flex-col gap-6 w-full">
  <div class="flex justify-between items-center">
    <h2 class="font-semibold text-xl">Lista de atendimentos</h2>

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
   
  
  <div class="card flex justify-center">
    <p-accordion value="0">
      <p-accordion-panel value="0">
        <p-accordion-header><h4>Angelica</h4></p-accordion-header>
        <p-accordion-content>
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
          </p-accordion-content>
        </p-accordion-panel>
        
        <p-accordion-panel value="1">
          <p-accordion-header>Header II</p-accordion-header>
          <p-accordion-content>
            <p class="m-0">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
              aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
              enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
              qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
            </p>
          </p-accordion-content>
        </p-accordion-panel>
        
        <p-accordion-panel value="2">
          <p-accordion-header>Header III</p-accordion-header>
          <p-accordion-content>
            <p class="m-0">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
            </p>
          </p-accordion-content>
        </p-accordion-panel>
      </p-accordion>
    
  </div>
    
    
</div>





<div class="card flex flex-col gap-6 w-full">
</div>
  `,
  styles: ``
})
export class Atendimentos {

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
