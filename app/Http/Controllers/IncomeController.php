<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Exception;
use Auth;
use App\Models\Income;
use App\User;
use App\Traits\Response;

class IncomeController extends Controller
{
    
    use Response;
    
    /**
     * save the income
     * @param income object
     * @return saved-income object
     */
    public function save(Request $request){
        try{
            sleep(2);
            $income = new Income;
            $income->title = $request->title;
            $income->amount = $request->amount;
            $income->comments = $request->comments;
            Auth::user()->income()->save($income);
            $this->successResponse(['msg' => 'Your income has been saved']);
        }catch(Exception $e){
           $this->throwException($e);
        }
    }

    /**
     * Get all incomes
     * @param null
     * @return income object array
     */
    public function allIncomes(){
        try{
            $incomes = Auth::user()->income()->orderBy('created_at','desc')->paginate(20);
            $this->successResponse([
                'incomes' => $incomes,
                'links' => (string) $incomes->links()
            ]);
        }catch(Exception $e){
            $this->throwException($e);
        }
    }
}
