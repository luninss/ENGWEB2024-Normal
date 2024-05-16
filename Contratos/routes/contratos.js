var express = require('express');
var router = express.Router();
var contrato = require('../controllers/contrato')
var fs = require('fs')


router.get('/', function(req, res) {
    contrato.list()
          .then(data => res.jsonp(data))
          .catch(erro => res.jsonp(erro))
});

router.get('/:id', function(req, res) {
    contrato.findById(req.params.id)
          .then(data => res.jsonp(data))
          .catch(erro => res.jsonp(erro))
  }
);

router.get('/?entidade=:entidade', function(req, res) {
    contrato.findByEntidade(req.query.entidade)
        .then(data => res.jsonp(data))
        .catch(erro => res.jsonp(erro))
  }
);

router.get('/?tipo=:tipo', function(req, res) {
    contrato.findByTipo(req.query.tipo)
        .then(data => res.jsonp(data))
        .catch(erro => res.jsonp(erro))
  }
);

router.get('/entidades', function(req, res) {
    contrato.listEntidades()
        .then(data => res.jsonp(data))
        .catch(erro => res.jsonp(erro))
  }
);  

router.get("/tipos", function(req, res) {
    contrato.listTipos()
        .then(data => res.jsonp(data))
        .catch(erro => res.jsonp(erro))
  }
);

router.post('/', function(req, res) {
    contrato.insert(req.body)
        .then(data => res.jsonp(data))
        .catch(erro => res.jsonp(erro))
  }
);

router.delete('/:id', function(req, res) {
    contrato.removeById(req.params.id)
        .then(data => res.jsonp(data))
        .catch(erro => res.jsonp(erro))
  }
);

router.put('/:id', function(req, res) {
    contrato.update(req.params.id, req.body)
        .then(data => res.jsonp(data))
        .catch(erro => res.jsonp(erro))
    }
);


module.exports = router;
