/**
 * @swagger
 * /api/students:
 *    get:
 *      tags:
 *        - Student
 *      description: Get all students
 *      responses:
 *        200:
 *          description: Success
 */

/**
 * @swagger
 * /api/students:
 *    post:
 *      tags:
 *        - Student
 *      description: Create student
 *      responses:
 *        200:
 *          description: Success
 */

/**
 * @swagger
 * /api/students/{id}:
 *    get:
 *      tags:
 *        - Student
 *      parameters:
 *        - name: id
 *          description: Student ID
 *          in: path
 *          required: true
 *          type: number
 *      description: Get students by ID
 *      responses:
 *        200:
 *          description: Success
 *  
 */