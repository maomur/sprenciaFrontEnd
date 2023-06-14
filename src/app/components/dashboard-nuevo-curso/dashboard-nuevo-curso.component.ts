import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Curso } from 'src/app/interfaces/curso.interface';
import { CategoriasService } from 'src/app/services/categorias.service';
import { CiudadesService } from 'src/app/services/ciudades.service';
import { CursosService } from 'src/app/services/cursos.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-dashboard-nuevo-curso',
  templateUrl: './dashboard-nuevo-curso.component.html',
  styleUrls: ['./dashboard-nuevo-curso.component.css']
})
export class DashboardNuevoCursoComponent {

  public lastCursos!: Curso[];
  public curso!: string;
  public cursos: Curso[] = [];

  public categoria!: string;
  public categorias: any[] = [];

  public ciudad!: string;
  public ciudades: any[] = [];

  public horario!: string;
  public horarios: any[] = [];

  public cursosCategoria: Curso[] = [];
  public cursosCiudad: Curso[] = [];
  public cursosHorario: Curso[] = []



  createForm: FormGroup;

  constructor(private cursosService: CursosService, private router: Router, private CategoriasService: CategoriasService, private CiudadesService: CiudadesService) {

    this.createForm = new FormGroup({
      nombre: new FormControl('', [
        Validators.required, Validators.minLength(10)
      ]),
      descripcion: new FormControl('', [
        Validators.required, Validators.minLength(10)
      ]),
      fecha_inicio: new FormControl('', [
        Validators.required
      ]),
      fecha_fin: new FormControl('', [
        Validators.required
      ]),
      foto1: new FormControl('', []),
      foto2: new FormControl('', []),
      foto3: new FormControl('', []),
      precio: new FormControl('', [
        Validators.required
      ]),
      horario: new FormControl('', [
        Validators.required
      ]),
      total_horas: new FormControl('', [
        Validators.required
      ]),
      estado: new FormControl('', [
        Validators.required
      ]),
      rating: new FormControl('', [
        Validators.required
      ]),
      ciudad: new FormControl('', [
        Validators.required
      ]),
      categoria: new FormControl('', [
        Validators.required
      ])
    })
  }



  async ngOnInit() {
    this.categorias = await this.CategoriasService.getAll();
    this.ciudades = await this.CiudadesService.getAll()
  }


  async getDataCreate() {

    let resultado = await this.cursosService.create(this.createForm.value);

    if (resultado.affectedRows) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Curso creado con éxito',
        timer: 4500
      })
      this.router.navigate(['/dashboard/listar-cursos']);
    } else {
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'ERROR: No se ha agregado ningún curso',
        text: `${resultado}`,
        timer: 4500,
      })
    }

  }

  checkControl(controlName: string, errorName: string) {
    if (this.createForm.get(controlName)?.hasError(errorName) && this.createForm.get(controlName)?.touched) {
      return true;
    } else {
      return false;
    }
  }


}