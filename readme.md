Todolist Vue & Node

======

1. Backend - Node JS

- Account Server

Passport Module을 사용하여 Oauth 2.0을 통해 Naver, Kakao 로그인(토큰 발급), 토큰 갱신, 토큰 삭제 등 유저 계정 관리를 할 수 있게 하였다.

- Todo Server

MariaDB를 통해 데이터베이스를 구현하여 Todolist를 저장하고,

RESTFul API를 통해 Todolist를 확인할 수 있게 하였고 Account Server와 cookie-session의 공유로 로그인 한 유저만 사용할 수 있게하였다.


2. Frontend - Vue JS

Vue JS를 이용하여 구성한 Frontend 웹 Server와 WAS Server들은 모두 RESTFul API를 통해 통신하며 자료를 송/수신 할 수 있게 하였다.