"use strict";

const users = {
    id: ["11", "문기", "문기기"],
    psword: ["111", "1234", "1233"],
};

const output ={
    home: (req, res) => {
        res.render("home/index");
    },

    login: (req, res) => {
        res.render("home/login");
    },
};

const process = {
    login: (req, res) => {
        const id = req.body.id,
            psword = req.body.psword;

        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if(users.psword[idx] === psword){
                return res.json({
                    success: true,
                });
            }
        }

        return res.json({
            success: false,
            msg: "로그인 실패.",
        });
    },
};




module.exports = {
    output,
    process,
};