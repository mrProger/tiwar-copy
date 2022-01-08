<?php

namespace App\Http\Controllers;

require_once 'Converter.php';

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class GetDataController extends Controller
{
    public function getAllPlayerData(Request $request) {
        $data = objectToarray(json_decode(file_get_contents('php://input')));

        $accounts = DB::table('accounts')->where('login', $data['login']);

        $user = array(
            'login' => $accounts->value('login'),
            'gender' => $accounts->value('gender'),
            'class' => $accounts->value('class'),
            'level' => $accounts->value('level'),
            'exp' => $accounts->value('exp'),
            'balance' => $accounts->value('balance'),
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

        echo count(array_unique($user)) == 1 ? 'false' : json_encode($user);
    }

    public function getPlayerLogin(Request $request) {
        $data = objectToarray(json_decode(file_get_contents('php://input')));

        $accounts = DB::table('accounts')->where('login', $data['login']);

        echo $accounts->value('login') == '' ? 'false' : 'true';
    }

    public function getPlayerGender(Request $request) {
        $data = objectToarray(json_decode(file_get_contents('php://input')));

        $accounts = DB::table('accounts')->where('login', $data['login']);

        echo $accounts->value('gender') == '' ? 'false' : 'true';
    }

    public function getPlayerLevel(Request $request) {
        $data = objectToarray(json_decode(file_get_contents('php://input')));

        $accounts = DB::table('accounts')->where('login', $data['login']);

        echo $accounts->value('level') == '' ? 'false' : 'true';
    }

    public function getPlayerBalance(Request $request) {
        $data = objectToarray(json_decode(file_get_contents('php://input')));

        $accounts = DB::table('accounts')->where('login', $data['login']);

        echo $accounts->value('balance') == '' ? 'false' : 'true';
    }

    public function getPlayerExp(Request $request) {
        $data = objectToarray(json_decode(file_get_contents('php://input')));

        $accounts = DB::table('accounts')->where('login', $data['login']);

        echo $accounts->value('exp') == '' ? 'false' : 'true';
    }
}