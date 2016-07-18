var express = require('express');
var router = express.Router();
var Weather = require('../../../models/weather/weather');
var app = express();


        // Getting weather
        router.route('/weather/render')
        .get(function(req,res){
          Weather.find({}, function (err, weather) {
            if (err)
                res.send(err);
            res.json(weather);
          });
        });

        //Saving weather
        router.route('/weather/save')
        .post(function(req,res){
          var data=new Weather(req.body);
          data.save(function(err) {
              if (err)
                  res.send(err);
              res.json({ message: 'weather added!' });
          });
        });



    module.exports= router;
