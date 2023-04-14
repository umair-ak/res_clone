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
    160320733008:{"name":"","gender":"Female"},
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
    160320733029:{"name":"Saif","gender":"male"},
    160320733030:{"name":"Ahsan","gender":"male"},
    160320733031:{"name":"Akber","gender":"male"},
    160320733032:{"name":"Aqib Imam","gender":"male"},
    160320733033:{"name":"one piece","gender":"male"},
    160320733034:{"name":"asjad","gender":"male"},
    160320733035:{"name":"wael ansari","gender":"male"},
    160320733036:{"name":"","gender":"male"},
    160320733037:{"name":"zubair","gender":"male"},
    160320733038:{"name":"","gender":"male"},
    160320733039:{"name":"sufiyan","gender":"male"},
    160320733040:{"name":"","gender":"male"},
    160320733041:{"name":"","gender":"male"},
    160320733042:{"name":"Affan","gender":"male"},
    160320733043:{"name":"","gender":"male"},
    160320733044:{"name":"","gender":"male"},
    160320733045:{"name":"","gender":"male"},
    160320733046:{"name":"Ibrahim","gender":"male"},
    160320733047:{"name":"Abdullah","gender":"male"},
    160320733048:{"name":"","gender":"male"},
    160320733049:{"name":"","gender":"male"},
    160320733050:{"name":"Ismail","gender":"male"},
    160320733051:{"name":"arsalan","gender":"male"},
    160320733052:{"name":"","gender":"male"},
    160320733053:{"name":"Umair the other one","gender":"male"},
    160320733054:{"name":"","gender":"male"},
    160320733055:{"name":"sujath","gender":"male"},
    160320733056:{"name":"Anas","gender":"male"},
    160320733057:{"name":"Turab akbar","gender":"male"},
    160320733058:{"name":"shafi","gender":"male"},
    160320733059:{"name":"","gender":"male"},
    160320733060:{"name":"aftab","gender":"male"},
    160320733061:{"name":"adil","gender":"male"},
    160320733062:{"name":"","gender":"male"},
    160320733063:{"name":"mahboob","gender":"male"},
    160320733064:{"name":"","gender":"male"},
    160320733065:{"name":"","gender":"male"},
    160320733066:{"name":"","gender":"male"},
    160320733067:{"name":"","gender":"male"},
    160320733068:{"name":"","gender":"male"},
    160320733069:{"name":"mazer","gender":"Pmale"},
    160320733070:{"name":"azar","gender":"male"},
    160320733071:{"name":"adnan","gender":"male"},
    160320733072:{"name":"akram","gender":"male"},
    160320733073:{"name":"","gender":"male"},
    160320733074:{"name":"","gender":"male"},
    160320733075:{"name":"shahed","gender":"male"},
    160320733076:{"name":"","gender":"male"},
    160320733077:{"name":"","gender":"male"},
    160320733078:{"name":"","gender":"male"},
    160320733079:{"name":"","gender":"male"},
    160320733080:{"name":"","gender":"male"},
    160320733081:{"name":"","gender":"male"},
    160320733082:{"name":"","gender":"male"},
    160320733083:{"name":"","gender":"male"},
    160320733084:{"name":"","gender":"male"},
    160320733085:{"name":"","gender":"male"},
    160320733086:{"name":"","gender":"male"},
    160320733087:{"name":"","gender":"male"},
    160320733088:{"name":"","gender":"male"},
    160320733089:{"name":"","gender":"male"},
    160320733090:{"name":"","gender":"male"},
    160320733091:{"name":"","gender":"male"},
    160320733092:{"name":"","gender":"male"},
    160320733093:{"name":"","gender":"male"},
    160320733094:{"name":"","gender":"male"},
    160320733095:{"name":"","gender":"male"},
    160320733096:{"name":"","gender":"male"},
    160320733097:{"name":"","gender":"male"},
    160320733098:{"name":"","gender":"male"},
    160320733099:{"name":"","gender":"male"},
    160320733100:{"name":"","gender":"male"},
    160320733101:{"name":"","gender":"male"},
    160320733102:{"name":"","gender":"male"},
    160320733103:{"name":"","gender":"male"},
    160320733104:{"name":"","gender":"male"},
    160320733105:{"name":"","gender":"male"},
    160320733106:{"name":"","gender":"male"},
    160320733107:{"name":"","gender":"male"},
    160320733108:{"name":"","gender":"male"},
    160320733109:{"name":"","gender":"male"},
    160320733100:{"name":"","gender":"male"},
    160320733301:{"name":"=","gender":"female"},
    160320733302:{"name":"","gender":"female"},
    160320733303:{"name":"","gender":"male"},
    160320733304:{"name":"","gender":"male"},
    160320733305:{"name":"","gender":"male"},
    160320733306:{"name":"","gender":"male"},
    160320733307:{"name":"","gender":"male"},
    160320733308:{"name":"","gender":"male"},
    160320733309:{"name":"","gender":"male"},
    160320733310:{"name":"","gender":"male"}
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

module.exports.resetscore = resetscore;

function resetscore(){
    points = [];
    grades = [];
}