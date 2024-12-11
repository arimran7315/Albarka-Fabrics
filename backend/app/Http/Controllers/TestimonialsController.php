<?php

namespace App\Http\Controllers;

use App\Models\Testimonial;
use Illuminate\Http\Request;

class TestimonialsController extends Controller
{
    public function index(){
        $testimonial = Testimonial::orderBy('created_at', 'DESC')->get();
        return response()->json([
            'status' => true,
            'message' => 'Get Testimonials successfully',
            'data' => $testimonial
        ]);
    }
}
