function fakeAjax(url, cb) {
  var fakeResponses = {
    "file1": "The first text",
    "file2": "The middle text",
    "file3": "The last text",
  }
  var randomDelay = (Math.round(Math.random() * 1E4) % 8000 + 1000)
  console.log("Requesting: " + url);
  setTimeout(function () {
        cb(fakeResponses[url]);
  }, randomDelay);
}
function getFile(file) {
  fakeAjax(file,function(text){
      fileReceived(file,text);
  });
}
function print(text) {
  console.log(text);
}
function fileReceived(file,text) {
  if (!response[file]) {
      response[file] = text;
  }
  var files = ["file1","file2","file3"];
  for (var i=0; i<files.length; i++) {
      if (files[i] in response) {
          if (response[files[i]] !== true) {
              print(response[files[i]]);
              response[files[i]] = true;
          }
      }      
      else {          
          return false;
      }  
    }
  print("Complete");
  response = {};
}
var response = {};
getFile("file1");
getFile("file2");
getFile("file3");