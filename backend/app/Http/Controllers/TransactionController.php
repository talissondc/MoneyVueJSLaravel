<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class TransactionController extends Controller
{
    public function getTransactions()
    {
        $user = Auth::user();

        return Transaction::query()->where('user_id', $user->id)->get();
    }

    public function postTransaction(Request $request)
    {
        $validator = Validator::make($request->json()->all(), [
            'title' => 'required|string',
            'value' => 'required|regex:/^[0-9]{1,100}(,[0-9]{2})*(\.[0-9]+)*$/',
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

        return Transaction::query()->create([
            'title' => $title,
            'value' => $value,
            'type' => $type,
            'category' => $category,
            'user_id' => $user->id
        ]);
    }

    public function deleteTransaction($id)
    {
        $transaction = Transaction::query()->where('id', $id)->first();

        if (is_null($transaction)) {
            return response()->json(['msg' => "Transaction not found"], 400);
        }

        return $transaction->delete();
    }
}
