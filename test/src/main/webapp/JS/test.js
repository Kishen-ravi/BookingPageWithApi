var jsonUrl = "https://developer.setmore.com/api/v1/o/oauth2/token?refreshToken=dd51e2a9d25muTwhH10_XGYejeJvLj-QLhJnK-ikNrfIX";


$.getJSON(jsonUrl, function(data) {
  token = JSON.stringify(data);
  console.log(token);
  Access = JSON.parse(token);
  window.access_token = Access.data.token.access_token;
  console.log(access_token);
  $('#result').text(access_token);
//setTimeout(function(){
  $.ajax({
		type: "GET",
		url: "https://developer.setmore.com/api/v1/bookingapi/services",
//		headers: {
//			"Content-Type": "application/json",
//		    "Authorization": "Bearer " + window.access_token
//		  },
		beforeSend: function(xhr) {
	        xhr.setRequestHeader('Content-Type', 'application/json');
	        xhr.setRequestHeader('Authorization', 'Bearer '+ window.access_token);
	    },
		  
		  success: function (data){
			  	a=data;
			    console.log(data); 
			  },
			  failure:function(){
				  alert("f");
			  }
	});
//}, 3000);
  
  $.ajax({
		type: "GET",
		url: "https://developer.setmore.com/api/v1/bookingapi/staffs",
//		headers: {
//			"Content-Type": "application/json",
//		    "Authorization": "Bearer " + window.access_token
//		  },
		beforeSend: function(xhr) {
	        xhr.setRequestHeader('Content-Type', 'application/json');
	        xhr.setRequestHeader('Authorization', 'Bearer '+ window.access_token);
	    },
		  
		  success: function (data){
			  	b=data;
			    console.log(data); 
			  },
			  failure:function(){
				  alert("f");
			  }
	});


setTimeout(function(){
	 var data = {"staff_key":"r3b231493098786085","service_key":"33b1516de2a6a4bb5a3829cf14dab5de61d1b1f4","selected_date":"01/03/2018","off_hours":true,"double_booking" : true,"slot_limit" : 30};

$.ajax({
	type: "POST",
	url: "https://developer.setmore.com/api/v1/bookingapi/slots",
//	dataType: "application/json",
	beforeSend: function(xhr) {
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader('Authorization', 'Bearer '+ window.access_token);
    },
    data:JSON.stringify(data),
//	data: {
//        "staff_key":"r3b231493098786085",      
//        "service_key":"33b1516de2a6a4bb5a3829cf14dab5de61d1b1f4",    
//        "selected_date":"01/03/2018",
//        "off_hours":true,
//        "double_booking" : true,
//        "slot_limit" : 30
//    },
//    contentType: "application/json",
//    contentType: "application/json",
//	headers: {
//		"Content-Type": "application/json",
//	    "Authorization": "Bearer " + window.access_token
//	  },
	
	  success: function (data){
		    console.log(data); 
		  },
		  failure:function(){
			  alert("f");
		  }
});
}, 3000);

setTimeout(function(){
	 var data = {"first_name":"Api","last_name":"Customer","email_id":"XXX@setmore.com"};

$.ajax({
	type: "POST",
	url: "https://developer.setmore.com/api/v1/bookingapi/customer/create",
//	dataType: "application/json",
	beforeSend: function(xhr) {
       xhr.setRequestHeader('Content-Type', 'application/json');
       xhr.setRequestHeader('Authorization', 'Bearer '+ window.access_token);
   },
   data:JSON.stringify(data),
//	data: {
//       "staff_key":"r3b231493098786085",      
//       "service_key":"33b1516de2a6a4bb5a3829cf14dab5de61d1b1f4",    
//       "selected_date":"01/03/2018",
//       "off_hours":true,
//       "double_booking" : true,
//       "slot_limit" : 30
//   },
//   contentType: "application/json",
//   contentType: "application/json",
//	headers: {
//		"Content-Type": "application/json",
//	    "Authorization": "Bearer " + window.access_token
//	  },
	
	  success: function (data){
		  	cust=data;
		    console.log(data); 
		  },
		  failure:function(){
			  alert("f");
		  }
});
}, 3000);

setTimeout(function(){
	 var data = {"staff_key" : "r3b231493098786085",
	          "service_key" : "33b1516de2a6a4bb5a3829cf14dab5de61d1b1f4",      
	          "customer_key" : "c3a902efb680f33d6c050deffd69277a1257b3699",  
	          "start_time" : "2018-03-07T13:30:00.000Z",     
	          "end_time"  : "2018-03-07T14:30:00.000Z",};

$.ajax({
	type: "POST",
	url: "https://developer.setmore.com/api/v1/bookingapi/appointment/create",
//	dataType: "application/json",
	beforeSend: function(xhr) {
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.setRequestHeader('Authorization', 'Bearer '+ window.access_token);
  },
  data:JSON.stringify(data),
//	data: {
//      "staff_key":"r3b231493098786085",      
//      "service_key":"33b1516de2a6a4bb5a3829cf14dab5de61d1b1f4",    
//      "selected_date":"01/03/2018",
//      "off_hours":true,
//      "double_booking" : true,
//      "slot_limit" : 30
//  },
//  contentType: "application/json",
//  contentType: "application/json",
//	headers: {
//		"Content-Type": "application/json",
//	    "Authorization": "Bearer " + window.access_token
//	  },
	
	  success: function (data){
		  	cust=data;
		    console.log(data); 
		  },
		  failure:function(){
			  alert("f");
		  }
});
}, 3000);


}, "json");


