<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\reservation;
use Illuminate\Http\Request;
use PHPOpenSourceSaver\JWTAuth\Facades\JWTAuth;

class ReservaController extends Controller
{

    /**
     * @OA\Post(
     *     path="/api/storeReservation/{id}",
     *     summary="New reservation for event",
     *  
     *     @OA\Parameter(
     *         name="id",
     *         in="query",
     *         description="Event Id for reservation",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *    
     *   
     *     @OA\Response(response="200", description="reservation created successfully"),
     *     @OA\Response(response="422", description="Validation errors")
     * )
     */

    public function store($id)
    {
        try {
            $user = JWTAuth::user();


            $reservation = Reservation::create([
                "evenement_id" => $id,
                "user_id" => $user->id
            ]);

            return response()->json([
                'status' => 'success',
                'message' => 'Created Successfully',
                'reservation' => $reservation,
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Internal Server Error',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * @OA\Get(
     *     path="/api/dataReservations",
     *     summary="Get Reservations Details",
     *     @OA\Response(response="200", description="Success"),
     *     security={{"bearer_token":{}}}
     * )
     */
    public function index()
    {
        $user =  JWTAuth::user();

        $reservations = Reservation::where('statut', 'waiting')
            ->whereHas('evenement', function ($query) use ($user) {
                $query->where('userId', $user->id);
            })->with('User')
            ->get();
        return response()->json([
            'statut' => 'success',
            'reservations' => $reservations,
            

        ], 200);
    }
    /**
     * @OA\Put(
     *     path="/api/reservations/{id}",
     *     summary="Update reservation status",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="ID of the reservation to update",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\RequestBody(
     *         required=true,
     *         description="Fields to update",
     *         @OA\JsonContent(
     *             @OA\Property(property="Newstatut", type="string", description="New status for the reservation")
     *         )
     *     ),
     *     @OA\Response(response="200", description="Reservation status updated successfully"),
     *     @OA\Response(response="422", description="Validation errors")
     * )
     */

    public function updateStatut($id, Request $request)
    {
        $request->validate([
            'statut' => 'required',
        ]);
        Reservation::where('id', $id)->update([
            'statut' => $request->statut,
        ]);
        return response()->json([
            'statut' => 'success',
            'message' => 'Reservation status updated successfully',
        ], 200);
    }
}
