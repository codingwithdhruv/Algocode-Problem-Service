const {Problem} = require('../models');
const NotFound = require('../error/notfound.error');

class ProblemRepository {

    async createProblem(problemData) {
        try {
            const problem = await Problem.create({
                title: problemData.title,
                description: problemData.description,
                testCases: problemData.testCases || []
                        })
            return problem;
        } catch (error) {
            console.error("Error creating problem in DB:", error);  // Log the error
            throw new Error("Failed to create problem");  // Rethrow the error with a meaningful message
        }
    }

    async getAllProblems() {
        try {
            const problems = await Problem.find({});
            return problems;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getProblem(id) {
        try {
            const problem = await Problem.findById(id);
            if(!problem) {
                throw new NotFound('Problem', id);
            }
            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async deleteProblem(id) {
        try {
            const problem = await Problem.findByIdAndDelete(id);
            if(!problem) {
                throw new NotFound('Problem', id);
            }
            return problem
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    async updateProblem(id, updateData) {
        try {
            const problem = await Problem.findByIdAndUpdate(id, updateData, { new: true });
            if(!problem) {
                throw new NotFound('Problem',id);
            }
            return problem
        } catch (error) {
            console.log(error);
            throw error;
        }
    }


}

module.exports = ProblemRepository