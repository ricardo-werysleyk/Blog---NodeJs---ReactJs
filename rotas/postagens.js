const express = require('express');
const router = express.Router();

router.get('/postagens', (req,res) => {
    res.json({
        titulo: 'Meu primeiro post',
        conteudo: 'Era uma vez uma publicação no meio de um site vazio',
        autor: 'Ricardo Werysleyk'
    });
});

module.exports = router;