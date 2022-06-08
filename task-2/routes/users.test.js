import express from 'express';
import request from "supertest";
import * as router from "./users.js";
import { test, expect} from "@jest/globals" 






describe('test one', ()=> {


    it('send', async ()=> {

        await request(router)
        .get('/')
        .expect(200)
        .expect((res)=> {
            const expected = {success: true, payload: expect.any(Array)}
            const actual = res.body;


        expect(actual).toStrictEqual(expected)
        })




    });
})




// test('second', async ()=>{
//     const response = await supertest(router).get("/users");
//     const actual = response.body;

//     const expected = {
//         success: true,
//         payload: expect.arrayContaining([
//             expect.objectContaining({
//                 id: expect.any(Number),
//                 username: expect.any(String),
//             })
//         ])
//     }

//     expect(actual).toEqual(expected)
// })














