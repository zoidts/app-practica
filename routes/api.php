<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\ProviderController;
use App\Http\Controllers\UserAuthController;

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

/* Route::middleware('auth:sanctum')->get('/user', function () {
    return $request->user();
}); */
/* Route::middleware('auth:sanctum')->get('/authenticated', function () {
    return true;
}); */
Route::post('login', [UserAuthController::class, 'login']);
Route::post('logout', [UserAuthController::class, 'logout']);

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('user', [UserAuthController::class, 'user']);
    Route::get('/authenticated', function (){
        return true;
    });
});


Route::group(['middleware' => ['auth:sanctum','role:Administrador']], function () {
    Route::post('store', [AdminController::class, 'store']);
    Route::post('upload', [AdminController::class, 'importar']);
    Route::delete('delete/{provider}', [AdminController::class, 'destroy']);
});

