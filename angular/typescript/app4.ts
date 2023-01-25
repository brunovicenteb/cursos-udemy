import Concessionaria from './Concessionaria'
import Pessoa from './Pessoa';
import Carro from './Carro';
import { Dao } from './Dao';

//let concessionariaDao: ConcessionariaDao = new ConcessionariaDao();
let concessionariaDao: Dao<Concessionaria> = new Dao<Concessionaria>();
let concessionaria = new Concessionaria('', [])
concessionariaDao.inserir(concessionaria);
concessionariaDao.atualizar(concessionaria);

//let pessoaDao: PessoaDao = new PessoaDao();
let pessoaDao: Dao<Pessoa> = new Dao<Pessoa>();
let pessoa = new Pessoa('', '', new Carro('', 0))
pessoaDao.inserir(pessoa);
pessoaDao.atualizar(pessoa);