import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePicker } from 'primeng/datepicker';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectModule } from 'primeng/select';
import { TextareaModule } from 'primeng/textarea';
import { SelectItemGroup } from 'primeng/api';
import { ButtonModule } from 'primeng/button';

interface Servicos {
    name: string,
    code: string
}

@Component({
  selector: 'app-list',
  imports: [InputTextModule, SelectModule, FormsModule, TextareaModule, MultiSelectModule, DatePicker, ButtonModule],
  template: `

<div class="card flex flex-col gap-6 w-full">
  <div class="font-semibold text-xl">Dados para agendar</div>

  <div class="flex flex-wrap gap-2 w-full">
    <label for="nome">Primeiro nome</label>
    <input pInputText id="nome" type="text" fluid />
  </div>

  <div class="flex flex-wrap gap-2 w-full">
    <label for="sobrenome">Sobrenome</label>
    <input pInputText id="sobrenome" type="text" fluid/>
  </div>

  <div class="flex flex-col md:flex-row gap-">
    <div class="flex flex-wrap gap-2 w-full">
      <label>Serviços</label>
      <p-multiselect
      [options]="servicos" 
      [(ngModel)]="servicosSelecionado" 
      placeholder="Selecione os serviços desejados" 
      optionLabel="name" 
      display="chip" 
      class="w-full md:w-80" 
      fluid="" 
      />
    </div>
  </div>
    
  <div class="flex flex-col md:flex-row items-end w-full gap-2 md:gap-3">
    <div class="flex flex-col gap-1 flex-1">
      <label for="data">Data</label>
      <p-datepicker 
        inputId="data"
        [(ngModel)]="date" 
        [minDate]="minDate" 
        [maxDate]="maxDate" 
        [readonlyInput]="true" 
        dateFormat="dd/mm/yy"
        class="w-full"
      />
    </div>

    <div class="flex flex-col gap-1 flex-1">
      <label for="horario">Horário</label>
      <p-select 
        inputId="horario"
        [options]="hora" 
        [(ngModel)]="horarios" 
        placeholder="Selecione o horário" 
        [group]="true" 
        class="w-full"
      >
        <ng-template let-group #group>
          <div class="flex items-center">
            <span>{{ group.label }}</span>
          </div>
        </ng-template>
      </p-select>
    </div>
  </div>

  <div class="flex flex-col gap-1 flex-1">
    <label>Observação</label>
    <textarea rows="5" cols="30" pTextarea  [(ngModel)]="observacao"></textarea>
  </div>

  <div class="card flex justify-center">
    <p-button label="Agendar" icon="pi pi-check" size="large" />
  </div>


</div>


  `,
  styles: ``
})
export class AgendaList {

  observacao!: string;
  
  dropdownItems = [
        { name: 'Cabelo', code: 'Option 1' },
        { name: 'Unha Mão', code: 'Option 2' },
        { name: 'Unha Pé', code: 'Option 3' },
        { name: 'Sobrancelha', code: 'Option 3' },
  ];

  dropdownItem = null;

  servicos!: Servicos[];

  servicosSelecionado!: Servicos[];
  
  date: Date | undefined;

  minDate: Date | undefined;

  maxDate: Date | undefined;

  hora: SelectItemGroup[];

  horarios: string | undefined;

  constructor() {
    this.servicos = [
      {name: 'Cabelo', code: 'NY'},
      {name: 'Unha Mão', code: 'RM'},
      {name: 'Unha Pé', code: 'LDN'},
      {name: 'Sobrancelha', code: 'IST'}
    ];

    this.hora = [
            {
                label: 'Manhã',
                value: 'de',
                items: [
                    { label: '08:00', value: '08:00' },
                    { label: '09:00', value: '09:00' },
                    { label: '10:00', value: '10:00' },
                    { label: '11:00', value: '11:00' }
                ]
            },
            {
                label: 'Tarde',
                value: 'us',
                items: [
                    { label: '13:00', value: '13:00' },
                    { label: '14:00', value: '14:00' },
                    { label: '15:00', value: '15:00' },
                    { label: '16:00', value: '16:00' }
                ]
            },
            {
                label: 'Noite',
                value: 'jp',
                items: [
                    { label: '17:00', value: '17:00' },
                    { label: '18:00', value: '18:00' },
                    { label: '19:00', value: '19:00' },
                    { label: '20:00', value: '20:00' }
                ]
            }
        ];
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
