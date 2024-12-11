<?php
namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Operation;
use App\Models\TempImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;
use Intervention\Image\Drivers\Gd\Driver;
use Intervention\Image\ImageManager;

class OperationsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $operations = Operation::all();
        return response()->json([
            'status' => true,
            'message' => 'Get Operations Successfully',
            'data' => $operations
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $operation = Validator::make($request->all(),[
            'category' => 'required',
        ]);
        if($operation->fails()){
            return response()->json([
                'status' => false,
                'message' => 'Validation failed',
                'error' =>$operation->errors()->all()
            ]);
        }else{
            $operation = Operation::create([
                'name' => $request->name,
                'category' => $request->category,
                'description' => $request->description
            ]);
            if ($request->imageId > 0) {
                $tempImage = TempImage::find($request->imageId);
                if ($tempImage != null) {
                    $extArray = explode('.', $tempImage->image);
                    $ext = last($extArray);
    
                    $fileName = strtotime('now') . $operation->id . '.' . $ext;
    
                    // Create small thumbnail
                    $sourcePath = public_path('uploads/temp/' . $tempImage->image);
                    $destPath = public_path('uploads/operations/small/' . $fileName);
                    $manager = new ImageManager(Driver::class);

                    $image = $manager->read($sourcePath);
                    $image->coverDown(500, 600);
                    $image->save($destPath);
                    
                    $operation->image = $fileName;
                    $operation->save();
                    
                }
            }
            return response()->json([
                'status' => true,
                'message' => 'operation created successfully',
                'data' => $operation
            ]);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $operation = Operation::whereId($id)->select('id','name','category','description','image')->get();
        return response()->json([
            'status' => true,
            'message' => 'operation found successfully',
            'data' => $operation
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $operation = Operation::find($id);
        if ($operation == null) {
            return response()->json([
                'status' => false,
                'message' => 'product not found'
            ]);
        }
        $validator = Validator::make($request->all(), [
            'category' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'Validation failed',
                'errors' => $validator->errors()
            ]);
        }
        Operation::whereId($id)->update([
           'name' => $request->name,
           'category' => $request->category,
           'description' => $request->description
        ]);
        // Save temp image here
        if ($request->imageId > 0) {
            $oldImage = $operation->image;
            $tempImage = tempImage::find($request->imageId);
            if ($tempImage != null) {
                $extArray = explode('.', $tempImage->image);
                $ext = last($extArray);

                $fileName = strtotime('now') . $id . '.' . $ext;

                // Create small thumbnail
                $sourcePath = public_path('uploads/temp/' . $tempImage->image);
                $destPath = public_path('uploads/operations/small/' . $fileName);
                $manager = new ImageManager(Driver::class);
                $image = $manager->read($sourcePath);
                $image->coverDown(500, 600);
                $image->save($destPath);


                $operation->image = $fileName;
                $operation->save();
                if($oldImage != ''){
                    File::delete(public_path('uploads/operations/small/' . $oldImage));

                }
            }
        }
        return response()->json([
            'status' => true,
            'message' => 'operation updated successfully'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $operation = Operation::find($id);
        if ($operation){
            $operation->delete();
            return response()->json([
                'status' => true,
                'message' => 'operation deleted successfully',
            ]);
        }
    }
}
