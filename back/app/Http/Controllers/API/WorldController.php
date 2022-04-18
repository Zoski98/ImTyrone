<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Post;
use App\Models\World;
use Illuminate\Http\Request;

class WorldController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }
    public function index()
    {
        $posts = Post::with('user')->where('section', '=', '1')->get();
        return response()->json(['status' => 200, 'posts' => $posts,]);
    }
    public function post(Request $request)
    {
        $post = new Post;
        $post->user_id = auth()->user()->id;
        $post->post_title = $request->input('post_title');
        $post->post_content = $request->input('post_content');
        if ($request->hasFile('image')) {
            $file = $request->file('image');
            $extension = $file->getClientOriginalExtension();
            $filename = time() . '.' . $extension;
            $file->move(public_path('uploads/images/'), $filename);
            $post->image = 'uploads/images/' . $filename;
        }
        $post->section = 1;
        $post->save();

        return response()->json([
            'data' => $post,
            'username' => $post->user_id,
            'status' => 200,
            'message' => 'Post added succesfully',
        ]);
    }

    public function lastpost()
    {
        $postes = Post::with('user')->where('section', '=', '1')->where('isApproved', "=", '1')->latest()->limit(5)->get();
        return response()->json(['status' => 200, 'postes' => $postes,]);
    }

    public function approvedPosts()
    {
        $posts = Post::with('user')->where('section', '=', '1')->where('isApproved', "=", '1')->get();
        return response()->json(['status' => 200, 'posts' => $posts,]);
    }
}
