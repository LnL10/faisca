export default interface Produto{
    id:number;
    nome: string;
    preco: number;
    ligaId:number;
    descricao: string;
    imagem: any;
    tamanho?: string;
}