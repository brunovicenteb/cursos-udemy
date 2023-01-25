"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Concessionaria_1 = __importDefault(require("./Concessionaria"));
const Pessoa_1 = __importDefault(require("./Pessoa"));
const Carro_1 = __importDefault(require("./Carro"));
const Dao_1 = require("./Dao");
//let concessionariaDao: ConcessionariaDao = new ConcessionariaDao();
let concessionariaDao = new Dao_1.Dao();
let concessionaria = new Concessionaria_1.default('', []);
concessionariaDao.inserir(concessionaria);
concessionariaDao.atualizar(concessionaria);
//let pessoaDao: PessoaDao = new PessoaDao();
let pessoaDao = new Dao_1.Dao();
let pessoa = new Pessoa_1.default('', '', new Carro_1.default('', 0));
pessoaDao.inserir(pessoa);
pessoaDao.atualizar(pessoa);
