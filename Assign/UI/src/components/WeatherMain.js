var React = require('react');
var Display = require('./Weather2');

var WeaatherMain = React.createClass({

    getInitialState: function() {
      return ({dbObj:[],wRecord:[] ,citylst:["Guntur","Mumbai","Kanpur","Gujrat","Delhi","Bangalore","Chennai","Hyderabad","Mumbai","Visakhapatnam","Vijayawada","Goa","Noida"]});
    },
    displayWeather:function(wrecord){
      console.log(wrecord);
      $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather/?q="+wrecord+"&APPID=c20c510e082a8ec475206d22b1f9066b",
        dataType: 'json',
        cache: false,
        success: function(data1) {
          var temp=this.state.dbObj;
          temp.push(data1);
          this.setState({dbObj:temp});
          //console.log(data1);
          $.ajax({
                url : "http://localhost:8080/api/weather/save",
                dataType : 'json',
                type : "POST",
                cache : false,
                data: data1,
                success : function(data){
                  console.log("saved to db");
                }.bind(this),
                error : function(xhr, status, err) {
                console.error("http://localhost:8080/api/weather/render", status, err.toString());
                }.bind(this)
              });

        }.bind(this),
        error: function(xhr, status, err) {
          console.error(urlstr, status, err.toString());
        }.bind(this)
      });
    },
    componentDidMount: function(e) {
      $.ajax({
            url : "http://localhost:8080/api/weather/render",
            dataType : 'json',
            type : "GET",
            cache : false,
            success : function(data){
            //  console.log(data);
              this.setState({dbObj:data})
            //  console.log(JSON.stringify(data));
            }.bind(this),
            error : function(xhr, status, err) {
            console.error("http://localhost:8080/api/weather/render", status, err.toString());
            }.bind(this)
          });
    },
    render: function() {
      var ctyls=this.state.citylst;
      var dbdata=this.state.dbObj;
      console.log(dbdata);
      return(
        <Display cty={ctyls} dbd={dbdata} weatherrecord={this.displayWeather}/>
      );
    }
});

module.exports = WeaatherMain;
