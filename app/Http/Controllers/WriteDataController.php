<?php

namespace App\Http\Controllers;

require_once 'Converter.php';

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class WriteDataController extends Controller
{
    public function writeAllPlayerData(Request $request) {
        $data = objectToarray(json_decode(file_get_contents('php://input')));

        $accounts = DB::table('accounts')->where('login', $data['login']);

        $user = array();

        if ($data['level'] != $accounts->value('level'))
            $user['level'] = $data['level'];
        
        if ($data['exp'] != $accounts->value('exp'))
            $user['exp'] = $data['exp'];

        if ($data['balance'] != $accounts->value('balance'))
            $user['balance'] = $data['balance'];

        if ($data['attack'] != $accounts->value('attack'))
            $user['attack'] = $data['attack'];

        if ($data['weapon'] != $accounts->value('weapon'))
            $user['weapon'] = $data['weapon'];

        if ($data['quest1'] != $accounts->value('quest1'))
            $user['quest1'] = $data['quest1'];

        if ($data['quest2'] != $accounts->value('quest2'))
            $user['quest2'] = $data['quest2'];

        if ($data['quest3'] != $accounts->value('quest3'))
            $user['quest3'] = $data['quest3'];

        if ($data['quest4'] != $accounts->value('quest4'))
            $user['quest4'] = $data['quest4'];

        if ($data['quest5'] != $accounts->value('quest5'))
            $user['quest5'] = $data['quest5'];

        if ($data['quest6'] != $accounts->value('quest6'))
            $user['quest6'] = $data['quest6'];

        if ($data['weapon1_buying'] != $accounts->value('weapon1_buying'))
            $user['weapon1_buying'] = $data['weapon1_buying'];

        if ($data['weapon2_buying'] != $accounts->value('weapon2_buying'))
            $user['weapon2_buying'] = $data['weapon2_buying'];

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
