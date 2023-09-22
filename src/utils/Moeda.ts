export default class Moeda{
    static formatar(valor: number){
        return new Intl.NumberFormat('pt-PT',{
            style:'currency',
            currency:'EUR'
        }).format(valor)
    }
}