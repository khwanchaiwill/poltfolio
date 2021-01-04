import reactI from "../image/react-icon.png";
import japan from "../image/Japan_flag.jfif";
import thai from '../image/thai-flag.png';
import usa from '../image/american-flag.png';
import sqlLogo from '../image/68255878-sql-icon.jpg';
import postql from '../image/postgresql.png';
import postman from '../image/postman.png';
import red from '../image/Redux.png';
import inode from '../image/node-icon.png';
import js from '../image/JS-icon.png';
import bootS from '../image/download.png';
import mat from '../image/material-ui.png';
import py from '../image/267_Python-512.png';
import html from '../image/html.png';
import e2e from '../image/e2e.png';
import jest from '../image/jest.png';
import express from '../image/node-express.png';
import data from '../image/database-icon.jpg';



export const skillSet = [
    { id: 1, frontEnd: "React.Js", backend:"Node.Js", src: reactI, pics: inode},
    { id: 2, frontEnd: "Bootstrap", backend: "Express",src: bootS, pics: express},
    { id: 3, frontEnd: "Material-Ui", backend: "SQL", src: mat, pics: sqlLogo},
    { id: 4, frontEnd: "JavaScript", backend: "PostgreSQL", src: js, pics: postql},
    { id: 5, frontEnd: "Redux", backend: "Postman", src: red, pics: postman},
    { id: 6, frontEnd: "HTML/CSS/LESS", backend: "Database Designer", src: html, pics: data},
    { id: 7, frontEnd: "Style Component", backend: "Jest", src: " ", pics: jest},
    { id: 8, frontEnd: "Python", backend: "E2E", src: py, pics: e2e}
]
export const languageSkill = [
    { id: 1, language: "Thai", level: "Native bilingual", src: thai},
    { id: 2, language: "Japanese", level:"Intermediate", src: japan},
    { id: 3, language: "English", level: "Intermediate", src: usa},
   
]
export const otherSkill = [
    { id: 1, other: "Machine Operator"},
    { id: 2, other: "Profestional Cook"},
    { id: 3, other: "Interpreter"},
    { id: 4, other: "Microsoft Office"},  
]
export const humanRight = [
    { 
        id: 1, 
        name: "Human Rights First", 
        date: "Oct 2020 - Nov 2020", 
        description: [
            {name:"Built Sign-up login form"}, 
            {name: "Created new component to make a seperate page and seperated route for the proect"}], 
        url: "https://c.humanrightsfirst.dev/"
    }
]
export const airBnb = [
    { 
        id: 1, 
        name: "Air-bnb-predicted price", 
        date: "July 2020", 
        description: [
            { id: 1, name:"Connected the DS api to Backend api endpoint sent data to Front-end"}, 
            {id: 2, name: "wrote Api endpoint for user client side"},
            {id: 3, name: "Wrote Read me file form schema for endpoint"},
            {id: 4, name: "Writting end to end test for api endpoint"},
            {id: 5, name: "• Deployed the api to heroku"}
        ], 
        url: "https://relaxed-fermat-a20695.netlify.app/index.html"
    }
]
export const expath = [
    { 
        id: 1, 
        name: "Expath Journal", 
        date: "June 2020", 
        description: [
            { id: 1, name:"Front-end development"}, 
            {id: 2, name: "Use Redux to connect the frontend with backend api"},
            {id: 3, name: "Style the frontend"},
        ], 
        url: "https://front-end-omega-red.vercel.app/",

    }
]