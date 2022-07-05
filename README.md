# WeatherApp


## Apresentação
O WeatherApp é um aplicativo que lhe informa sobre como 

## Principais bibliotecas

- axios
- date-fns
- expo-font
- expo-location
- humps
- react-native-dotenv
- react-native-svg
- react-query
- styled-components

## API

- [OpenWeather](https://openweathermap.org/api) - Utilizada para obter informações metereologicas.


## Instantalção:

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

## Design System:

Para a criação do Design System, foi utilizada a metodologia de Atomic Design essa metodológia consiste em dividir os elementos em cinco categorias, que trabalham juntas com o intuito de criar interfaces hierárquicas. Cada um dos cinco estágios desempenha um papel fundamental no design de interface. São eles:

- **Átomos:** São blocos de construção básicos da matéria que formam a interface.

- **Moleculas:** Grupos simples de elementos da interface do usuário que funcionam juntos como uma unidade.

- **Organismos:** Conjuntos de moléculas que funcionam juntas como uma unidade. Uma molécula com outra molécula (ou mais), formam um organismo.

- **Templates:** São objetos no nível de página, onde colocamos componentes em um layout formando a estrutura de página.

- **Páginas:** É o resultado final, exatamente como o template, só que completa de informações reais.

*Obs: No projeto o Design System está localizado na pasta* `src/ui/components/`.
