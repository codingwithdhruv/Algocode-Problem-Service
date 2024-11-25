const {Problem} = require('../models');

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
            const problems = await Problem.find({})
        } catch (error) {
            
        }
    }

}

module.exports = ProblemRepository