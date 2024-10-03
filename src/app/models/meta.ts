export interface meta {
    id?: number;  // O campo id é opcional porque ele é gerado no back-end
    meta: string;
    descricao: string;
    tipo: string[];
    categoria: string[];
    valor: string;
  }
