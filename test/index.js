var less = require('less');
var fs =require('fs');
var lessInput = `
@width: 10px;
@height: @width + 10px;

#header {
  width: @width;
  height: @height;
}
`;
var lessOupt = `
#header {
  width: 10px;
  height: 20px;
}
`
var options = {}
var content = 'hi'
function getContent(content){
  return less.render(lessInput, options)
  .then(function(output) {
      // output.css = string of css
      // output.map = string of sourcemap
      // output.imports = array of string filenames of the imports referenced
      //console.log(output)
      content = output.css
      return content
  },
  function(error) {
  });
}


((async ()=>{})()).then(()=>getContent(content)).then(v=>lessOupt===v).then(value=>{
  if(value!==true){
    process.exit(1)
  }
}).then(()=>{
  var cssOutByFisCli = fs.readFileSync('./test/test.css').toString()
  if(cssOutByFisCli!==lessOupt){
   process.exit(1)
  }
})

