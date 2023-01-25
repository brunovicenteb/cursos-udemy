import { ConcessionariaDao } from './ConcessionariaDao'
import Concessionaria from './Concessionaria'
import { PessoaDao } from './PessoaDao';
import Pessoa from './Pessoa';
import Carro from './Carro';

let concessionariaDao: ConcessionariaDao = new ConcessionariaDao();
let concessionaria = new Concessionaria('', [])
concessionariaDao.inserir(concessionaria);
concessionariaDao.atualizar(concessionaria);

let pessoaDao: PessoaDao = new PessoaDao();
let pessoa = new Pessoa('', '', new Carro('', 0))
pessoaDao.inserir(pessoa);
pessoaDao.atualizar(pessoa);