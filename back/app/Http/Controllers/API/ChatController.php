<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Chat;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ChatController extends Controller
{

    
    public function __construct()
    {
        $this->middleware('auth');
    }


    public function chat(Request $request, $id){
        $chat = new Chat([
           'user_sender' => auth()->user()->id,
           'user_receiver' => $id,
           'message_content' => $request->input('message_content'),
       ]);
       $chat->save();
       return response()->json([
        'data' => $chat,
        'status' => 200,
        'message' => 'Message added succesfully', ]);
    
    }

    public function messages($id)
    {
        $user_id =  auth()->user()->id;
        $records = Chat::with('sender', 'receiver')
        ->where([
            ['user_receiver', $id],
            ['user_sender', $user_id]
        ])
        ->orWhere([
            ['user_receiver', $user_id],
            ['user_sender', $id]
        ])->orderBy('created_at', 'asc')
        ->get();

        return response()->json([
            'status' => 200,
            'chat' => $records,
        ]);
    }

    public function receiver($id)
    {
        $receiver = User::where('id','=', $id)->first();
        return response()->json([
            'status' => 200,
            'records' => $receiver,
        ]);
    }

    public function index()
    {
        $users = User::all()->where('type', '=' , '2')->except(Auth::id());
        return response()->json([
            'status' => 200,
            'users' => $users,
        ]);
    }
}
