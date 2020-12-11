import { createAction, props } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';

export const cargarUsuario = createAction('[Usuario] cargarUsuario', props<{ id: string }>());
export const cargarUsuarioSucces = createAction('[Usuario] Cargar Usuario Succes', props<{ usuario: Usuario }>());
export const cargarUsuarioError = createAction('[Usuario] Cargar Usuario Error', props<{ payload: any }>());