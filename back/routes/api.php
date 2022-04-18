<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\Api\CommentController;
use App\Http\Controllers\Api\CommunityController;
use App\Http\Controllers\Api\FeedController;
use App\Http\Controllers\Api\PostController;
use App\Http\Controllers\API\UserController;
use App\Http\Controllers\Api\WorldController;
use App\Http\Controllers\Api\ChatController;
use App\Models\Chat;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



//REGISTER & LOGIN
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);


Route::middleware(['auth:sanctum', 'isAPIAdmin'])->group(function () {

    Route::get('/checkAuthenticated', function () {
        return response()->json(['message' => 'You are in', 'status' => 200], 200);
    });

    // USERS
    Route::get('users', [UserController::class, 'index']);

    // POSTS
    Route::get('world/posts', [WorldController::class, 'index']);
    Route::get('feed/posts', [FeedController::class, 'index']);
    Route::get('community/posts', [CommunityController::class, 'index']);
    Route::put('approve/{id}', [PostController::class, 'approve']);

    // CREATE 
    Route::post('/admin/community/create/post', [CommunityController::class, 'post']);
    Route::post('/admin/feed/create/post', [FeedController::class, 'post']);
    Route::post('/admin/world/create/post', [WorldController::class, 'post']);
    Route::post('/admin/comment/{id}', [CommentController::class, 'create']);
    Route::post('create-user', [UserController::class, 'store']);

    // SHOW
    Route::get('admin/show/post/{id}', [PostController::class, 'showA']);
    Route::get('show-comment/{id}', [CommentController::class, 'show']);

    // DELETE
    Route::delete('admin/delete/post/{id}', [PostController::class, 'destroy']);
    Route::delete('admin/delete/comment/{id}', [CommentController::class, 'destroy']);
    Route::delete('delete-user/{id}', [UserController::class, 'destroy']);

    // EDIT-UPDATE
    Route::get('edit-user/{id}', [UserController::class, 'edit']);
    Route::put('update-user/{id}', [UserController::class, 'update']);

    // LOGOUT
    Route::post('logout', [AuthController::class, 'logout']);
});




Route::middleware(['auth:sanctum', 'isAPIUser'])->group(function () {

    Route::get('/checkIfAuthenticated', function () {
        return response()->json(['message' => 'You are in', 'status' => 200], 200);
    });
    // CREATE
    Route::post('/user/community/create/post', [CommunityController::class, 'post']);
    Route::post('/user/feed/create/post', [FeedController::class, 'post']);
    Route::post('/user/world/create/post', [WorldController::class, 'post']);
    Route::post('/user/comment/{id}', [CommentController::class, 'create']);
    Route::post('/user/chat/{id}', [ChatController::class, 'chat']);

    // POSTS
    Route::get('world/user/posts', [WorldController::class, 'approvedPosts']);
    Route::get('feed/user/posts', [FeedController::class, 'approvedPosts']);
    Route::get('community/user/posts', [CommunityController::class, 'approvedPosts']);

    Route::get('world/last-posts', [WorldController::class, 'lastpost']);
    Route::get('feed/last-posts', [FeedController::class, 'lastpost']);
    Route::get('community/last-posts', [CommunityController::class, 'lastpost']);

    // USER
    Route::get('current/user', [UserController::class, 'currentuser']);
    Route::get('user/stories', [UserController::class, 'stories']);
    Route::get('user/suggested', [UserController::class, 'suggested']);
    Route::get('user/world/posts', [UserController::class, 'wpost']);
    Route::get('user/community/posts', [UserController::class, 'cpost']);
    Route::get('user/feed/posts', [UserController::class, 'fpost']);
    Route::post('user/message/{id}', [ChatController::class, 'chat']);
    Route::get('user/chat', [ChatController::class, 'index']);
    // SHOWF
    Route::get('user/show/post/{id}', [PostController::class, 'showU']);
    Route::get('user/messages/{id}', [ChatController::class, 'messages']);

    // DELETE
    Route::delete('user/delete/post/{id}', [PostController::class, 'destroy']);
    Route::delete('user/delete/comment/{id}', [CommentController::class, 'destroy']);

    // EDIT-UPDATE
    Route::get('user/edit/{id}', [UserController::class, 'edit']);
    Route::put('user/update/{id}', [UserController::class, 'update']);

    // LOGOUT
    Route::post('logout', [AuthController::class, 'logout']);
});















// Route::post('register',[UserController::class, 'store']);
