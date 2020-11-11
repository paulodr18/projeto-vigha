import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class ContatoService {
contatosUrl = 'http://script.sa-east-1.elasticbeanstalk.com';

  constructor(private http: HttpClient) { }
  

  listar() {
    return this.http.get<any[]>(`${this.contatosUrl}`+'/getCadastroTeste' );
  }

  save(frm: FormGroup) {
    return this.http.get<any[]>(`${this.contatosUrl}`+'/setCadastroTeste?Nome='+frm.value.Nome+'&Email='+frm.value.Email
    +'&Telefone='+frm.value.Telefone );
  }

  delete(id : any) {
    return this.http.get<any>(`${this.contatosUrl}`+'/delCadastroTeste?Id='+id);
  }
}
