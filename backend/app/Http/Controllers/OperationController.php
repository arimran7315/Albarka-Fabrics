<?php

namespace App\Http\Controllers;

use App\Models\Operation;
use Illuminate\Http\Request;

class OperationController extends Controller
{
    public function index(Request $request)
    {
        $process = Operation::whereCategory($request->category)->get();
        return response()->json([
            'status' => true,
            'message' => 'Get Data successfully',
            'data' => $process
        ]);
    }
}
