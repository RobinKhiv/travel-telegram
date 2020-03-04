<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('blog', 'BlogController@index');
Route::get('blog/{postId}', 'BlogController@show');
Route::post('post', 'BlogController@store');
Route::patch('post/{postId}', 'BlogController@update');
Route::delete('post', 'BlogController@destroy');