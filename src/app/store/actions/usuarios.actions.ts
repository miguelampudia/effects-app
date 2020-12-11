import { createAction, props } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';

export const cargarUsuarios = createAction('[Usuarios] cargarUsuarios');
export const cargarUsuariosSucces = createAction('[Usuarios] Cargar Usuario Succes', props<{ usuarios: Usuario[] }>());
export const cargarUsuariosError = createAction('[Usuarios] Cargar Usuario Error', props<{ payload: any }>());