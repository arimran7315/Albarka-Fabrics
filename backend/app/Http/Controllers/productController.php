<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class productController extends Controller
{
    public function index(Request $request)
    {
       
                $products = Product::whereCategory($request->category)->where('sub_category',$request->sub_category)->select('id','name', 'image')->get();
                return response()->json([
                    'status' => true,
                    'message' => 'Get products successfully',
                    'data' => $products
                ]);
        
    }
}
