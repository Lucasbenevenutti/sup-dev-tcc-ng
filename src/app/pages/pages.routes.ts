import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { AgendaList } from './agenda';
import { AgendarCliente } from './agendarCliente';
import { Atendimentofuncionario } from './atendimentoFuncionario';
import { Atendimentos } from './atendimentos';

export default [
    { path: 'dashboard', component: Dashboard },
    { path: 'agenda', data: { breadcrumb: 'Agenda' }, component: AgendaList },
    { path: 'atendimentos', data: { breadcrumb: 'Atendimentos' }, component: Atendimentos },
    { path: 'agendarCliente', data: { breadcrumb: 'Agendar Cliente' }, component: AgendarCliente },
    { path: 'atendimentoFuncionario', data: { breadcrumb: 'Atendimento Funcionario' }, component: Atendimentofuncionario  },
] as Routes;
