export default class Cl_salon {
    constructor(){
        this.contEstudiantes = 0
        this.contAprobados = 0
        this.cedulaMejor = 0
        this.mayor = 0
    }

    procesarEstudiante(e){
        this.contEstudiantes++
        if(e.notaFinal >= 48){
            this.contAprobados++
        }
        if(e.notaFinal > this.mayor){
            this.mayor = e.notaFinal
            this.cedulaMejor = e.cedula
        }
    }

    porcentajeAprobados(){
        return (this.contAprobados * 100) / this.contEstudiantes
    }

    devolverCedulaMejor(){
        return this.cedulaMejor
    }
}   
