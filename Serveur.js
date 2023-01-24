const express = require('express')

const app = express()

const port = 5000

const verifTime=(req, res, next) => {     
    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    const currentHour = currentDate.getHours();
    
   if (currentDay >= 1 && currentDay <= 5 && currentHour >= 9 && currentHour < 17) {
       next();
    } 
 
        else {
                 return res.status(503).send('Service Unavailable');
            }

  
};
    
    app.use(verifTime)



    app.get('/',(req,res)=>{    
        res.sendFile(__dirname+'/public/Home.html')
    })

    app.get('/OurServices',(req,res)=>{    
        res.sendFile(__dirname+'/public/OurServices.html')
    })
    app.get('/contact',(req,res)=>{    
        res.sendFile(__dirname+'/public/contact.html')
    })

app.listen(port,console.log(`Server is running on the port ${port}`))