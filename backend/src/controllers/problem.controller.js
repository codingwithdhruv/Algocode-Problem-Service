const NotImplemented = require("../error/notImplemented.error");
const { StatusCodes } = require('http-status-codes')
const { ProblemService } = require('../services');
const { ProblemRepository } = require('../repository');

const problemService = new ProblemService(new ProblemRepository());

function pingProblemController (req, res) {
    return res.json({message: "Ping Problem Controller"})
}

async function addProblem(req, res, next) {
    try {
            console.log("incoming request body");
            const newProblem = await problemService.createProblem(req.body);
            return res.status(StatusCodes.CREATED).json({
                success: true,
                message: 'Successfully created a new problem',
                error: null,
                data: newProblem
            })
    } catch (error) {
        next(error)
    }
}

async function getProblem(req, res, next) {
    try {
        const problem = await problemService.getProblem(req.params.id);
        return res.status(StatusCodes.OK).json({
            success: true,
            error: {},
            message: 'Successfully fetched a problem',
            data: problem
        })
    } catch (error) {
        next(error)
    }
}

async function getProblems(req, res, next) {
    try {
        const response = await problemService.getAllProblems();
        return res.status(StatusCodes.OK).json ({
            success: true,
            message: 'Successfully fetched all problems',
            error: null,
            data: response
        })
    } catch (error) {
        next(error)
    }
}

function deleteProblem(req, res, next) {
    try {
        throw new NotImplemented('delete problems');
    } catch (error) {
        next(error)
    }
}

function updateProblem(req, res) {
    try {
        throw new NotImplemented('update problems');
    } catch (error) {
        next(error)
    }
}

module.exports = {
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
    pingProblemController
}