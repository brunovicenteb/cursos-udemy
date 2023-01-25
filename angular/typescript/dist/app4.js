"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ConcessionariaDao_1 = require("./ConcessionariaDao");
const Concessionaria_1 = __importDefault(require("./Concessionaria"));
const PessoaDao_1 = require("./PessoaDao");
const Pessoa_1 = __importDefault(require("./Pessoa"));
const Carro_1 = __importDefault(require("./Carro"));
let concessionariaDao = new ConcessionariaDao_1.ConcessionariaDao();
let concessionaria = new Concessionaria_1.default('', []);
concessionariaDao.inserir(concessionaria);
concessionariaDao.atualizar(concessionaria);
let pessoaDao = new PessoaDao_1.PessoaDao();
let pessoa = new Pessoa_1.default('', '', new Carro_1.default('', 0));
pessoaDao.inserir(pessoa);
pessoaDao.atualizar(pessoa);
