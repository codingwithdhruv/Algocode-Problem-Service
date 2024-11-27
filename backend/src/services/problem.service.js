const {sanitizeMarkdownContent} = require("../utils/index");

class ProblemService {

    constructor(problemRepository) {
        this.problemRepository = problemRepository;
    }

    async createProblem(problemData) {
            // 1. Sanitize the markdown for description
            problemData.description = sanitizeMarkdownContent(problemData.description);

            console.log("Problem data",problemData);
            const problem = await this.problemRepository.createProblem(problemData);

            console.log("Problem created", problem);
            return problem;
        };
    

    async getAllProblems() {
            const problems = await this.problemRepository.getAllProblems();
            return problems;
        } 

    async getProblem(problemId) {
        const problem = await this.problemRepository.getProblem(problemId);
        return problem
    }
    
    async deleteProblem(problemId) {
        const problem = await this.problemRepository.deleteProblem(problemId);
        return problem;
    }

    async updateProblem(problemId, updateData) {
        const updatedProblem = await this.problemRepository.updateProblem(problemId, updateData);
        return updatedProblem;
    }
    
}

module.exports = ProblemService;