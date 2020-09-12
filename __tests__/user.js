// const server = require("../api/server")
// const db = require("../database/dbConfig")
// const supertest = require("supertest")

// beforeEach(async () => {
// 	// run the seeds programatically before each test to start fresh
// 	await db.seed.run()
// })

// afterAll(async () => {
// 	// close the database connection so the test process doesn't hang or give a warning
// 	await db.destroy()
// })

// describe("character tests", () => {

//     it("GET /", async () => {
//         const res = await supertest(server).get("/")
//         expect(res.statusCode).toBe(200)
//         expect(res.type).toBe("application/json")
//     })

//     it("POST to /register", async () => {
//         const res = await supertest(server)
//             .post("/register")
//             .send({ name: "piccolo", password: "123abc"})
//         expect(res.statusCode).toBe(201)
//         expect(res.type).toBe("application/json")
//         expect(res.body.name).toBe("piccolo")
//     })

//     it("POST to /login", async () => {
//         const res = await supertest(server)
//             .post("/")
//             .send({ name: "piccolo"})
//         expect(res.statusCode).toBe(201)
//         expect(res.type).toBe("application/json")
//         expect(res.body.name).toBe("piccolo")
//     })
// })