# Práctica del módulo de Fundamentos de HTML, CSS y Javascript de KeepCoding
La página es un CV web desarrollado con aquellos temas tocados en el módulo. 

Se puede ver el resultado a través de [github pages](https://nauelg.github.io/kcW02_Fundamentos-HTML-CSS-JS/)

## HTML
Proyecto totalmente maquetado con etiquetas semánticas de html5 y utilizando atributos autodescriptivos e intentando no sobrecargar el html de divs que actuen como wrappers y que no aporten ningún sentido estructural.

Toda la página se despliega en un mismo documento separado por secciones y con una navegación entre ellas.

## CSS
El CSS se diseña con una filosofía mobile first, de una manera totalmente responsive y sin usar ningún framework.

Se diseña de manera que las clases sean reutilizables y accediendo a los elementos grácias a la cascada de CSS usando como selector las própias etiquetas HTML siempre que se pueda.

Todo el crecimiento del diseño se hace jugando con las `template-columns` de CSS grid.

## JS
En el código de JavaScript se utiliza una filosofía de POO. Todas las clases se definen con una previsión de escalabilidad, instanciandolas desde donde corresponda para poder hacer crecer la página de una manera ordenada.