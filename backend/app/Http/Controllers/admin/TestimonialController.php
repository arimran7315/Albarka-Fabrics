<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\TempImage;
use App\Models\Testimonial;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;
class TestimonialController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $testimonials = Testimonial::select('id','name')->get();
        return response()->json([
            'status' => true,
            'messages' => 'Fetch all testimonials successfully',
            'data' => $testimonials
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $testimonial = Validator::make($request->all(), [
            'name' => 'required',
            'comment' => 'required'
        ]);
        if ($testimonial->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'Validation Error',
                'error' => $testimonial->errors()->all()
            ]);
        }else{
            $testimonial = Testimonial::create([
                'name' => $request->name,
                'comment' => $request->comment
            ]);
            if ($request->imageId > 0) {
                $tempImage = TempImage::find($request->imageId);
                if ($tempImage != null) {
                    $extArray = explode('.', $tempImage->image);
                    $ext = last($extArray);
    
                    $fileName = strtotime('now') . $testimonial->id . '.' . $ext;
    
                    // Create small thumbnail
                    $sourcePath = public_path('uploads/temp/' . $tempImage->image);
                    $destPath = public_path('uploads/testimonials/small/' . $fileName);
                    $manager = new ImageManager(Driver::class);
                    $image = $manager->read($sourcePath);
                    $image->coverDown(200, 200);
                    $image->save($destPath);
    
    
                    $testimonial->image = $fileName;
                    $testimonial->save();
                    
                }
            }
            return response()->json([
                'status' => true,
                'message' => 'testimonial created successfully',
                'data' => $testimonial
            ]);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $testimonial = Testimonial::find($id);
        if($testimonial){
            return response()->json([
                'status' => true,
                'message' => 'testimonial successfully get',
                'data' => $testimonial
            ]);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $testimonial = Testimonial::find($id);
        if ($testimonial == null) {
            return response()->json([
                'status' => false,
                'message' => 'testimonial not found'
            ]);
        }
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'comment' => 'required',

        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'Validation failed',
                'errors' => $validator->errors()
            ]);
        }
        Testimonial::whereId($id)->update([
           'name' => $request->name,
           'comment' => $request->comment
        ]);
        // Save temp image here
        if ($request->imageId > 0) {
            $oldImage = $testimonial->image;
            $tempImage = tempImage::find($request->imageId);
            if ($tempImage != null) {
                $extArray = explode('.', $tempImage->image);
                $ext = last($extArray);

                $fileName = strtotime('now') . $id . '.' . $ext;

                // Create small thumbnail
                $sourcePath = public_path('uploads/temp/' . $tempImage->image);
                $destPath = public_path('uploads/testimonials/small/' . $fileName);
                $manager = new ImageManager(Driver::class);
                $image = $manager->read($sourcePath);
                $image->coverDown(200, 200);
                $image->save($destPath);

                
                $testimonial->image = $fileName;
                $testimonial->save();
                if($oldImage != ''){
                    File::delete(public_path('uploads/testimonials/small/' . $oldImage));

                }
            }
        }
        return response()->json([
            'status' => true,
            'message' => 'testimonial updated successfully'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $testimonial = Testimonial::find($id);
        if ($testimonial){
            $testimonial->delete();
            return response()->json([
                'status' => true,
                'message' => 'Testimonial deleted successfully',
            ]);
        }
    }
}
