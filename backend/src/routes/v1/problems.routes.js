const express = require('express');

const { ProblemController } = require('../../controllers')

const problemRouter = express.Router();

problemRouter.get('/ping', ProblemController.pingProblemController)
problemRouter.get('/:id', ProblemController.getProblem);
problemRouter.get('/', ProblemController.getProblems);
problemRouter.post('/', ProblemController.addProblem);
problemRouter.put('/:id', ProblemController.updateProblem)
problemRouter.delete('/:id', ProblemController.deleteProblem);
https://suiexplorer.com/address/0x9d0c3617178ccf299455ae885e0cc7d6237b34fdca8b17da387790a25e800341?deviceId=f42eb6c6-7d92-475a-a285-8e239ffa87f0&network=mainnet
module.exports = problemRouter;