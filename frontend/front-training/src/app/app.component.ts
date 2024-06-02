import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Entitie } from './entities/model/entitie';
import { EntitiesService } from './services/entities.service';
import { Observable, concatMap, tap } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  form: FormGroup;
  dataSource = new MatTableDataSource<Entitie>();
  entities: Observable<Entitie[]>;
  displayedColumns = ['name'];

  constructor(private formBuilder: FormBuilder, private service: EntitiesService, private cdr: ChangeDetectorRef) {
    this.form = this.formBuilder.group({
      name: [null]
    });
    this.entities = this.service.list().pipe();
  }

  ngOnInit(): void {
    this.service.list().subscribe(entities => {
      this.dataSource.data = entities;
    });
  }

  clicandoEmSalvar() {
    this.service.save(this.form.value).pipe(
      concatMap(() => this.service.list()),
      tap(entities => {
        this.dataSource.data = entities;
        this.form.reset();
        this.cdr.markForCheck();  // Marca para verificar as mudanças
      })
    ).subscribe();
  }

  title = 'front-training';
  
}
