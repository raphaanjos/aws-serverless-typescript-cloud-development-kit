import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';

export async function handler(event: APIGatewayProxyEvent,
    context: Context): Promise<APIGatewayProxyResult> {
        
        const method = event.httpMethod;
        if (event.resource === '/products' && method === 'GET') {
            // Lógica para buscar todos os produtos
            // Aqui você pode adicionar a lógica para buscar os produtos do banco de dados
            console.log('Método GET para /products chamado');

            return {
                statusCode: 200,
                body: JSON.stringify({
                    message: "Todos os produtos buscados com sucesso. GET /products"
                })
            }
        }
    return {
        statusCode: 400,    
        body: JSON.stringify({
            message: "Bad Request"
        }),
    };
}