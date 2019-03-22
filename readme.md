# **FreePP JSSDK for Web Readme** 



# 1.Overview

This document describes how to integrate FreePP JSSDK in 3rd Party's Web Application. Before using JSSDK service, JSSDK authentication is required.

For authentication detail, please refer Request Access Token API which grant\_type is client\_credentials in FreePP\_OAuth\_Readme.



# 2.Import JS

Please download FreePP JSSDK package which contains followings files. :

**lib\jmjs\_pub.js:** FreePP JSSDK JS file, which needs to be imported in 3rd Party Web. It supports AMD/CMD.

**example\jmjs_demo.js,  example\test.html:** Example Code, and HTML page.



# 3. Authentication Flow

Before using JSSDK, 3rd Party needs to run Authentication. Following is Authentication Flow Diagram:

![](https://raw.githubusercontent.com/Joinmewin/joinme-jssdk/master/media/jssdk01.jpg)

## 3.1 Steps Description:

**Step 1:** 3rd Party Web App calls Request Access Token API which grant\_type is client\_credentials. Please refer FreePP\_OAuth\_Readme for detail. And then, call "Get Ticket" API to get "Ticket" for JSSDK.

**Step 2:** 3rd Party Web App calls "Set Config" to transfer ticket to FreePP APP. Please refer "Set Config" API.

**Step 3:** FreePP APP query identification of 3rd Party from FreePP Server, and APP will verify if 3rd Party valid or not. If Pass, JSSDK is available for service.

## 3.2 Refresh Token:

Once Token expired, JSSDK API returns error code "103" which means "Token Expired" message. 3rd Party Web App shall run the following steps to refresh token , and ticket.

**Step 1:** 3rd Party Web App calls **Refresh** Access Token API. Please refer FreePP\_OAuth\_Readme for detail. And then, call "Get Ticket" API to get "Ticket" for JSSDK.

**Step 2:** 3rd Party Web App calls "Set Config" to transfer ticket to FreePP APP. Please refer "Set Config" API.

**Step 3:** FreePP APP query identification of 3rd Party from FreePP Server, and APP will verify if 3rd Party valid or not. If Pass, JSSDK is available for service.

# 4. API Refernece

Some APIs are not available, due to iOS limitation. Following is the support table for Android ,and iOS.



|                | Android(v1.0.24 & later) | iOS(v1.0.23& later ) |
| -------------- | ------------------------ | -------------------- |
| SetConfig      | Y                        | Y                    |
| GetQRcode      | Y                        | Y                    |
| CloseWebView   | Y                        | Y                    |
| GetLocation    | Y                        | N                    |
| GetNetworkType | Y                        | N                    |

 

## 4.1 Error Code Definition:

JSSDK API returns result by CallBack which contains Error code for detail.

| **Error Code** | **Message**           |
| -------------- | --------------------- |
| 101            | "Internal data error" |
| 102            | "Ticket is invalid"   |
| 103            | "Ticket is expired"   |
| 104            | "Url is not matched"  |
| 105            | "No public key"       |
| 106            | "JWT format error"    |
| 107            | "Please set config"   |


## 4.2 Get Ticket

3rd Party gets Ticket from FreePP Sever , and the parameters are

1.  **Access\_Token** : This is Access Token form Request Access Token API which grant\_type is client\_credentials. Please refer FreePP\_OAuth\_Readme for detail.

2.  **scope** : Please set "All". It's Reserved for further.

3.  **url** : JSSDK URL 3rd Party registered in FreePP Develop Web.


**Request:**
```json
Method:POST /access
Header:Content-type: application/json
Authorization: Bearer {{access_token}}
Request:
//Get Ticket
{
    "query":"query {jsSdkScope {ticket(scope: \"All\", url: \"https://www.3rdParty.com/\")}}"
}

```

**Response:**

```json
{
    "resp": {
        "data": {
            "jsSdkScope": {
                "ticket": "eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJleHAiOjE1MTA4MDYzNTUsImlhdCI6MTUxMDc5OTE1NSwidGlja2V0SWQiOiJQQzdlb05uQTVaWXNVWGozaHFVRCIsInVybCI6Imh0dHBzOi8vd3d3Lmdvb2dsZS5jb20udHcvIiwiRnVuY3Rpb25MaXN0IjoiQWxsIiwiYWdpZCI6Ijk3NzQ2MWZlLWI5N2UtNGVjZi05N2QwLTI3M2U4MGQzYmNlYyJ9.HwiUsWPJLJyHcV4r1-kNOvQhbS0748ssKxIcetX_xKB9Ns6hQnSvYP_Lmuxr2tznb9XfS0f0Ij8ooS2QZjI9Yw"
            }
        }
    }
}
```



## 4.3 SetConfig

Once 3rd Party gets Ticket, you need to transfer it to FreePP APP by this API.

```javascript
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
```



## 4.4 GetLocation

Return User's Location Information.

```javascript
   var GetLocation = function(){
        var params = {
            cb:function(err,res){
                if(err)
                    alert(res);
                else{
                      alert(res.latitude);
                      alert(res.longitude);
                }
            }
        };
        jmjs.GetLocation(params);
    }
```

**Return:** 

​	res.latitude : 緯度 

​	res.longitude : 經度



## 4.5 GetNetworkType

Return user's network.

```javascript
    var GetNetworkType = function(){
        var params = {
            cb:function(err,res){
                if(err)
                    alert(res);
                else
                    alert(res);
            }
        };
        jmjs.GetNetworkType(params);
    }
```


**Return:**                         
res.networkType 
//3G/4G/WIFI/No network




## 4.6 GetQRcode

Return QR result.

```javascript
    var GetQRcode = function(){
        var params = {
            cb:function(err,res){
                if(err)
                    alert(res);
                else
                    alert(res);
            }
        };
        jmjs.GetQRcode(params);
    }
```

**Return:**
​  res //String value                 

​        // e.g. "https://www.3rdparty.com" 



## 4.7 CloseWebView

Close current web view window.

```javascript
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
```

## 4.8 GetDeviceUUID
   Return phone’s UUID
   
```javascript
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
```

**Return:**                       

   res.uuid


## 4.9 GetCurrentWifi
   Return current connected WIFI info
   
```javascript
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
```

**Return:**                       

result by different situation:
### 1. get info correctly
```javascript
{
"current_wifi":[{"ssid":"Antek01","mac":"11:11:22:33:44:55"}]
}
```

### 2.WiFi Off
```javascript
{
 "wifi_state": "wifi disabled" 
}
```  

### 3.No connected WiFi
```javascript
{
"current_wifi":[{"ssid":"null","mac":"null"}]
}
```


## 4.10 GetAllWifi
   Return current connected WIFI info
```javascript
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
```

Return
res by different situation
### 1. get info correctly
```javascript
{
"current_wifi":[{"ssid":"Antek01","mac":"11:11:22:33:44:55"}],
“allscan_wifi”:[
{"ssid":"Antek01","mac":"11:11:22:33:44:55"},
{"ssid":"Antek02","mac":"22:11:22:33:44:55"}
]
}
```
### 2.WiFi Off
```javascript
{
 "wifi_state": "wifi disabled" 
}
```

### 3.WiFi On, No connected WiFi, No availabe WiFi
```javascript
{
"current_wifi":[{"ssid":"null","mac":"null"}],
“allscan_wifi":[{"ssid":"null","mac":"null"}]
}
```

### 4.WiFi On, No connected Wifi, Get available Wifi 
```javascript
{
"current_wifi":[{"ssid":"null","mac":"null"}],
"allscan_wifi":[
{"ssid":"Antek01","mac":"11:11:22:33:44:55"},
{"ssid":"Antek02","mac":"22:11:22:33:44:55"}
]
}
```


# 5.License

[Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0) 
