import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CiudadesService } from 'src/app/services/ciudades.service';
import { UsuarioService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard-editar-usuario',
  templateUrl: './dashboard-editar-usuario.component.html',
  styleUrls: ['./dashboard-editar-usuario.component.css']
})
export class DashboardEditarUsuarioComponent {

  public id: string | any;
  public ciudades: any[] = [];

  formulario: FormGroup;


  constructor(private activateRoute: ActivatedRoute, private usuarioService: UsuarioService, private router: Router, private ciudadesService: CiudadesService) {

    this.formulario = new FormGroup(
      {
        name: new FormControl('', []),
        lastname: new FormControl('', []),
        ciudad: new FormControl('', []),
        picture: new FormControl('', []),
        email: new FormControl('', []),
        password: new FormControl('', []),
        roll: new FormControl('', []),
      }
    )
  }

  async ngOnInit() {

    this.ciudades = await this.ciudadesService.getAll();

    this.activateRoute.params.subscribe(async params => {
      const id = params['id'];
      this.id = id;
      const miUsuario = await this.usuarioService.getUserById(id);
      const { id: _, isDelete, ...usuarioSinId } = miUsuario;
      this.formulario.setValue(usuarioSinId);
    })
  }

  async onSubmit() {
    const resultado = await this.usuarioService.updateUserById(this.id, this.formulario.value);
    if (resultado) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Usuario actualizado con éxito',
        showConfirmButton: false,
        timer: 4500
      })
      this.router.navigate(['/dashboard/listar-usuarios']);
    } else {
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'ERROR: No se ha actualizado ningún curso',
        showConfirmButton: false,
        timer: 4500,
      })
    }
  }

  checkControl(controlName: string, errorName: string) {
    if (this.formulario.get(controlName)?.hasError(errorName) && this.formulario.get(controlName)?.touched) {
      return true;
    } else {
      return false;
    }
  }


}