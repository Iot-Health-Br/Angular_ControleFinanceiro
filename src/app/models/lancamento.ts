export interface lancamento {
    id?: number;  // O campo id é opcional porque ele é gerado no back-end
    nome: string;
    descricao: string;
    data: Date;
    tipo: string;
    valor: string;
    categoria:string;
  }
  