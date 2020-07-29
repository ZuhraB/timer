var args = process.argv.slice(2);
const filterdArgs = args.map(arg => parseInt(arg)).sort()
for(let time in filterdArgs){
  setTimeout(() => {
    console.log(filterdArgs[time] +" seconds")
    
  }, filterdArgs[time] * 1000)

}