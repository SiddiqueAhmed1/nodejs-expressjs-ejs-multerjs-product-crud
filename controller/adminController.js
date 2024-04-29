
// admin dashboard login
export const adminLogin = (req, res) => {
    res.render('admin', {
        name : 'Siddique Ahmed',
        skill : 'MERN Stack',
        age : 22,
    })
}

        // array filter method
        const array = ['2','5','6','1','3','4'];

        const data = array.filter((item) => item % 2 === 0)
        console.log(data);
        //output false ... if all value match except 1 in the callback condition then it's return false otherwise true