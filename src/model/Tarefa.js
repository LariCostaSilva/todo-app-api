
//gera número de id diferente 
var id = 0

class Tarefa {
    constructor(usuario, titulo, status){

        //in
        this.id = id++
        this.usuario = usuario
        this.titulo = titulo
        this.status = this.validaStatus(status)
    }

    validaStatus(status){
        const statusValidos = ["a fazer", "feito", "fazendo"]
        if(statusValidos.indexOf(status) > -1){
            return status
        } else {
            throw new Error("O status dever ser igual a: a fazer, feito, fazendo")
        }
    }
}

module.exports = Tarefa