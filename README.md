# WeatherApp


<div class="row">
  <img src="https://user-images.githubusercontent.com/19613330/177512053-91ec203e-fab9-445b-8102-d8b38e24b115.gif" width="30%" height="30%" />
  <img src="https://user-images.githubusercontent.com/19613330/177518442-ea11ea24-e795-4994-a57e-93abdc2ef723.gif" width="30%" height="30%" />
<div>


## ✨ Apresentação 
O WeatherApp é um ótimo aplicativo para quem quer ficar informado das previsões e condições climáticas atuais.


## 🚀 Instantalção:

1 - Download do repositório
```sh
git clone https://github.com/MatheusDaeuble/weather-app.git
```

2 - Instalando dependências
```sh
yarn install
```

3.1 - Construir no iOS
```sh
yarn ios
```

3.2 - Construir no Android
```sh
yarn android
```
## 🛠️ Principais bibliotecas

- axios
- date-fns
- expo-font
- expo-location
- humps
- react-native-dotenv
- react-native-svg
- react-query
- styled-components


## ⚙️ API

- [OpenWeather](https://openweathermap.org/api) - Utilizada para obter informações metereologicas.


## 📱 Design System:

Para a criação do Design System, foi utilizada a metodologia de Atomic Design essa metodológia consiste em dividir os elementos em cinco categorias, que trabalham juntas com o intuito de criar interfaces hierárquicas. Cada um dos cinco estágios desempenha um papel fundamental no design de interface. São eles:

- **Átomos:** São blocos de construção básicos da matéria que formam a interface.

- **Moleculas:** Grupos simples de elementos da interface do usuário que funcionam juntos como uma unidade.

- **Organismos:** Conjuntos de moléculas que funcionam juntas como uma unidade. Uma molécula com outra molécula (ou mais), formam um organismo.

- **Templates:** São objetos no nível de página, onde colocamos componentes em um layout formando a estrutura de página.

- **Páginas:** É o resultado final, exatamente como o template, só que completa de informações reais.

*Obs: No projeto o Design System está localizado na pasta* `src/ui/components/`.


## 🧪 Testes:


Para realizar os testes automatizados basta usar o comando:
```sh
yarn test
```
*Nota: Quando os testes são executados é gerado uma pasta *`/coverage` *nela é possível verificar a cobertura dos testes.*

## 🌄 Ilustrações:

#### Geração:
Para gerar os components SVGs foi utilizada a lib `@svgr/cli`, com ela é possível transofrmar arquivos SVG em components para o react-native, para isso basta usar:
```sh
yarn build:illustrations
```
#### Novas ilustrações:
Para adicionar novas illustrações basta adicionar o arquivo svg em `/assets/illustrations`, após isso use novamente o comando para gerar as ilustrações.


## 📘 Referências

- Esta aplicação utiliza dados fornecidos pela [OpenWeather API](https://openweathermap.org/api) 
- A explicação sobre a metodologia de Atomic Design possui referências de https://medium.com/pretux/atomic-design-o-que-%C3%A9-como-surgiu-e-sua-import%C3%A2ncia-para-a-cria%C3%A7%C3%A3o-do-design-system-e3ac7b5aca2c

