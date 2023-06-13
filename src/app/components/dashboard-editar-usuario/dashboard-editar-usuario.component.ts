import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario.interface';
import { UsuarioService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard-editar-usuario',
  templateUrl: './dashboard-editar-usuario.component.html',
  styleUrls: ['./dashboard-editar-usuario.component.css']
})
export class DashboardEditarUsuarioComponent {

  public miUsuario: Usuario | any;

  createForm: FormGroup;


  ngOnInit() {
    this.route.params.subscribe(async params => {
      let id = parseInt(params['id']);
      this.miUsuario = await this.UsuariosService.getUserById(id)
    })
  }

  constructor(private router: Router, private UsuariosService: UsuarioService, private route: ActivatedRoute) {

    this.createForm = new FormGroup({
      name: new FormControl('', []),
      lastname: new FormControl('', []),
      ciudad: new FormControl('', []),
      picture: new FormControl('', []),
      email: new FormControl('', []),
      password: new FormControl('', []),
      repitepassword: new FormControl('', []),
      roll: new FormControl('', []),
    })
  }

  async onSubmit() {

    const response = await this.UsuariosService.create(this.createForm.value);

    if (response.affected) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Usuario creado con Éxito',
        showConfirmButton: false,
        timer: 4500
      })
      this.router.navigate(['/dashboard/listar-usuarios']);
    } else {
      console.log(response);
    }
  }





}
