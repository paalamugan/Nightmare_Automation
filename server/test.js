

const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })
//const { moongose } = require('./mongodb.js');
//const TestCase = require('./model/testcase');
//     var description="";
// describe('Public Pages', function() {
//     // Recommended: 5s locally, 10s to remote server, 30s from airplane ¯\_(ツ)_/¯
//     this.timeout('30s')
  
//     let nightmare = null
//     beforeEach(() => {
//       nightmare = new Nightmare({ show: true })
//     })
  
//     describe('/ (Home Page)', () => {
//       it('should load without error', done => {
//         nightmare.goto('http://localhost:4200/testcase')
//         .type('#description', 'p-1')
// .wait(3000)
//   .evaluate(() => {
   
//     return document.querySelector('#description').value;
//   })
//           .end()
//           .then(function (result) { 
//             TestCase.find({}).then((data)=>{
// console.log(data);
//             })
//               description=result;
//               console.log("first result",result);
//             done()
//          })
//           .catch(done)
//       })
//     })
  
//     describe('/auth (Login Page)', () => {
//       it('should load without error',  done => {
//         nightmare
//       .goto('http://localhost:4200/testcase')
//       .wait(1000)
//       .evaluate(function(){
//         return Array.from(document.querySelectorAll('td.cdk-column-title')).map(element =>
//              element.innerText);
//       }).end()
//       .then((innerTexts) => {
//         console.log("firstdfgf result",description);
//         innerTexts.forEach(tabelfirstcolumn=>{
//             if(description==tabelfirstcolumn){
//                 console.log("teststatus is pass");
//             }else{
//                 console.log("teststatus is fail");
//             }
            
            
//              })
//              done()
          
//       }).catch(done)
//     })
   
//   })
// });

    nightmare
  .goto('http://localhost:4200/')
  .type('#description', 'fghjrdtfdfdgf')
.wait(1000)
  .evaluate(() => {
   
    return document.querySelector('#description').value;
  })
  .end()
  .then((result)=>{
    console.log(result);
    // TestCase.findOne({ }).then((data)=>{
       
    //    if(data.description==result){
    //     TestCase.updateOne(
    //         { description: { $eq: result } },
    //         { $set: { teststatus:"pass" } }
    //       ).then(data =>{
    //         console.log(data);
    //       });
    //    }else{
    //        console.log("fail")
    //    }
      
        
    //                 })
                  
  

  })
  .catch(error => {
    console.error('Search failed:', error)
  })