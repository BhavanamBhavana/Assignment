var React = require('react');
var Link = require('react-router').Link;

var Display=React.createClass({
  render: function() {
    var ctyls=this.props.cty;
    var dbdata=this.props.dbd;
    var sss=this.props.weatherrecord;
    var result=ctyls.map(function(city) {
      var matchcity=[];
      for(var i=0;i<dbdata.length;i++){
        if(dbdata[i].name == city){
          matchcity.push(dbdata[i]);
        }
      }
      if(matchcity.length > 0){
        return(
          <div className="container">
            <div className="panel panel-default">
              <div className="panel-body">
                <div  style={{"float":"left"}}>
                  <h3 className="active"><Link to={"/WrDisplay/"+city}>{city}</Link></h3>
                  <p> Geo Coordinates : [ {matchcity[0].coord.lon} - {matchcity[0].coord.lat} ]</p>
                  <p> Temperature is from {matchcity[0].main.temp_min} to {matchcity[0].main.temp_max} </p>
                  <p>Wind : {matchcity[0].wind.speed}</p>
                </div>
                  <button className="btn btn-info submit-btn" key={city} style={{"float":"right"}} onClick={(matchcity)=>sss(city)}>Refresh</button>
              </div>
            </div>
          </div>
        );
      }
      else{
        return(
          <div className="container">
            <div className="panel panel-default">
              <div className="panel-body">
              <h3 style={{"float":"left"}}><Link to="/WrDisplay">{city}</Link></h3>
              <button className="btn btn-info submit-btn" key={city} style={{"float":"right"}} onClick={(matchcity)=>sss(city)}>Refresh</button>
              </div>
            </div>
          </div>
        );
       }
      });
      return (<span>{result}</span>);
    }
});
module.exports = Display;
