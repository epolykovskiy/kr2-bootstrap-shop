# Учебный frontend-проект на Bootstrap

## Описание

Проект выполняется в рамках дисциплины «Фронтенд и бэкенд разработка».

Проект представляет собой учебную версию сайта интернет-магазина, разработанную с использованием Bootstrap.

## Контрольная работа №2

Тема: «CSS-фреймворки: разработка интерфейса на Bootstrap или альтернативном CSS-фреймворке».

## Используемые технологии

- HTML;
- Bootstrap;
- CSS;
- Git;
- GitHub.

## Подключение Bootstrap

В проекте Bootstrap 5.3.8 подключён локально, без CDN. Файлы фреймворка (compiled-версия) размещены в папке `vendor/bootstrap/`.

Используются:

- `vendor/bootstrap/css/bootstrap.min.css`;
- `vendor/bootstrap/js/bootstrap.bundle.min.js`.

Файл `css/custom.css` подключается после Bootstrap, чтобы переопределять отдельные стили проекта.

## Структура проекта

```text
kr2-bootstrap-shop/
├── index.html
├── catalog.html
├── product.html
├── order.html
├── css/
│   └── custom.css
├── images/
├── vendor/
│   └── bootstrap/
│       ├── css/
│       │   └── bootstrap.min.css
│       └── js/
│           └── bootstrap.bundle.min.js
├── README.md
└── .gitignore
```

- `index.html` — главная страница;
- `catalog.html` — каталог товаров;
- `product.html` — страница товара;
- `order.html` — форма заявки;
- `css/custom.css` — дополнительные стили проекта;
- `images/` — изображения проекта;
- `vendor/bootstrap/` — локальные файлы Bootstrap;
- `README.md` — описание проекта.

## Автор

ФИО: Полыковский Евгений Александрович
Группа: ЭФБО-04-25

## История выполнения

- Практическая работа 9: выполнена главная страница на Bootstrap-сетке.
- Практическая работа 10: добавлены страницы каталога, товара и заявки на Bootstrap-компонентах.

## Практическая работа 9

Выполнена главная страница на Bootstrap-сетке.

Реализовано:

- подключение Bootstrap через CDN;
- подключение `css/custom.css`;
- шапка страницы;
- Bootstrap-навигация;
- hero-блок на сетке;
- блок преимуществ;
- сетка популярных товаров;
- подвал страницы.

## Практическая работа 10

Тема: «Страница на Bootstrap: компоненты».

Выполнено:

- добавлена единая Bootstrap-навигация;
- создана страница каталога `catalog.html`;
- создана страница товара `product.html`;
- создана страница заявки `order.html`;
- использованы компоненты `navbar`, `card`, `btn`, `badge`, `alert`, `modal`, `form-control`, `form-select`, `input-group`, `form-check`, `accordion`;
- добавлен файл `css/custom.css` для минимальных доработок;
- проект подготовлен к сдаче контрольной работы №2.
