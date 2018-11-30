# automacao-front-gdg-prudente
Projeto para a palestra sobre "automação front-end" ministrado no GDG Prudente#2 em 01/12/18

## Instalação
Primeiro clone o projeto usando
```bash
git clone https://github.com/MatheusHAS/automacao-front-gdg-prudente
```

Feito isso, use o [npm](https://www.npmjs.com/get-npm/) para instalar as dependências

```bash
npm install
```

## Rodando o projeto com BrowserSync
O browserSync roda o projeto criando um servidor web local pra você.

```bash
gulp stream
```

## Rodando tarefas únicas
Rodando a tarefa para compilar o sass (.scss)
```bash
gulp styles
```

Rodando a tarefa para minificar os javascripts (.js)
```bash
gulp scripts
```

Rodando a tarefa criar o index.html com base no template em pug (.pug)
```bash
gulp views
```

Rodando a tarefa para fazer um sprite com os svg (.svg)
```bash
gulp icons
```
## Bibliotecas usadas

* [gulp](https://www.npmjs.com/package/gulp/)
* [browserSync](https://www.npmjs.com/package/browser-sync/)
* [gulp-clean-css](https://www.npmjs.com/package/gulp-clean-css/)
* [gulp-pug](https://www.npmjs.com/package/gulp-pug/)
* [gulp-rename](https://www.npmjs.com/package/gulp-rename/)
* [gulp-sass](https://www.npmjs.com/package/gulp-sass/)
* [gulp-svgmin](https://www.npmjs.com/package/gulp-svgmin/)
* [gulp-svgstore](https://www.npmjs.com/package/gulp-svgstore/)
* [gulp-uglify](https://www.npmjs.com/package/gulp-uglify/)