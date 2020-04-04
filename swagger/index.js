/**
 * @swagger
 *  components:
 *    schemas:
 *      Client:
 *        type: object
 *        required:
 *          - name
 *          - lastName
 *          - age
 *          - birthDate
 *        properties:
 *          name:
 *            type: string
 *          lastName:
 *            type: string
 *          age:
 *            type: string
 *          birthDate:
 *            type: string
 *            format: date
 *        example:
 *           name: Cesar
 *           lastName: Casasola
 *           age: 31
 *           birthDate: 23/01/1989
 */

/**
 * @swagger
 *  components:
 *    schemas:
 *      ArrayOfClients:
 *        type: array
 *        items:
 *          type: object
 *          properties:
 *            name:
 *              type: string
 *            lastName:
 *              type: string
 *            age:
 *              type: string
 *            birthDate:
 *              type: string
 *              format: date
 *        examples:
 *          - name: Leonel
 *            lastName: Messi
 *            age: 32
 *            birthDate: 24/07/1987
 *          - name: Cristiano
 *            lastName: Ronaldo
 *            age: 35
 *            birthDate: 05/02/1985
 */

/**
 * @swagger
 * path:
 *  /listclientes:
 *    get:
 *      summary: Get list of clients
 *      tags: [Client]
 *      responses:
 *        "200":
 *          description: An users object
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/ArrayOfClients'
 */

/**
 * @swagger
 * path:
 *  /kpideclientes:
 *    get:
 *      summary: Get clients KPI
 *      tags: [Client]
 *      responses:
 *        "200":
 *          description: Return client's age average and standard deviation
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  average:
 *                    type: integer
 *                  standardDeviation:
 *                    type: integer
 */

/**
 * @swagger
 * path:
 *  /creacliente:
 *    post:
 *      summary: Save client
 *      tags: [Client]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Client'
 *      responses:
 *        "200":
 *          description: A client object
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Client'
 */
