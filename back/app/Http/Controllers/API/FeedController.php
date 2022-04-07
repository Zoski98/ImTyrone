<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;

class FeedController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }
    public function index()
    {
        $posts = Post::with('user')->where('section', '=', '3')->get();
        return response()->json(['status' => 200, 'posts' => $posts,]);
    }
    public function post(Request $request)
    {
        $post = new Post([
            'user_id' => auth()->user()->id,
            'post_title' => $request->input('post_title'),
            'post_content' => $request->input('post_content'),
            'image' => $request->input('file'),

            'section' => 3,
        ]);
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
        $postes = Post::with('user')->where('section', '=', '3')->latest()->limit(5)->get();
        return response()->json(['status' => 200, 'postes' => $postes,]);
    }
    
    public function approvedPosts()
    {
        $posts = Post::with('user')->where('section', '=', '3' )->where('isApproved', "=", '1')->get();
        return response()->json(['status' => 200, 'posts' => $posts,]);
    }
}
