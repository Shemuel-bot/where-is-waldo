const { PrismaClient } = require('@prisma/client');
const asyncHandler = require('express-async-handler');



exports.character_select = asyncHandler(async (req, res) => {
    switch (req.body.name) {
        case 'wilma':
                if (req.body.minX < 815 && 
                    req.body.maxX > 815 && 
                    req.body.minY < 671 && 
                    req.body.maxY > 671) {
                    
                    res.json({
                        message: true
                    })
                }else{
                    res.json({
                        message: false
                    })
                }

            break;
    
        case 'waldo':
            if (req.body.minX < 664 && 
                req.body.maxX > 664 && 
                req.body.minY < 367 && 
                req.body.maxY > 367) {
                
                res.json({
                    message: true
                })
            }else{
                res.json({
                    message: false
                })
            }
            break;

        case 'wizard':
            if (req.body.minX < 784 && 
                req.body.maxX > 784 && 
                req.body.minY < 367 && 
                req.body.maxY > 367) {
                    
                res.json({
                    message: true
                })
            }else{
                res.json({
                    message: false
                })
            }
            break;

        case 'odlaw':
            if (req.body.minX < 308 && 
                req.body.maxX > 308 && 
                req.body.minY < 370 && 
                req.body.maxY > 370) {
                
                res.json({
                    message: true
                })
            }else{
                res.json({
                    message: false
                })
            }
            break;
    }
})