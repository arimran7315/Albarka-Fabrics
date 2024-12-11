<?php

namespace App\Http\Controllers\admin;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AccountController extends Controller
{
    public function login(Request $request){
        $user = Validator::make($request->all(),[
            'email' => 'required',
            'password' => 'required'
        ]);
        if($user->fails()){
            return response()->json([
                'status' => false,
                'message' => 'Validation Error',
                'error' => $user->errors()->all()
            ]);
        }
        if(Auth::attempt(['email'=>$request->email, 'password'=>$request->password])){
            $authuser = Auth::user();
            return response()->json([
                'status' => true,
                'message' => 'login successfully',
                'token' => $authuser->createToken("token")->plainTextToken,
                'token_type' => 'bearer'
            ]);
        }else{
            return response()->json([
                'status' => false,
                'message' => 'Invalid Credentials',
            ]);
        }
    }
    public function logout(){
        $user = User::find(Auth::id());
        $user->tokens()->delete();

        return response()->json([
            'status' => true,
            'message' => 'logout successfully'
        ]);
    }
}
