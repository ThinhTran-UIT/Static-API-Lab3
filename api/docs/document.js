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
 * /api/students/:sID:
 *    get:
 *      tags:
 *        - Student
 *      parameters:
 *        - name: ID
 *          description: Student ID
 *          in: formData
 *          required: true
 *          type: number
 *      description: Get students by ID
 *      responses:
 *        200:
 *          description: Success
 *  
 */