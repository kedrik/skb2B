import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.get('/', (req, res) => {
  res.json({
    hello: 'JS World!!!!!!!!!',
  });
});

app.get('/task2B',(req,res) => {
  var init=req.query.fullname.split(" ");
  if(init.length>3){
    var result="Invalid fullname";
    res.send(result);
  }
  else if(req.query.fullname.length==0)
  {
    var result="Invalid fullname";
    res.send(result);
  }
  else if(init.length==2){
    var result=init[1]+" "+init[0][0]+".";
  }
  else if(init.length==1){
    var result=req.query.fullname;
  }
  else{
  var result=init[2]+" "+init[0][0]+". "+init[1][0]+".";
  }
  res.send(result);
})

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
