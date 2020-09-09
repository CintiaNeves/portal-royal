export default class Usuario{

    constructor(cpf='', email='', senha='', confSenha=''){
        this.cpf = cpf;
        this.email = email;
        this.senha = senha;
        this.confSenha = confSenha;
    }
}