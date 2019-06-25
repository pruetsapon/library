var express = require('express');
const books = require('../db');

const getBook = (req, res) => {
    res.json(books);
};
const getBookById = (req, res) => {
    res.json(books.find(book => book.id === req.params.id));
};

module.exports = {getBook, getBookById};