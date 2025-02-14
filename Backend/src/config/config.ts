import {config as conf} from 'dotenv';
conf();




//isme hum ne ek object banaya hai underscore ek convention hai bss
const _config = {
    port: process.env.PORT || 3000,
    databaseUrl: process.env.MONGO_URI 

}


export const config = Object.freeze(_config);// kisi bhi object ko freeze karne ke liye hum Object.freeze() ka use karte hain. matlab read only ban jayega kyuki port ko dusre folder mai change nahi karna chahiye.