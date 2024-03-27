<?php

namespace App\Http\Controllers\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    function register(RegisterRequest $request)
    {
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'phone' => $request->phone
        ]);

        event(new Registered($user));

        return response()->json([
            'message' => 'User Created Successfully!',
            // 'token' => $user->createToken('myApp')->plainTextToken
        ]);
    }


    function login(LoginRequest $request)
    {
        $user = User::whereEmail($request->email)->first();
        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json([
                'message' => 'The provided credential are incorrect'
            ], Response::HTTP_UNAUTHORIZED);
        }

        $device = substr($request->userAgent() ?? '', 0, 255);
        $expireAt = null;
        if (!$request->remember)
            $expireAt = now()->addWeek();
        return response()->json([
            'user' => $user,
            'token' => $user->createToken($device, ['*'], $expireAt)->plainTextToken
        ]);
    }
}
