// Initialize Firebase
var config = {
apiKey: "AIzaSyBx0wYabvpqSH62XvHfLX-YKAZQgA7dEDQ",
authDomain: "chugga-choo-choo.firebaseapp.com",
databaseURL: "https://chugga-choo-choo.firebaseio.com",
projectId: "chugga-choo-choo",
storageBucket: "chugga-choo-choo.appspot.com",
messagingSenderId: "779695021382"
};
firebase.initializeApp(config);

var tFrequency = 15;
var firstTime = "04:00";
//convert time back to make sure time is reset to capture actual curent time
//show difference between current time and arrival time
//data input recorded to add new trains
