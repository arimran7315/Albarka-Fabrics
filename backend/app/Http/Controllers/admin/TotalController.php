<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Operation;
use App\Models\Product;
use App\Models\Testimonial;
use Illuminate\Http\Request;

class TotalController extends Controller
{
    public function index(){
        $TotalProducts = Product::count();
        $TotalOperations = Operation::count();
        $TotalTestimonials = Testimonial::count(); 
        return response()->json([
            'status' => true,
            'products' => $TotalProducts,
            'operations' => $TotalOperations,
            'testimonials' => $TotalTestimonials
        ]);
    }
}
