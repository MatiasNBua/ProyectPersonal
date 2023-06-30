const express = require('express');
const { users: { createUserLogic } } = require('../../logics/users');

module.exports = async (req, res) => {

    const { name, email, aniversary, password, phone_number, favorites } = req.body;

    // Validar que se proporcionen los datos necesarios
    // if (!name || !email || !aniversary || !password || !phone_number || !favorites) {
    // return res.status(400).json({ error: 'Faltan campos obligatorios' });
    // }

   return await createUserLogic(name, email, aniversary, password, phone_number, favorites)

    res.status(201).json({ message: 'Usuario creado correctamente' });

    console.error('Error al crear el usuario:', error);
    res.status(500).json({ error: 'Ha ocurrido un error al crear el usuario' });
  
};

