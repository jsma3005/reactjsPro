export const config = {
    client: {
        server: {
            protocol: 'http',
            host: 'zar.hosthot.ru'
        },
        endpoint: {
            getPokemons: {
                method: 'GET',
                uri: {
                    pathname: '/api/1/pokemons',
                }
            }
        }
    }
}

export default config;