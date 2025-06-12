const app = new Vue({
    el: '#app',
    data: {
        pagina: 'LANÇAMENTOS',
        lancamentos: [
    { id: 1, name: 'Camiseta Super-Herói', price: 49.99, img: 'img/placeholder.jpg' },
    { id: 2, name: 'Tênis Colorido Kids', price: 129.99, img: 'img/placeholder.jpg' },
    { id: 3, name: 'Mochila Escolar', price: 89.99, img: 'img/placeholder.jpg' },
    { id: 4, name: 'Pijama Unicórnio', price: 59.99, img: 'img/placeholder.jpg' },
    { id: 5, name: 'Boné Estampado', price: 34.99, img: 'img/placeholder.jpg' },
    { id: 6, name: 'Kit Desenho Infantil', price: 19.99, img: 'img/placeholder.jpg' },
    { id: 7, name: 'Casaco Dino', price: 99.99, img: 'img/placeholder.jpg' },
    { id: 8, name: 'Sandália Baby', price: 39.99, img: 'img/placeholder.jpg' },
    { id: 9, name: 'Livro Ilustrado', price: 24.99, img: 'img/placeholder.jpg' },
    { id: 19, name: 'Meia Divertida (3 pares)', price: 29.99, img: 'img/placeholder.jpg' }
  ],
  outlet: [
    { id: 1, name: 'Body Bebê Estampado', price: 19.99, img: 'img/placeholder.jpg' },
    { id: 2, name: 'Chapéu Protetor UV', price: 22.99, img: 'img/placeholder.jpg' },
    { id: 3, name: 'Camiseta Personagem', price: 29.99, img: 'img/placeholder.jpg' },
    { id: 4, name: 'Tênis Leve Infantil', price: 89.99, img: 'img/placeholder.jpg' },
    { id: 5, name: 'Cueiro Algodão', price: 15.99, img: 'img/placeholder.jpg' },
    { id: 6, name: 'Touca e Luva Bebê', price: 17.99, img: 'img/placeholder.jpg' },
    { id: 7, name: 'Fantasia Infantil', price: 59.99, img: 'img/placeholder.jpg' },
    { id: 8, name: 'Calça Colorida', price: 27.99, img: 'img/placeholder.jpg' },
    { id: 9, name: 'Blusa Manga Longa', price: 35.99, img: 'img/placeholder.jpg' },
    { id: 19, name: 'Tênis com Luzinhas', price: 99.99, img: 'img/placeholder.jpg' }
  ],
  maisVendidos: [
    { id: 1, name: 'Kit Escolar Completo', price: 49.99, img: 'img/placeholder.jpg' },
    { id: 2, name: 'Tênis Velcro Kids', price: 79.99, img: 'img/placeholder.jpg' },
    { id: 3, name: 'Conjunto Infantil Verão', price: 59.99, img: 'img/placeholder.jpg' },
    { id: 4, name: 'Vestido Princesa', price: 69.99, img: 'img/placeholder.jpg' },
    { id: 5, name: 'Calça Moletom', price: 39.99, img: 'img/placeholder.jpg' },
    { id: 6, name: 'Camisa Polo Baby', price: 29.99, img: 'img/placeholder.jpg' },
    { id: 7, name: 'Touca Animalzinho', price: 24.99, img: 'img/placeholder.jpg' },
    { id: 8, name: 'Livro Interativo', price: 34.99, img: 'img/placeholder.jpg' },
    { id: 9, name: 'Babador Divertido', price: 12.99, img: 'img/placeholder.jpg' },
    { id: 19, name: 'Tênis Casual Baby', price: 89.99, img: 'img/placeholder.jpg' }
  ],
  caipirinha: [
    { id: 1, name: 'Camiseta Festa Junina', price: 39.99, img: 'img/placeholder.jpg' },
    { id: 2, name: 'Vestido Caipira Infantil', price: 69.99, img: 'img/placeholder.jpg' },
    { id: 3, name: 'Chapéu de Palha Kids', price: 19.99, img: 'img/placeholder.jpg' },
    { id: 4, name: 'Botina Infantil', price: 79.99, img: 'img/placeholder.jpg' },
    { id: 5, name: 'Lenço Xadrez', price: 14.99, img: 'img/placeholder.jpg' },
    { id: 6, name: 'Suspensório Infantil', price: 25.99, img: 'img/placeholder.jpg' },
    { id: 7, name: 'Fantasia Caipira', price: 59.99, img: 'img/placeholder.jpg' },
    { id: 8, name: 'Saia Rodada Kids', price: 44.99, img: 'img/placeholder.jpg' },
    { id: 9, name: 'Gravata Borboleta', price: 9.99, img: 'img/placeholder.jpg' },
    { id: 19, name: 'Conjunto Caipirinha', price: 89.99, img: 'img/placeholder.jpg' }
  ]
    }
})

function trocar(text) {
    if (text == app.pagina) {
        return
    }
    app.pagina = text
}