import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AgendaComponent } from '../projects/07_agenda_contactos/src/app/agenda/agenda.component';

bootstrapApplication(AgendaComponent, appConfig)
  .catch((err) => console.error(err));
