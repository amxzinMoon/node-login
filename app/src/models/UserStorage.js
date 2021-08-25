"use strict";

class UserStorage{
    static #users = {
        id: ["11", "박부장", "김대리"],
        psword: ["111", "aaa", "bbb"],
        name: ["문기", "박부장", "김대리"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
};

module.exports = UserStorage;