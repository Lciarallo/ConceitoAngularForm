export class Produto {
    id?: any;            
    name: string;
    date: Date;          
    description: string; 
  
    constructor(id?: any, name?: string, description?: string) {
      this.id = id;
      this.name = name || '';  
      this.date = new Date();  
      this.description = description || '';  
    }
  }
  