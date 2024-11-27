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

async function deleteProblem(req, res, next) {
    try {
        const problem = await problemService.deleteProblem(req.params.id);
        return res.status(StatusCodes.OK).json({
            success: true,
            error: {},
            message: 'Successfully deleted the problem',
            data: problem
        })
    } catch (error) {
        next(error)
    }
}

async function updateProblem(req, res, next) {
    try {
        const updateData = req.body;
        const problem = await problemService.updateProblem(req.params.id, updateData);
        return res.status(StatusCodes.OK).json({
            success: true,
            error: {},
            message: 'Successfully updated the problem',
            data: problem
        })
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