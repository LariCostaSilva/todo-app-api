class Usuario {

    constructor(nome, email, senha) {

        this.nome = nome
        this.email = email
        this.senha = this.verificaSenha
    }

    verificaSenha(senha) {
        if (senha.length <= 6) {
            return senha

        }

        else {
            throw new Error("senha tem que ter até 6 caracteres")
        }
    }
}

module.exports = Usuario