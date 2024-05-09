import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FornecedorService } from '../../services/fornecedor.service';
import { Fornecedor } from '../../interfaces/Fornecedor';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-fornecedor-detail',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './fornecedor-detail.component.html',
  styleUrl: './fornecedor-detail.component.css'
})
export class FornecedorDetailComponent {
  fornecedor?:Fornecedor;
  fornecedorForm: FormGroup = new FormGroup({});

  constructor(private route: ActivatedRoute, private fornecedorService: FornecedorService, private formbuilder: FormBuilder){

    this.getClientById()

  }
  id?:string;
  getClientById(){

    this.id = this.route.snapshot.paramMap.get('id')??'';
    
    this.fornecedorService.getById(this.id).subscribe((fornecedorResponse) => (this.fornecedor =  fornecedorResponse))
    this.fornecedorForm = this.formbuilder.group({

      nome:[this.fornecedor?.nome],
      telefone:[this.fornecedor?.telefone],
      endereco:[this.fornecedor?.endereco],
      id:[this.fornecedor?.id]

 
    })

  }

  update():void{
    if(this.fornecedorForm.valid){
      const fornecedorNovo:Fornecedor = {
        nome: this.fornecedorForm.value.nome,
        endereco: this.fornecedorForm.value.endereco,
        telefone: this.fornecedorForm.value.telefone,
        id: this.fornecedorForm.value.id
      }
      this.fornecedorService.atualizar(fornecedorNovo).subscribe()
      alert('Fornecedor alterado com sucesso!')


    }
  }

}
