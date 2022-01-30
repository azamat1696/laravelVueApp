<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rules\Password;

class AuthController extends Controller
{
    public function register(Request $request){
        $data = $request->validate([
            'name' => 'required|string',
            'email' => 'required|string|email|unique:users,email',
            'password'=>[
                'required',
                'confirmed',
                Password::min(8)->mixedCase()->numbers()->symbols()
            ]
        ]);

        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ]);

        $token = $user->createToken('main')->plainTextToken ;

        return response()->json([
           'user'=>$user,
            'token'=>$token,
        ]);
    }
    public function login(Request $request){
        $data = $request->validate([
            'email' => 'required|string|email|exists :users,email',
            'password'=>[
                'required',
            ],
            'remember'=>'boolean'
        ]);
        $remember = $data['remember'] ?? false;
        unset( $data['remember']);

        if(!Auth::attempt($data,$remember))
        {
            return response()->json([
               'error' => 'The provided credential is not correct',
            ],422);
        }
        $user = Auth::User();
        $token = $user->createToken('main')->plainTextToken;
        return response()->json([
           'user' => $user,
           'token' => $token
        ]);
    }
    public function logout(){
        $user = Auth::user();
        $user->currentAccessToken()->delete();
        return response()->json([
            'success' => true
        ]);
    }
}
