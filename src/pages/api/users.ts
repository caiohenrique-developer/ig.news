import { NextApiRequest, NextApiResponse } from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
    const users = [
        {id: 1, name: 'Primeiro nome'},
        {id: 2, name: 'Nome do meio'},
        {id: 3, name: 'Sobrenome'},
    ]

    response.json(users)
}