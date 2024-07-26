export interface ITexts {
    data: IText[];
}

export interface IText {
    id: number;
    key: TextKey;
    value: string;
}

export type TextKey =
    | "{number} дней"
    | "{number} отзывов"
    | "{number} просмотров"
    | "{number} товаров"
    | "{number} человек просмотрели"
    | "E-mail"
    | "Авторизация"
    | "Авторизация пользователя успешно"
    | "Адрес"
    | "Адрес добавлен"
    | "Адрес доставки"
    | "Адрес удален"
    | "Аккаунт"
    | "Акции, специальные предложения и обзоры на главной странице помогут вам найти подходящие товары"
    | "Больше информации"
    | "Бренды"
    | "Быстрый просмотр"
    | "В дальнем космосе"
    | "В избранном пока ничего нет"
    | "В корзине"
    | "В корзине пока ничего нет"
    | "в корзину"
    | "В корзину"
    | "В списке сравнения пока ничего нет"
    | "в убыванию"
    | "Ваш адрес"
    | "Ваша корзина"
    | "Ваша сообщение отправлено"
    | "Ваше имя"
    | "Ваши данные"
    | "Ваши пожелания"
    | "Введите код"
    | "Введите свою номер, на которую мы пришлем код восстановления"
    | "Введите смс-код"
    | "вернуться в"
    | "Вернуться к покупкам "
    | "Вернуться на главную"
    | "Вернуться назад"
    | "Видеообзоры"
    | "Войти"
    | "Восстановление пароля"
    | "Все акции"
    | "Все категории"
    | "Все новинки"
    | "Все отзывы"
    | "Все права защищены"
    | "Все товары"
    | "Все характеристики"
    | "Все хиты"
    | "Вы можете добавлять различные товары в корзину прямо из каталога"
    | "Вы с нами уже {number}"
    | "Вы уверены что хотите выйти?"
    | "Выберите адрес"
    | "Выберите длительность рассрочки"
    | "Выйти"
    | "Выйти из аккаунта"
    | "Главная"
    | "Данные отправлены"
    | "Дата"
    | "Дата заказа"
    | "Детали заказа"
    | "Длительность рассрочки"
    | "дней"
    | "До завершения осталось"
    | "Добавить"
    | "Добавить больше продуктов"
    | "Добавить в корзину"
    | "Добавить все в избранное"
    | "Добавлено в корзину"
    | "Добавлять"
    | "Доставка и оплата"
    | "Если вы наполняли корзину при прошлом визите, авторизуйтесь, чтобы увидеть выбранные товары"
    | "Если у вас были товары в избранном при прошлом визите, авторизуйтесь, чтобы увидеть их"
    | "Если у вас были товары для сравнения при прошлом визите, авторизуйтесь, чтобы увидеть их"
    | "Забыли пароль?"
    | "Завершено"
    | "Загляните а главую или воспользуйтесь поиском"
    | "Загляните на главную или воспользуйтесь поиском"
    | "Загрузка…"
    | "Заказ"
    | "Заказы"
    | "Зарегистрироваться"
    | "Зарегистрируйтесь на alifnasia"
    | "Здесь пока ничего нет"
    | "из"
    | "Избранное"
    | "Изменение пароля"
    | "Изменить"
    | "Изменить пароль"
    | "Имя и Фамилия"
    | "Имя и фамилия получателя"
    | "Информация"
    | "Информация о вас и о вашем аккаунте"
    | "Информация профиля изменена!"
    | "Итого"
    | "Как с вами связаться?"
    | "Карта магазинов"
    | "Каталог"
    | "Каталог товаров"
    | "Категории"
    | "Код из СМС"
    | "Код подтверждения должен быть не менее 6 символов"
    | "Код подтверждения отправлен на {number}"
    | "Код товара"
    | "Количество"
    | "Колл-центр"
    | "Комментарии успешно отправлены"
    | "Комментарий доставщику"
    | "Компания"
    | "Контактная информация"
    | "Контакты"
    | "Конфиденциальность"
    | "Корзина"
    | "Купить в один клик"
    | "Купить в рассрочку"
    | "Купить сейчас"
    | "Купить сразу"
    | "Личные данные"
    | "Лучшие новинки"
    | "Лучшие цены"
    | "Люди часто ищут"
    | "месяцев"
    | "Метод доставки"
    | "Метод оплаты"
    | "минут"
    | "Мои баллы"
    | "Мои заказы"
    | "Мои купоны"
    | "Мои объявления"
    | "Мои уведомления"
    | "Мой Cashback"
    | "Мой аккаунт"
    | "Мой лимит"
    | "Мой лот"
    | "Моя история покупок"
    | "Мы больше не сможем определять доступность товаров на складею у вас исчезнет рекомендации"
    | "На ваш номер отправлен смс-код"
    | "Нажав на эту кнопку, вы подтверждаете свою покупку. Продавец получит ваш заказ."
    | "Нажимая на кнопку “Оформить заказ” вы соглашаетесь у условиями Оферты"
    | "Нажмите на ссылку, чтобы выбрать фотографии или просто перетащите их сюда"
    | "Написать"
    | "Напишите нам"
    | "Настройки аккаунта"
    | "Наши контакты"
    | "Наши модераторы свяжутся с вами"
    | "Наши операторы с вами свяжутся как только ваша заявка пройдет модерацию."
    | "Наши редакторы уже в процессе написания новой статьи"
    | "Не удалось оформить заказ на alifnasia"
    | "Неверный формат номера карты"
    | "Неправильный адрес электронной почты"
    | "Неправильный формат номера телефона"
    | "Нет аккаунта?"
    | "нет в наличии"
    | "Нет в наличии"
    | "Нет продуктов"
    | "Нет такого количества товаров в наличии"
    | "Ничего не найдено"
    | "новинка"
    | "Новинкам"
    | "Новости"
    | "Новый адрес"
    | "Новый пароль"
    | "Номер карты"
    | "Номер телефона"
    | "Номер телефона на alifnasia"
    | "Номер телефона подтверждён"
    | "Номер телефона привязанного к карте"
    | "Нужная вам страница либо удалена либо перемещена по новому адресу"
    | "Нужно ввести не более 255 символов"
    | "Нужно ввести не более 5000 символов"
    | "О компании"
    | "Ознакомлен и согласен с условиями Правил пользования торговой площадкой и Правилами возврата"
    | "Описание"
    | "Оплатить через alifnasia"
    | "Остаться"
    | "Отправить"
    | "Отправлять"
    | "Оформить заказ"
    | "Оформление заказа"
    | "Оформление рассрочки"
    | "Очистить корзину"
    | "Ошибка отправки электронной почты"
    | "Ошибка при входе"
    | "Ошибка при выходе"
    | "Ошибка при отправке смс-код"
    | "Ошибка при подтверждении номера телефона"
    | "Ошибка при подтверждении смс-код"
    | "Ошибка при регистрации"
    | "Ошибка при сбросе пароля"
    | "Пароли должны совпадать друг с другом"
    | "Пароль"
    | "Пароль должен быть не менее 8 символов"
    | "Пароль успешно изменен"
    | "Перейти к оформлению"
    | "Персональные данные"
    | "по возрастанию"
    | "Подкатегории"
    | "Подробнее"
    | "Подтвердите пароль"
    | "Подтверждение номера телефона"
    | "Позвонить"
    | "Поиск"
    | "Поиск любых товаров"
    | "Показать еще"
    | "Показывать по {number}"
    | "Покупателям"
    | "Поле обязательно для заполнения"
    | "Поле поиска пустое"
    | "Пользователь вышел из системы"
    | "Пользователь с таким номером уже существует!"
    | "Помощь покупателю"
    | "Понятно"
    | "Популярное сейчас"
    | "Популярности"
    | "Популярные бренды"
    | "Популярные категории"
    | "Популярные товары"
    | "Посмотреть заказы"
    | "Похожие товары"
    | "Пред. && След."
    | "Привет"
    | "Придумайте новый пароль"
    | "Принятие условий обязательно"
    | "Продолжить"
    | "Производитель"
    | "Профиль"
    | "Размер файла должен быть не более 2048 КБ."
    | "Разработка"
    | "Разработчик"
    | "Регистрация"
    | "Регистрация прошла успешно"
    | "Редактирование прошло успешно"
    | "Режим работы"
    | "Рейтингу"
    | "Рекомендуемые продукты"
    | "С этим товаром покупали"
    | "Свяжитесь с нами"
    | "секунд"
    | "Селфи с паспортом"
    | "Скидкам"
    | "Скоро в магазине"
    | "Скрыть"
    | "Смотреть все"
    | "Смотреть еще"
    | "СМС-код успешно подтвержден"
    | "Сообщение"
    | "Сортировать по"
    | "Сохранить изменения"
    | "Специально для вас"
    | "Специальное предложение"
    | "Способ оплаты"
    | "Сравнение"
    | "Срок действия карты"
    | "Старый пароль"
    | "Статус"
    | "стоимость заказа"
    | "Стоит посмотреть"
    | "Страница не найдена"
    | "Страница прописки"
    | "сум"
    | "сум/мес"
    | "Сумма"
    | "Текущий пароль"
    | "Телефон"
    | "Тип заказа"
    | "топ"
    | "Удалить"
    | "Уже есть аккаунт?"
    | "Управляйте своими адресами"
    | "Управляйте своими паролями"
    | "Ура, Ваша заявка отправлена!"
    | "Успейте купить"
    | "Фильтры"
    | "Фото паспорта"
    | "Фотография успешно обновлена"
    | "Характеристики"
    | "Хит"
    | "Хиты продаж"
    | "Цена"
    | "Цене"
    | "часов"
    | "Человека купили"
    | "Читать далее"
    | "Что-то пошло не так ☹️"
    | "Электронная почта была успешно отправлена"
    | "Я ищу"
    | "Я подтверждаю, что ознакомлен(а) с Политикой конфиденциальности";
