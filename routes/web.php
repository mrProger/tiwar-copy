<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

// GET запрос для получения главной страницы
Route::get('/', function () {
    return view('index');
});

// GET запрос для получения игровой страницы
Route::get('/game', function () {
    return view('game');
});

// GET запрос для получения страницы арена
Route::get('/arena', function () {
    return view('arena');
});

// GET запрос для получения страницы карьера
Route::get('/quests', function () {
    return view('quests');
});

// GET запрос для получения страницы торговец
Route::get('/shop', function () {
    return view('shop');
});

// GET запрос для получения страницы кузница
Route::get('/smithy', function () {
    return view('smithy');
});

// GET запрос для получения страницы мой герой
Route::get('/myhero', function () {
    return view('myhero');
});