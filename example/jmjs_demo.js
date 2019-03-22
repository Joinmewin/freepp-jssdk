
    var SetConfig = function(){
        var params = {
            jwt :"eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJleHAiOjE1MTA3MzEyMjQsImlhdCI6MTUxMDcyNDAyNCwidGlja2V0SWQiOiJVNGlWMzJFTHhuU1NEU2ZsVVFGeiIsInVybCI6Imh0dHBzOi8vd3d3Lmdvb2dsZS5jb20udHcvIiwiRnVuY3Rpb25MaXN0IjoiQWxsIiwiYWdpZCI6ImI0YjA0YTNiLWY5MWItNDU1Yy05N2QwLWJlYWExZGNjMzU0ZCJ9.siQvRlawE3lAlh58MV9XWxigs3yZ9XzrFUk2A42qxozUNG9wVlRm4MAQtBdS69grO297beFdarJ4K2UYfkfEBw",
            cb:function(err,res){
                if(err)
                    alert(res);
                else
                    alert(res);
            }
        };
        jmjs.SetConfig(params);
    }

   var GetLocation = function(){

        var params = {
            cb:function(err,res){
                if(err)
                    alert(res);
                else{
                      alert(JSON.stringify(res));
                }
            }
        };
        jmjs.GetLocation(params);
    }

    var GetCurrentWifi = function(){

        var params = {
            cb:function(err,res){
                if(err)
                    alert(res);
                else{
                      alert(JSON.stringify(res));
                }
            }
        };
        jmjs.GetCurrentWifi(params);
    }

    var GetAllWifi = function(){

        var params = {
            cb:function(err,res){
                if(err)
                    alert(res);
                else{
                      alert(JSON.stringify(res));
                }
            }
        };
        jmjs.GetAllWifi(params);
    }

    var GetDeviceUUID = function(){

        var params = {
            cb:function(err,res){
                if(err)
                    alert(res);
                else{
                      alert(res.uuid);
                }
            }
        };
        jmjs.GetDeviceUUID(params);
    }

    var GetNetworkType = function(){
        var params = {
            cb:function(err,res){
                if(err)
                    alert(res);
                else
                    alert(JSON.stringify(res));
            }
        };
        jmjs.GetNetworkType(params);
    }


    var GetQRcode = function(){
        var params = {
            cb:function(err,res){
                if(err)
                    alert(res);
                else
                    alert(JSON.stringify(res));
            }
        };
        jmjs.GetQRcode(params);
    }

    var CloseWebView = function(){
        var params = {
            cb:function(err,res){
                if(err)
                    alert(res);
                else
                    alert(res);
            }
        };
        jmjs.CloseWebView(params);
    }