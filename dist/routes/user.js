"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _User = require('../controllers/User'); var _User2 = _interopRequireDefault(_User);

var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

// nessa aplicação essas rotas não devem existir // falha de segurança
// router.get('/', userController.index); // Listar todos os usuários
// router.get('/', loginRequired, userController.show); // Mostrar um usuário pelo id

// Rotas que devem existir para essa aplicação
router.post('/', _loginRequired2.default, _User2.default.store); // Criar usuário
router.put('/', _loginRequired2.default, _User2.default.update); // Atualizar dados do usuário
router.delete('/', _loginRequired2.default, _User2.default.delete); // Deletar usuário

exports. default = router;
