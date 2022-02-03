<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class TransactionController extends Controller
{
    private $transactionModel;

    public function __construct()
    {
        $this->transactionModel = new Transaction();
    }
    public function getTransactions()
    {
        $user = Auth::user();

        return $this->transactionModel->where('user_id', $user->id)->get();
    }

    public function postTransaction(Request $request)
    {
        $validator = Validator::make($request->json()->all(), [
            'title' => 'required|string',
            'value' => 'required|string',
            'type' => 'required|string',
            'category' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json([$validator->errors()], 400);
        };

        $user = Auth::user();
        $title = $request->title;
        $value = $request->value;
        $type = $request->type;
        $category = $request->category;

        return $this->transactionModel->create([
            'title' => $title,
            'value' => $value,
            'type' => $type,
            'category' => $category,
            'user_id' => $user->id
        ]);
    }
}
