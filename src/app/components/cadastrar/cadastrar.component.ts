import {Component, OnInit} from '@angular/core';
import {ProdutoService} from '../../services/produto.service'
import {Produto} from '../../models/produto.model'


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss']
})


export class CadastrarComponent implements OnInit {


    produto: Produto = {
        name: '',
        date: new Date,
        description: ''
    }
    submitted = false;

    constructor(private produtoService: ProdutoService) {

    }

    ngOnInit(): void {
    }

    saveProduto(): void {

        const data = {
            name: this.produto.name,
            date: this.produto.date,
            description: this.produto.description
        }
        console.log(data);
        this.produtoService.create(data).subscribe({
            next: (res) => {
                console.log(res);
                this.submitted = true
            },
            error: (e) => console.error(e)
        })
    }

    newProduto() {
        this.submitted = false
        this.produto = {
            name: '',
            date: new Date,
            description: ''
        }
        


    }

}