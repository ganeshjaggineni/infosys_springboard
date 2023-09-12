var fs=require('fs');
fs.readFile('samplegani.txt','utf8',function(err,data)
				    {
					if(err) throw err;
					console.log(data);
				    });

console.log('open a file to reading');
