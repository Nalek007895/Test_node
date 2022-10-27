import { doQuery } from "../../../common/database/mysql.db.js";
import { Modul, TableName } from "../models/user.model.js";

const UserService = {
    create: (payload) => {
        return doQuery(`INSERT INTO ${TableName} SET ?`, payload)
    },
    getAll: (columns = Modul) => {
        const options = [columns, TableName]
        return doQuery(`SELECT ?? FROM ??`, options)
    }
}

export default UserService