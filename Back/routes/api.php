<?php

use App\Http\Controllers\v1\AuthController;
use App\Http\Controllers\v1\BrandController;
use App\Http\Controllers\v1\CategoryController;
use App\Http\Controllers\v1\Sub_CategoryController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('register', [AuthController::class, 'register']);
Route::apiResource('categories', CategoryController::class);
Route::apiResource('sub_categories', Sub_CategoryController::class);
Route::apiResource('brands', BrandController::class);
