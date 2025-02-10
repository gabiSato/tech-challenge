# Tech Challenge fase 1

## Como rodar a aplicação

1. Levante serviço do banco de dados

```
docker compose up -d
```

2. Verifique se o serviço foi criado corretamente

```
docker compose ps
```

3. Instale as dependências

```
yarn install
```

4. Copie o arquivo env

```
cp .env.sample .env
```

5. Execute a primeira migração do banco de dados

```
npx prisma migrate dev --name init
```

6. Popule o banco de dados

```
yarn seed
```

7. Levante o servidor

```
yarn dev
```

## Como abrir o storybook

```
yarn storybook
```

## Vídeo de apresentação

https://github.com/user-attachments/assets/c6fa74c4-4d50-428f-a94f-935a60fa5898

