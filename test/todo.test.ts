import request from "supertest";
import app from "../src/index";

describe("API Endpoints Tests",  (): void => {

  describe("GET ROUTES", ():void => {
   test("GET / sample GET route", async (): Promise<void> => {
      
    const res = await request(app).get("/");

    expect(res.body).toEqual({
        msg: "It working!"
    });


   });

   test("GET /item/all route", async() : Promise<void> => {
    
        const res = await request(app).get("/item/all");

        expect(res.body.docs.length).toEqual(3);
   });
  
      test("GET /item/id route", async() : Promise<void> => {
    
        const id = '6aaa9e00c1af47e6710a8f13';
        const res = await request(app).get(`/item/${id}`);

        console.log(res.body);
        expect(res.body.result[0].author).toEqual('author1');

   });

 });



});
