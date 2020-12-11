import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { Usuario } from 'src/app/models/usuario.model';
import { cargarUsuario } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducer';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: [
  ]
})
export class UsuarioComponent implements OnInit, OnDestroy {

  user: Usuario | null = null;

  constructor(private router: ActivatedRoute, private store: Store<AppState>) { }
  ngOnDestroy(): void {

  }

  ngOnInit(): void {

    this.store.select('usuario').pipe(filter(data => data.user != null)).subscribe(({ user, loading, error }) => {
      this.user = user;
    })

    this.router.params.subscribe(({ id }) => {
      this.store.dispatch(cargarUsuario({ id: id }));
    });
  }

}
