<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\TransactionController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('auth')->group(function () {
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/logout', [AuthController::class, 'logout'])->middleware('api');
});

Route::prefix('transaction')->middleware('jwt.auth')->group(function () {
    Route::get('/', [TransactionController::class, 'getTransactions']);
    Route::post('/', [TransactionController::class, 'postTransaction']);
});
