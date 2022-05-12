# GET ``/``
Возвращает информация о базовых endpoint
# GET ``/static/login.html``
Возвращает форму логина
# POST ``/static/login.html``
## аргументы body 
- ``user_name`` - логин
- ``user_pass`` - пароль
## после совершения запроса идет редирект на ``/posts``
# GET ``/static/create_user.html``
Возвращает форму регистрации
# POST ``/static/create_user.html``
## аргументы body 
- ``user_name`` - логин
- ``user_pass`` - пароль
## после совершения запроса идет редирект на ``/static/login.html``
# GET ``/posts``
Возвращает страницу с постами пользователя
# POST ``/posts``
## аргументы body 
- ``id_post`` - id поста
## после совершения запроса идет редирект на ``/edit_post/:id_post``
# GET ``/edit_post/:id_post``
Возвращает страницу редактирования поста
# POST ``/edit_post/:id_post``
## аргументы body 
- ``post_text`` - текст поста
## после совершения запроса идет редирект на ``/posts``
# GET ``/create_post``
Возвращает страницу создания поста
# POST ``/create_post``
## аргументы body 
- ``user_text`` - текст поста
## после совершения запроса идет редирект на ``/posts``
# GET ``/api``
Возвращает посты пользователя
## аргументы запроса
- ``user_name`` - имя пользователя
## аргументы Headers
- ``Authorization: Bearer token `` - Заголовок авторизации