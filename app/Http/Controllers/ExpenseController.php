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

    /**
     * Get expenses
     * @param search params
     * @return expense object
     */
    public function get(Request $request){
        try{
           $expenses = Auth::user()->expense();

            if($request->has('expense')){
                $expenses = $expenses->where('expense','like','%'.$request->expense.'%');
            }

            if($request->has('comments')){
                $expenses = $expenses->where('comments','like','%'.$request->comments.'%');
            }

            if($request->has('date')){
                $date = date('Y-m-d',strtotime($request->date));
                $expenses = $expenses->whereDate('created_at',$date);
            }
            
            $expenses = $expenses->orderBy('created_at','DESC')->paginate(5);
            return response()->json([
                'status' => true,
                'expenses' => $expenses,
                'links' => (string)$expenses->links()
            ]);

        }catch(Exception $e){
            return response()->json([
                'status' => false,
                'error' => $e->getMessage()
            ]);
        }
    }

    /**
     * Get expense names
     * @param void
     * @return expense-names array
     */
    public function getExpenseNames(){
        try{
            
            $expenses = Auth::user()->expense;
            $result = [];
            foreach($expenses as $ex)
                $result[] = $ex->expense;

            return response()->json(['status' => true, 'expenses' => array_values(array_unique($result))]);

        }catch(Exception $e){
            return response()->json(['status' => false,'expenses' => []]);
        }
    }
}
