<?php

namespace App\Http\Controllers;

require_once 'Converter.php';

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AuthController extends Controller
{
    public function auth(Request $request) {
        $data = objectToarray(json_decode(file_get_contents('php://input')));

        $accounts = DB::table('accounts')->where('login', $data['login'])->where('password', md5($data['password']));

        $user = array(
            'login' => $accounts->value('login'),
            'gender' => $accounts->value('gender'),
            'class' => $accounts->value('class'),
            'level' => $accounts->value('level'),
            'exp' => $accounts->value('exp'),
            'balance' => $accounts->value('balance'),
            'attack' => $accounts->value('attack'),
            'weapon' => $accounts->value('weapon'),
            'attack' => $accounts->value('attack'),
            'weapon' => $accounts->value('weapon'),
            'quest1' => $accounts->value('quest1'),
            'quest2' => $accounts->value('quest2'),
            'quest3' => $accounts->value('quest3'),
            'quest4' => $accounts->value('quest4'),
            'quest5' => $accounts->value('quest5'),
            'quest6' => $accounts->value('quest6'),
            'weapon1_buying' => $accounts->value('weapon1_buying'),
            'weapon2_buying' => $accounts->value('weapon2_buying')
        );

        echo count(array_unique($user)) == 1 ? 'false' : 'true';
    }

    public function register(Request $request) {
        $data = objectToarray(json_decode(file_get_contents('php://input')));

        $accounts = DB::table('accounts')->where('login', $data['login']);

        if ($accounts->value('login') == '' || $accounts->value('login') == null) {

            $user = array(
                'login' => $data['login'],
                'password' => md5($data['password']),
                'gender' => $data['gender'],
                'class' => $data['class'],
                'level' => 1,
                'exp' => 0,
                'balance' => 100,
                'attack' => 5,
                'weapon' => 0,
                'quest1' => 0,
                'quest2' => 0,
                'quest3' => 0,
                'quest4' => 0,
                'quest5' => 0,
                'quest6' => 0,
                'weapon1_buying' => 0,
                'weapon2_buying' => 0,
            );

            $resultWrite = DB::table('accounts')->insertGetId($user);

            if ($resultWrite == true || $resultWrite == 1 || $resultWrite == '1' || $resultWrite == 'true')
                $resultWrite == 'true';
        }
        else {
            $resultWrite = 'false';
        }

        echo $resultWrite;
    }
}