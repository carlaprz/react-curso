This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## GO-React course

### Objetivo:
presentar y analizar las librerías  a utilizar por el equipo de desarrollo mediante un ejemplo práctico y un soporte teórico.

#### Herramientas a presentar:
- React
- Redux - react-redux
- Reselect
- Redux-saga
- Immutable
- Jest
- Flow

#### Aplicación a desarrollar: (color organizer)
Se trata de una aplicación que permita a un usuario crear boards de colores y poder ver y likear colores de otros usuarios.

#### Etapas de desarrollo:

##### Tarea 1:
Objetivo aplicacion: poder buscar usuarios y likear colores de los mismos.

##### Tarea 2 (6-6-2017)
Generar un estado de redux que respete la siguiente estructura
a partir de las siguientes acciones:
1. ADD_COLOR
2. REMOVE_COLOR
3. UPDATE_COLOR
4. ADD_BOARD
5. REMOVE_BOARD

```
{
core: {
  entities: {
      boards:{
        1: {id:1, name: 'board name'}
        2: {id:2, name: 'board name2'}
      },
      colors: {
        1: {id:1, name: 'color name', value: '#ff0000'}
        2: {id:2, name: 'color name 2', value: '#ffff00'}
      }
}
```
