const server = require("../api/server")
const db = require("../database/dbConfig")
const supertest = require("supertest")



afterAll(async () => {
	// close the database connection so the test process doesn't hang or give a warning
	await db.destroy()
})

describe("login tests", () => {

    it("POST to /api/auth/register", async () => {
        const res = await supertest(server)
            .post("/api/auth/register")
            .send({ username: "piccolo", password: "123abc"})
        expect(res.statusCode).toBe(409)
        expect(res.type).toBe("application/json")
    })

    it("tests /login", async () => {
        const res = await supertest(server)
            .post("/api/auth/login")
            .send({ username: "goku", password: "123abc"})
        expect(res.statusCode).toBe(401)
        expect(res.type).toBe("application/json")
    })
    
    it("GET /api/jokes", async () => {
        const res = await supertest(server).get("/api/jokes")
        expect(res.statusCode).toBe(200)
        expect(res.type).toBe("application/json")
    })
})