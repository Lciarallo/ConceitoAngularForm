export class Produto {
    id?: any;            // O '?' indica que o campo é opcional
    name: string;        // 'string' com letra minúscula para tipo primitivo
    date: Date;          // Date para datas
    description: string; // 'string' com letra minúscula
  
    // Construtor inicializando os campos obrigatórios
    constructor(id?: any, name?: string, description?: string) {
      this.id = id;
      this.name = name || '';  // Caso não seja passado um valor, define como string vazia
      this.date = new Date();  // Inicializa a data com a data atual
      this.description = description || '';  // Define como string vazia se não houver valor
    }
  }
  