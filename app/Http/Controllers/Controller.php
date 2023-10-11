<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function showWelcome() {
        $i = 0;
        $i = $i + 10;
        $i = $i * 100;
        return view('welcome');
    }

    public function showSample(Request $request) {
        return view('sample', [
            'thing' => $request->input('t'),
        ]);
    }

    public function listUsers() {
        $users =  User::all();
        return view('users', ['users' => $users,]);
    }

    public function showUser(int $user) {
        $user = User::find($user);
        return view('users', ['users'=> [$user]]);
    }

    public function showWelcome2(Request $request) {
        return "Yolo";
    }
}
