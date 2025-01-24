# Tech Challenge fase 1

### Como rodar a aplicação

1. Levante serviço do banco de dados

`docker compose up -d`

2. Verifique se o serviço foi criado corretamente

`docker compose ps`

3. Instale as dependências

`yarn install`

4. Popule o banco de dados

`yarn seed`

5. Levante o servidor

`yarn dev`

### Como abrir o storybook

`yarn storybook`
