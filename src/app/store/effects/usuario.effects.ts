import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import * as usuariosActions from '../actions';


@Injectable()
export class UsuarioEffects {

    constructor(private actions$: Actions, private usuarioService: UsuarioService) {

    }

    cargarUsuarios$ = createEffect(
        () => this.actions$.pipe(
            ofType(usuariosActions.cargarUsuario),
            mergeMap(
                (action) => this.usuarioService.getUserById(action.id).pipe(
                    map((users: Usuario) => usuariosActions.cargarUsuarioSucces({ usuario: users })),
                    catchError(err => of(usuariosActions.cargarUsuarioError({ payload: err })))
                )
            )
        )
    );

}