<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::post('/save-expense','ExpenseController@save');
Route::get('/get-expenses','ExpenseController@get');
Route::fallback(function(){

    if( Auth::check())
        return view('home');
    else
        return redirect()->route('login');
});
