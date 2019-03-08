<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Exception;
use Auth;
use App\Models\Expense;

class ExpenseController extends Controller
{
    /**
     * Save the expense
     * @param expense object
     * @return status & saved expense
     */
    public function save(Request $request){
        try{

            $expense = new Expense;
            $expense->expense = $request->expense;
            $expense->amount = $request->amount;
            $expense->comments = $request->comments;
            Auth::user()->expense()->save($expense);
            return response()->json([
                'status' => true,
                'expense' => $expense
            ]);

        }catch(Exception $e){
            return response()->json([
                'status' => false,
                'error' => $e->getMessage()
            ],200);
        }
    }
}
