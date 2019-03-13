<?php
    namespace App\Traits;

    use Illuminate\Http\Request;
    
    trait Response{

        public function errorResponse( Array $array, $responseCode = 401){
            $array['status'] = false;
            return response()->json($array,$responseCode)->send();
        }
    
        public function throwException($exception){
            $this->errorResponse([ 'error' => $exception->getMessage() ]);
        }
    
        public function successResponse( Array $array,$responseCode = 200){
            $array['status'] = true;
            return response()->json($array,$responseCode)->send();
        }
    }
?>