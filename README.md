# Typesciprt Express Example Setup

## Containts
- TypeScript
- Express
- Lint
- Hot ReLoad
- Test

## Commands
__run as develop__    
`npm run dev`  
This will start typescript file using __ts-node__. When some file was edited, procces will auto reload (using __nodemon__).
Server will run at `http://localhsot:3000`

__build__    
`npm run build`    
Compile typescript files with tsconfig.json and tsconfig.build.json. Test files and folders will be excluded. After build, dist folder will be created.

__test__    
`npm run test`    
Test `**/*.test.ts` and `./__test__/**` files using __jest__.
Example test is [here](./tests/greet.test.ts)   

__clean__    
`npm run clean`    
Remove dist folder using __rimraf__ (for Windows).


## Settings
__TypeScript__
- version 3.8.3
- [tsconfig](./tsconfig.json)
- [build config](./tsconfig.build.json)

__Express__
- express
- @types/express
- [main](./src/main.ts)

__Lint__
- eslint 
- eslint-config-prettier
- eslint-plugin-prettier
- @typescript-eslint/eslint-plugin
- @typescript-eslint/parser
- [eslintrc.json](./.eslintrc.json)
- [eslintignore](./.eslintignore)
- [prettierrc.json](./.prettierrc.json)
- [vscode eslint extention](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [vscode editor setting](./.vscode/settings.json)

__Hot ReLoad__
- nodemon
- ts-node 
- [nodemon config](./nodemon.json) 

__Test__
- jest 
- ts-jest 
- [jest config](./jest.config.js)