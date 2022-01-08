<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Авторизация
Route::post('/auth', 'AuthController@auth');

// Регистрация
Route::post('/register', 'AuthController@register');

// Получение всех данных игрока
Route::post('/getallplayerdata', 'GetDataController@getAllPlayerData');

// Получение логина игрока
Route::post('/getplayerlogin', 'GetDataController@getPlayerLogin');

// Получение пола игрока
Route::post('/getplayergender', 'GetDataController@getPlayerGender');

// Получение уровня игрока
Route::post('/getplayerlevel', 'GetDataController@getPlayerLevel');

// Получение баланса игрока
Route::post('/getplayerbalance', 'GetDataController@getPlayerBalance');

// Получение опыта игрока
Route::post('/getplayerexp', 'GetDataController@getPlayerExp');

// Запись всех данных игрока в бд
Route::post('/writeallplayerdata', 'WriteDataController@writeAllPlayerData');

// Запись уровня игрока в бд
Route::post('/writeplayerlevel', 'WriteDataController@writePlayerLevel');

// Запись баланса игрока в бд
Route::post('/writeplayerbalance', 'WriteDataController@writePlayerBalance');

// Запись опыта игрока в бд
Route::post('/writeplayerexp', 'WriteDataController@writePlayerExp');