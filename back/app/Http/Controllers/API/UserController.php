<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;
use App\Models\User;
use Dotenv\Validator;
use Illuminate\Contracts\Validation\Validator as ValidationValidator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator as FacadesValidator;

class UserController extends Controller
{
   
    // public function __construct()
    // {
    //     $this->middleware('auth');
    //     $this->middleware('solouser',['only'=> ['index']]);
    // }

    public function __construct()
    {
        $this->middleware('auth');
    }


    public function index()
    {
        $users = User::all();
        return response()->json([
            'status' => 200,
            'users' => $users,
        ]);
    }

    public function stories()
    {
        $users = User::all()->random(10);
        return response()->json([
            'status' => 200,
            'users' => $users,
        ]);
    }
    public function storiesR()
    {
        $users = User::all()->random(6)->where('user_type','=','2');
        return response()->json([
            'status' => 200,
            'users' => $users,
        ]);
    }

    public function suggested()
    {
        $users = User::all()->random(5);
        return response()->json([
            'status' => 200,
            'users' => $users,
        ]);
    }


    public function currentuser()
    {
        $user = auth()->user();
        return response()->json([
            'status' => 200,
            'user' => $user,
        ]);
    }

    public function edit($id)
    {
        $users = User::find($id);
        return response()->json([
            'status' => 200,
            'users' => $users,
        ]);
    }

    public function destroy($id)
    {
        $users = User::find($id);
        $users->delete();
        return response()->json([
            'status' => 200,
            'message' => 'User Deleted Succesfully',
        ]);
    }


    public function update(Request $request, $id)
    {

        $user = User::find($id);
        $user->username = $request->input('username');
        $user->email = $request->input('email');
        $user->type = $request->input('type');
        if($request->hasFile('file'))
        {
            $file = $request->file('image');
            $extension = $file->getClientOriginalExtension();
            $filename = time() .'.'.$extension;
            $file->move(public_path('uploads/images/'), $filename);
            $user->file = 'uploads/images/'.$filename;
        }
    
        $user->update();

        return response()->json([
            'status' => 200,
            'message' => 'User updated succesfully',
        ]);
    }


    public function store(Request $request)
    {
        $validator=FacadesValidator::make($request->all(), [
            'username' => 'required|max:255',
            'email' => 'required|email|max:255',
            'password' => 'required|min:8',
        ]);

        if($validator->fails()){
            return response()->json([
                'error' => $validator->getMessageBag()
            ],202);
            
        }
        else {
            $user = new User;
            $user->username = $request->input('username');
            $user->email = $request->input('email');
            $user->password = $request->input('password');
            if($request->hasFile('file'))
            {
                $file = $request->file('image');
                $extension = $file->getClientOriginalExtension();
                $filename = time() .'.'.$extension;
                $file->move(public_path('uploads/images/'), $filename);
                $user->file = 'uploads/images/'.$filename;
            }
            $user->save();

            return response()->json([
                'status' => 200,
                'message' => 'User added succesfully',
            ]);
        }
    }

    public function wpost()
    {
        $currentUser = Auth::user();
        $posts = Post::where('user_id', '=', $currentUser->id)->where('section', '=', '1')->get();
        return response()->json([
            'status' => 200,
            'posts' => $posts
        ]);
    }

    public function cpost()
    {
        $currentUser = Auth::user();
        $posts = Post::where('user_id', '=', $currentUser->id)->where('section', '=', '2')->get();
        return response()->json([
            'status' => 200,
            'posts' => $posts
        ]);
    }

    public function fpost()
    {
        $currentUser = Auth::user();
        $posts = Post::where('user_id', '=', $currentUser->id)->where('section', '=', '3')->get();
        return response()->json([
            'status' => 200,
            'posts' => $posts
        ]);
    }
}
