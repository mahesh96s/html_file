function fakeAjax(url, cb) {
  var fakeResponses = {
    "file1": "The first text",
    "file2": "The middle text",
    "file3": "The last text",
  }
  var randomDelay = (Math.round(Math.random() *1E4) % 8000 + 1000)
  console.log("Requesting: " + url);
  setTimeout(function(){
    cb(fakeResponses[url]);
  }, randomDelay);
}
function getFile(file) {
  return new Promise(function(resolve){
  fakeAjax(file,resolve);
});
}
function print(text) {
  console.log(text);
}
var a1=getFile('file1');
var a2=getFile('file2');
var a3=getFile('file3');
a1
.then(print)
.then(function(){
    return a2;
})
.then(print)
.then(function(){
    return a3;
})
.then(print)
.then(function(){
    print("Complete!");
});

