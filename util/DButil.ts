import { rejects } from "assert";
import { promises } from "dns";
import mongoose from "mongoose";
import { resolve } from "path";

export class DBUtil {
    public static ConnectToDB(dburl: string, dbname: string): Promise<String> {
        return new Promise((resolve, reject) => {
            mongoose.connect(dburl, {
                dbName: dbname
            }, (error) => {
                if (error) {
                    reject("Connection Mongodb failed");
                }
                else {
                    resolve("Connection Mongodb Sucesss");
                }
            })
        })
    }
}