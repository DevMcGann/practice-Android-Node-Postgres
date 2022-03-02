package com.gsoft.pokeapp.data.models

data class Producto(
    val id : String,
    val nombre : String,
    val precio : String,
    val desc : String,
    val imagen : String?,
    val id_propietario : String
)
