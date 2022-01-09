<?php

namespace App\Http\Controllers;

require_once 'Converter.php';

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class WriteDataController extends Controller
{
    public function writeAllPlayerData(Request $request) {
        $data = objectToarray(json_decode(file_get_contents('php://input')));

        $keys = array('level', 'exp', 'balance', 'attack', 'weapon', 'quest1', 'quest2', 'quest3', 'quest4', 'quest5', 'quest6', 'weapon1_buying', 'weapon2_buying');
        
        $accounts = DB::table('accounts')->where('login', $data['login']);

        $user = array();
        
        for ($i = 0; $i < count($keys); $i++)
            if ($data[$keys[$i]] != $accounts->value($keys[$i]))
                $user[$keys[$i]] = $data[$keys[$i]];

        if (count($user) > 0) {
            $writeDataStatus = DB::table('accounts')->where('login', $data['login'])->update($user);
            
            echo $writeDataStatus == true ? 'true' : 'false';
        }
        else 
            echo 'true';
    }

    public function writePlayerLevel(Request $request) {
        $data = objectToarray(json_decode(file_get_contents('php://input')));

        $writeDataStatus = DB::table('accounts')->where('login', $data['login'])->update(array('level' => $data['level']));

        echo $writeDataStatus == true ? 'true' : 'false';
    }

    public function writePlayerBalance(Request $request) {
        $data = objectToarray(json_decode(file_get_contents('php://input')));

        $writeDataStatus = DB::table('accounts')->where('login', $data['login'])->update(array('balance' => $data['balance']));

        echo $writeDataStatus == true ? 'true' : 'false';
    }

    public function writePlayerExp(Request $request) {
        $data = objectToarray(json_decode(file_get_contents('php://input')));

        $writeDataStatus = DB::table('accounts')->where('login', $data['login'])->update(array('exp' => $data['exp']));

        echo $writeDataStatus == true ? 'true' : 'false';
    }
}
