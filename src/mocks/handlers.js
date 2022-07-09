// src/mocks/handlers.js
import { rest } from 'msw'

export const handlers = [
  rest.post('/getProcess', (req, res, ctx) => {
    const { processo } = JSON.parse(req.body);
    return res(
      ctx.status(200),
      ctx.json({
        numero_processo:processo,
        nome_envolvido:'Fabricio Dorneles',
        ano_abertura:'1975',
        endereco:'Rua das Flores, 427',
        cidade:'Belo Horizonte',
        situacao: 'em andamento',
        previsao_termino:'22 dias'
      }),
    )
  }),
]
