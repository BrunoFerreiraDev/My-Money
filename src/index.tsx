import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },
  //@ts-ignore
  seeds(server) {//função para carregar os dados iniciais
    server.db.loadData({//seta os dados iniciais
      transactions: [
        {
          id: 1,
          title: 'Agente de caixa',
          type: 'deposit',
          categorey: 'Atendente',
          amount: 1500,
          createdAt: new Date('2021-02-12 09:00:00')
        },
        {
          id: 2,
          title: 'compras',
          type: 'withdraw',
          categorey: 'mercado',
          amount: 450,
          createdAt: new Date('2021-10-12 14:00:00')
        }
      ],
    })
  },

  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    //@ts-ignore
    this.post('/transactions', (schema, request) => {//modo para inserir dados no mirage
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)//schema e meu banco de dados
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
