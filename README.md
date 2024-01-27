# NodeJS + SQL Server

## Inicializar el proyecto con el comando:

```bash
npm i
```

# Cabe mencionar que se uso standard como linter, ya se encuentra en la configuracion del archivo package.json

```json
"eslintConfig": {
    "extends": "./node_modules/standard/eslintrc.json"
}
```

Para la conexión con base de datos, se utilizo SEQUELIZE y SQL Server
Y para las validaciones se utiliza la librería de Zod.

# Archivo .env

Les comparto como ejemplo yo configure la variables de entorno

```bash
HOST_DATABASE=192.168.3.68
NAME_DATABASE=test
USER_DATABASE=sa
PASS_DATABASE=1126
TYPE_DATABASE=mssql
```
