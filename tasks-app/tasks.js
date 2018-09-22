var fs = require('fs');

var notesPath = './notes/data.json';
var tasks = function(){
    this.readNote = (callback) => {
        try{
            var notesDataString = fs.readFileSync(notesPath);
            var notesData = JSON.parse(notesDataString);
            if(callback){
                callback(notesData);
            }
            return(notesData);
        }catch(e){
            console.log("Error\n" + e);
        }
    }
    
    this.writeNote = () => {
        try{
            var notesData = this.readNote();
            var noteObject =  {
                name : "Prateek",
                age : 21
            };
            notesData.push(noteObject);
            notesDataString = JSON.stringify(notesData);
            fs.writeFileSync(notesPath, notesDataString);
        }catch(e){
            console.log("error\n" + e);
        }
    }
}

module.exports = {
    tasks
}
