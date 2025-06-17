const app = new Vue({
    el: '#app',
    data: {
        pagina: 'LANÇAMENTOS',
        lancamentos: [
    { id: 1, name: 'Camiseta Super-Herói', price: 49.99, img: 'data:image/webp;base64,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' },
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
