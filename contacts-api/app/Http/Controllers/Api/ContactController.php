<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Contact;

class ContactController extends Controller
{
    /**
     *GET ALL + filtre actif/inactif
     */
    public function index(Request $request)
    {
        $query = Contact::query();

        // Filtre par statut (actif/inactif)
        if ($request->has('statut')) {
            $query->where('statut', $request->statut);
        }

        // Tri par plus récent
        $contacts = $query->latest()->get();

        return response()->json($contacts);
    }

    /**
     * CREATE
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nom' => 'required|string|max:255',
            'prenom' => 'required|string|max:255',
            'cin' => 'required|string|unique:contacts,cin',
            'email' => 'required|email|unique:contacts,email',
            'telephone' => 'required|string|max:20',
            'date_naissance' => 'nullable|date',
            'notes' => 'nullable|string',
            'statut' => 'boolean'
        ]);

        $contact = Contact::create($validated);

        return response()->json([
            'message' => 'Contact ajouté avec succès',
            'data' => $contact
        ], 201);
    }

    /**
     * SHOW (Afficher un contact)
     */
    public function show(string $id)
    {
         $contact = Contact::find($id);

        if (!$contact) {
            return response()->json([
                'message' => 'Contact non trouvé'
            ], 404);
        }

        return response()->json($contact);
    }

    /**
     * Update 
     */
    public function update(Request $request, string $id)
    {
        $contact = Contact::find($id);

        if (!$contact) {
            return response()->json([
                'message' => 'Contact non trouvé'
            ], 404);
        }

        $validated = $request->validate([
            'nom' => 'required|string|max:255',
            'prenom' => 'required|string|max:255',
            'cin' => 'required|string|unique:contacts,cin,' . $id,
            'email' => 'required|email|unique:contacts,email,' . $id,
            'telephone' => 'required|string|max:20',
            'date_naissance' => 'nullable|date',
            'notes' => 'nullable|string',
            'statut' => 'boolean'
        ]);

        $contact->update($validated);

        return response()->json([
            'message' => 'Contact mis à jour avec succès',
            'data' => $contact
        ]);

    }

    /**
     * DELETE (Supprimer un contact)
     */
    public function destroy(string $id)
    {
         $contact = Contact::find($id);

        if (!$contact) {
            return response()->json([
                'message' => 'Contact non trouvé'
            ], 404);
        }

        $contact->delete();

        return response()->json([
            'message' => 'Contact supprimé avec succès'
        ]);
    }
}
