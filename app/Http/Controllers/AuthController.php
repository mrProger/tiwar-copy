<?php

namespace App\Http\Controllers;

require_once 'Converter.php';

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AuthController extends Controller
{
    public function auth(Request $request) {
        $req = file_get_contents('php://input');
        $req = json_decode($req);
        $data = objectToarray($req);

        $accounts = DB::table('accounts')->where('login', $data['login'])->where('password', md5($data['password']));

        $user = array(
            'login' => $accounts->value('login'),
            'level' => $accounts->value('level'),
            'balance' => $accounts->value('balance'),
        );

        echo count(array_unique($user)) == 1 ? 'false' : 'true';
    }

    public function register(Request $request) {
        $req = file_get_contents('php://input');
        $req = json_decode($req);
        $data = objectToarray($req);

        $accounts = DB::table('accounts')->where('login', $data['login']);

        $checkUser = array(
            'login' => $accounts->value('login'),
        );

        if ($checkUser['login'] == '') {

            $user = array(
                'login' => $data['login'],
                'password' => md5($data['password']),
                'gender' => $data['gender'],
                'class' => $data['class'],
                'level' => 1,
                'exp' => 0,
                'balance' => 100,
            );

            $result = DB::table('accounts')->insert($user);

            if ($result == true)
                $result == 'true';
        }
        else {
            $result = 'false';
        }

        echo $result == 'true' ? 'Вы успешно зарегистрировались!' : 'Аккаунт с таким именем уже зарегистрирован!';
    }
}