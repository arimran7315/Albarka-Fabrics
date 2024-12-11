<?php

namespace App\Http\Controllers\admin;
use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\TempImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;
class ProductsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::select('id','name','category','sub_category')->orderBy('created_at','DESC')->paginate(10);
        return response()->json([
            'status' => true,
            'message' => 'Get all products successfully',
            'data' => $products
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $product = Validator::make($request->all(),[
            'category' => 'required',
            'sub_category' => 'required',
        ]);
        if($product->fails()){
            return response()->json([
                'status' => false,
                'message' => 'Validation failed',
                'error' =>$product->errors()->all()
            ]);
        }else{
            $product = Product::create([
                'name' => $request->name,
                'category' => $request->category,
                'sub_category' => $request->sub_category
            ]);
            if ($request->imageId > 0) {
                $tempImage = TempImage::find($request->imageId);
                if ($tempImage != null) {
                    $extArray = explode('.', $tempImage->image);
                    $ext = last($extArray);
    
                    $fileName = strtotime('now') . $product->id . '.' . $ext;
    
                    // Create small thumbnail
                    $sourcePath = public_path('uploads/temp/' . $tempImage->image);
                    $destPath = public_path('uploads/products/small/' . $fileName);
                    $manager = new ImageManager(Driver::class);
                    $image = $manager->read($sourcePath);
                    $image->coverDown(500, 600);
                    $image->save($destPath);
                    
                    $product->image = $fileName;
                    $product->save();
                    
                }
            }
            return response()->json([
                'status' => true,
                'message' => 'product created successfully',
                'data' => $product
            ]);
        }
    }
    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $product = Product::whereId($id)->select('id','name','category','sub_category','image')->get();
        return response()->json([
            'status' => true,
            'message' => 'product found successfully',
            'data' => $product
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $product = Product::find($id);
        if ($product == null) {
            return response()->json([
                'status' => false,
                'message' => 'product not found'
            ]);
        }
        $validator = Validator::make($request->all(), [
            'category' => 'required',
            'sub_category' => 'required',

        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'Validation failed',
                'errors' => $validator->errors()
            ]);
        }
        Product::whereId($id)->update([
           'name' => $request->name,
           'category' => $request->category,
           'sub_category' => $request->sub_category
        ]);
        // Save temp image here
        if ($request->imageId > 0) {
            $oldImage = $product->image;
            $tempImage = tempImage::find($request->imageId);
            if ($tempImage != null) {
                $extArray = explode('.', $tempImage->image);
                $ext = last($extArray);

                $fileName = strtotime('now') . $id . '.' . $ext;

                // Create small thumbnail
                $sourcePath = public_path('uploads/temp/' . $tempImage->image);
                $destPath = public_path('uploads/products/small/' . $fileName);
                $manager = new ImageManager(Driver::class);
                $image = $manager->read($sourcePath);
                $image->coverDown(500, 600);
                $image->save($destPath);


                $product->image = $fileName;
                $product->save();
                if($oldImage != ''){
                    File::delete(public_path('uploads/products/' . $oldImage));

                }
            }
        }
        return response()->json([
            'status' => true,
            'message' => 'product updated successfully'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $product = Product::find($id);
        if ($product){
            $product->delete();
            return response()->json([
                'status' => true,
                'message' => 'Product deleted successfully',
            ]);
        }
    }
}
