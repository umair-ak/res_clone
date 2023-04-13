// module.exports = 
// console.log(module.exports);
const data = {
    160320733001:{"name":"Ayesha","gender":"Female"},
    160320733002:{"name":"","gender":"Female"},
    160320733003:{"name":"Sama","gender":"Female"},
    160320733004:{"name":"","gender":"Female"},
    160320733005:{"name":"","gender":"Female"},
    160320733006:{"name":"","gender":"Female"},
    160320733007:{"name":"Arshiya","gender":"Female"},
    160320733008:{"name":"Sofiya","gender":"Female"},
    160320733009:{"name":"Shagufta","gender":"Female"},
    160320733010:{"name":"","gender":"Female"},
    160320733011:{"name":"Zainab","gender":"Female"},
    160320733012:{"name":"","gender":"Female"},
    160320733013:{"name":"","gender":"Female"},
    160320733014:{"name":"","gender":"Female"},
    160320733015:{"name":"","gender":"Female"},
    160320733016:{"name":"","gender":"Female"},
    160320733017:{"name":"Aminah","gender":"Female"},
    160320733018:{"name":"Sarah","gender":"Female"},
    160320733019:{"name":"SARH","gender":"male"},
    160320733020:{"name":"Omer","gender":"male"},
    160320733021:{"name":"UMAIR-AK","gender":"male"},
    160320733022:{"name":"Shaik Imam","gender":"male"},
    160320733023:{"name":"Sohail","gender":"male"},
    160320733024:{"name":"Aslam","gender":"male"},
    160320733025:{"name":"Arsalan","gender":"male"},
    160320733026:{"name":"Soman","gender":"male"},
    160320733027:{"name":"Abdullah","gender":"male"},
    160320733028:{"name":"Arshad","gender":"male"},
    160320733029:{"name":"Saif","gender":"Prefer not to say"},
    160320733030:{"name":"Ahsan","gender":"Others"}
};

module.exports.getName =  getName;

function getName(rollno){
    return data[rollno]["name"];
}

module.exports.getGender = getGender;

function getGender(rollno){
    return data[rollno]["gender"];
}
let points = [];
let grades = [];


module.exports.getPoints = getPoints;
function getPoints(){
   
    for(let i = 0;i<9;i++){
        var randnum = Math.floor(Math.random()*10 +1);
        switch (randnum) {
            case 10:
                points.push(randnum);
                grades.push("S");
                break;

            case 9:
                points.push(randnum);
                grades.push("A");
                break;

            case 8:
                points.push(randnum);
                grades.push("B");
                break;

            case 7:
                points.push(randnum);
                grades.push("C");
                break;

            case 6:
                points.push(randnum);
                grades.push("D");
                break;

            case 5:
                points.push(randnum);
                grades.push("E");
                
                break;
        
            default:
                points.push(0);
                grades.push("F");
                break;
        }  
    }
    return points;
}

module.exports.getGrades = getGrades;

function getGrades(){
    return grades;
}

for(let i = 0 ;i<9;i++){
    points.pop();
    grades.pop();
}