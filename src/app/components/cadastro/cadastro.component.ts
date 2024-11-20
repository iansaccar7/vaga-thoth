import { Component } from '@angular/core';
import { ViaCepService } from './app/services/viacep.service'; // Importação do serviço

@Component({
  selector: 'app-cadastro', // Este seletor deve corresponder ao que você usou no HTML
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  usuario: any = {
    nome: '',
    sobrenome: '',
    dataNascimento: '',
    cpf: '',
    telefone: '',
    email: '',
    senha: '',
    confirmarSenha: '',
    endereco: {
      cep: '',
      logradouro: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: ''
    }
  };

  constructor(private viaCepService: ViaCepService) {} // Injeção do serviço

  // Método para buscar o endereço ao digitar o CEP
  buscarEndereco() {
    if (this.usuario.endereco.cep) {
      this.viaCepService.buscarEndereco(this.usuario.endereco.cep)
        .subscribe(
          (dados) => {
            if (!dados.erro) {
              this.usuario.endereco.logradouro = dados.logradouro;
              this.usuario.endereco.bairro = dados.bairro;
              this.usuario.endereco.cidade = dados.localidade;
            } else {
              alert('CEP não encontrado!');
            }
          },
          (error) => {
            console.error('Erro ao buscar o CEP', error);
            alert('Erro ao buscar o CEP');
          }
        );
    }
  }

  cadastrar() {
    console.log('Dados do Usuário:', this.usuario);
    alert('Cadastro realizado com sucesso!');
  }
}
