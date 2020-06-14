import Knex from 'knex';

export async function seed(knex: Knex){
    await knex('items').insert([
        {title: 'L�mpadas', image: 'lampadas.svg'},
        {title: 'Pilhas e Baterias', image: 'baterias.svg'},
        {title: 'Pap�is e Papel�o', image: 'papeis-papelao.svg'},
        {title: 'Res�duos Eletr�nicos', image: 'eletronicos.svg'},
        {title: 'Res�duos Org�nicos', image: 'organicos.svg'},
        {title: 'L�mpadas', image: 'lampadas.svg'},
        {title: '�leo de Cozinha', image: 'oleo.svg'},
    ]);
}