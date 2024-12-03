# Lamebel

## Введение

Интернет-магазин, разработанный с использованием Next.js (App Router), TypeScript, Tailwind и SCSS. Включает такие функции как каталог товаров, корзина покупок, список любисых товаров, оформление заказа без встроенной покупки, профиль(заказы, адреса, изменение данных профиля).

## Технологический стек

Next.js v.14.2.5 (https://nextjs.org/): App Router

TypeScript: для типизации

Formik(https://formik.org/) и Yup(https://github.com/jquense/yup): для управления состояниеми форм, валидация форм, отправки форм

Swiper(https://swiperjs.com/): для свайперов

React hot toast(https://react-hot-toast.com/): для всплывающих уведомлений

@headlessui/react v.2.1 (https://headlessui.com/): для модальных окон

@fancyapps/ui: для галереи продукта

SCSS: для удобства написания стилей

## Начало работы

### Установка

#### Клонирование репозитория:

git clone https://github.com/yourusername/your-repo-name.git .

#### Установка зависимостей:

npm install

#### Настройка переменных окружения:

Скопируйте файл .env.example и замените значчения переменных на необходимые:
PATTERN=
API_URL=https://$PATTERN/api/v2/

#### Запуск в режиме разработки:

npm run dev
Проект будет доступен по адресу http://localhost:8080

#### Сборка и запуск в продакшн режиме:

npm run build
npm start

### Структура проекта

в /public находятся все статичные картинки и svg спрайты

в /src/api прописаны все запросы к api, fetch.ts - кастомные fetch функиции для get и mutate запросов

в /src/app расположены все страницы, global.scss - все стили которые удобнее или лучше было написать в scss файле, var.scss - переменные scss

в /src/components/layout расположены компоненты для header, footer и обертки
в /src/components/pages расположены компоненты для каждой страницы которые используются только на этой странице
в /src/components/ui расположены компоненты которые используются на разных страницах

в /src/context находятся React contexts

в /src/hooks находятся кастомные хуки

в /src/types/api находятся типы и интерфейсы для функций которые находятся /src/api
в /src/types/context находятся типы и интерфейсы для React context которые находятся /src/context
в /src/types/props/pages.types.ts находятся типы и интерфейсы для компонентов которые находятся в /src/components/pages
в /src/types/props/ui.types.ts находятся типы и интерфейсы для компонентов которые находятся в /src/components/ui
в /src/types/props/types.ts находятся типы и интерфейсы для остальных комопнентов которые не находятся ни в /src/components/ui, ни в /src/components/ui
в /src/types/form.types.ts находятся типы и интерфейсы для форм
в /src/types/pageParams.types.ts находятся типы и интерфейсы для параметров страниц
в /src/types/types.ts находятся все остальные типы и интерфейсы которые не подходят для остальных файлов

в /src/utils находятся вспомогающие функции

в /src/i18n/routing.ts можно прописать языки сайта и выбрать значение по умолчанию

в /next.config.mjs можно прописать hostname для картинок, добавить env переменные и прописать статичные редиректы

в /tailwind.config прописаны кастомные цвета которые ссылаются на /src/app/[locale]/var.scss и остальные кастомные стили
