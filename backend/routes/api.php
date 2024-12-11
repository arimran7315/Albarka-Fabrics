<?php

use App\Http\Controllers\admin\AccountController;
use App\Http\Controllers\admin\OperationsController;
use App\Http\Controllers\admin\ProductsController;
use App\Http\Controllers\admin\TempImage;
use App\Http\Controllers\admin\TestimonialController;
use App\Http\Controllers\admin\TotalController;
use App\Http\Controllers\OperationController;
use App\Http\Controllers\productController;
use App\Http\Controllers\TestimonialsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

Route::post('login',[AccountController::class, 'login']);

Route::get('logout',[AccountController::class, 'logout'])->middleware('auth:sanctum');

Route::post('temp-image',[TempImage::class,'store'])->middleware('auth:sanctum');

Route::get('testimonials', [TestimonialController::class,'index'])->middleware('auth:sanctum');

Route::post('testimonials', [TestimonialController::class, 'store'])->middleware('auth:sanctum');

Route::get('testimonials/{id}',[TestimonialController::class, 'edit'])->middleware('auth:sanctum');

Route::put('testimonials/{id}', [TestimonialController::class, 'update'])->middleware('auth:sanctum');

Route::delete('testimonials/{id}',[TestimonialController::class, 'destroy'])->middleware('auth:sanctum');


Route::get('products', [ProductsController::class, 'index'])->middleware('auth:sanctum');

Route::post('products', [ProductsController::class,'store'])->middleware('auth:sanctum');

Route::get('products/{id}', [ProductsController::class, 'edit'])->middleware('auth:sanctum');

Route::put('products/{id}',[ProductsController::class, 'update'])->middleware('auth:sanctum');

Route::delete('products/{id}',[ProductsController::class, 'destroy'])->middleware('auth:sanctum');



Route::get('operations', [OperationsController::class, 'index'])->middleware('auth:sanctum');

Route::post('operations', [OperationsController::class,'store'])->middleware('auth:sanctum');

Route::get('operations/{id}', [OperationsController::class, 'edit'])->middleware('auth:sanctum');

Route::put('operations/{id}',[OperationsController::class, 'update'])->middleware('auth:sanctum');

Route::delete('operations/{id}',[OperationsController::class, 'destroy'])->middleware('auth:sanctum');

Route::get('total', [TotalController::class,'index'])->middleware('auth:sanctum');

Route::get('product/{category}/{sub_category}', [productController::class,'index']);

Route::get('operation/{category}', [OperationController::class,'index']);

Route::get('testimonial', [TestimonialsController::class,'index']);
