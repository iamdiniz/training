import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Entitie } from './entities/model/entitie';
import { EntitiesService } from './services/entities.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  form: FormGroup;

  entities: Entitie[] = [
    { id: "1", name: "Gui"}
  ];

  displayedColumns = ['name'];

  ngOnInit(): void {}

  constructor(private formBuilder: FormBuilder, private service: EntitiesService) {
    this.form = this.formBuilder.group({
      name: [null]
    });
  }

  clicandoEmSalvar() {
    this.service.save(this.form.value).subscribe(result => console.log(result));
  }

  title = 'front-training';
  
}
