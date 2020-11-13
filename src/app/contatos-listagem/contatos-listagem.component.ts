import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../contato.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contatos-listagem',
  templateUrl: './contatos-listagem.component.html',
  styleUrls: ['./contatos-listagem.component.css']
})


export class ContatosListagemComponent implements OnInit {

  
  contatos: Array<any>;
  contato: any;

  constructor(private contatoService: ContatoService) { }

  ngOnInit() {
    this.contato = {};
  }

  listar(){
    this.contatoService.listar().subscribe(dados  => this.contatos = dados['Instance'] );
    
  }

  save(frm: FormGroup){
    this.contatoService.save(frm).subscribe(dados => this.contatos = dados);
  }

  delete(id : any){
    this.contatoService.delete(id).subscribe();
  }
}
