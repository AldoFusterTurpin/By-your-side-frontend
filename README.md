# Authors
- Aldo Fuster Turpin (aldo.fuster@estudiantat.upc.edu)
- Mireia Bosque Marí (mireia.bosque@estudiantat.upc.edu)
- Marc Almirall Bertran (marc.almirall@estudiantat.upc.edu)
- Marina Díaz Reyes (marina.diaz@estudiantat.upc.edu)


# By-your-side-frontend

Frontend of the By Your Side project for the PAE university subject (FIB, UPC).

## Getting started

1. Clone this repo using `https://github.com/AldoFusterTurpin/By-your-side-frontend.git`
2. Move to the appropriate directory: `cd By-your-side-frontend`.
3. Run `docker build -t sample:dev .` to create the image.
4. Run `docker container run -d -p 8080:80 --name front-end sample:dev` to create the container, you can see your project in `http://localhost:8080`.

## Commands

- `npm start` - start the dev server
- `npm run build` - create a production ready build in `dist` folder
- `npm run lint` - execute an eslint check
- `npm run lint:fix` - execute an eslint and fix the errors
- `npm test` - run all tests
- `npm run test:watch` - run all tests in watch mode
- `npm run test:cover` - coverage mode
- `npm run cypress:open` - starts cypress
- `create docker image` - docker build -t sample:dev .
- `execute docker container` - docker container run -d -p 8080:80 --name front-end sample:dev  
- `To delete the container just run` - docker rm --force front-end

Dockerizing React App:
<https://medium.com/front-end-weekly/dockerizing-react-app-c66d1737bc8c>
