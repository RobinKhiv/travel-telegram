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
    echo 'test';
    return $request->user();
});
Route::middleware('api')->get('/post/{postId}', function ($postId) {
    dd($postId);
    return $request->user();
});
Route::middleware('api')->get('/post', function(Request $request){
    echo 'test';
    return $request->user();
});
