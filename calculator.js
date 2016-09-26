function percentageCalculate(score,total,box){
  var x = score.value;
  var y = total.value;
  var z = x/y*100;
  z = z.toFixed(2);

  for (i=0; i<4;i++){
    if(i==box)
    {
      if(x=="" || y=="")
      {
        document.getElementsByName("percent")[i].innerHTML = "";
        return 2; // indicator for mean and weightedGrade that this input is not filled
      }
      else if(z<=100 && z>=0)
      {
        document.getElementsByName("percent")[i].innerHTML = z + "%";
        return x/y;
      }
      else
      {
        document.getElementsByName("percent")[i].innerHTML = "Illegal Grade";
        return 3; // indicator for mean and weightedGrade that this is illegal
      }
    }
  }
}

function weightedGrade(){
  var grade = 0;
  var weightGrade = 0;
  var weightCounter = 0;
  for (i=0;i<4;i++)
  {
    grade = percentageCalculate(document.getElementsByName("gradeNum")[i], document.getElementsByName("gradeDen")[i], i);
    weight = document.getElementsByName("weight")[i].value;
    //console.log(weight);
    if(grade == 3)
    {
      document.getElementById("weight").innerHTML="Error: illegal grade detected";
      console.log("error 3");
      return;
    }
    else if (grade == 2 && i == 0)
    {
      document.getElementById("weight").innerHTML="Error: no grades detected";
      return;
    }
    else if(weight=="" &&  grade!= 2)
    {
      document.getElementById("weight").innerHTML="Error: missing weight(s)";
      return;
    }

    else if(weight < 0 && weight != "" &&  grade!= 2)
    {
      document.getElementById("weight").innerHTML="Error: negative weight detected";
      return;
    }
    else if(grade !=2 && weight != "" )
    {
      weightGrade = weightGrade + weight*grade;
      console.log(weightGrade);
      weightCounter = +weightCounter + +weight;
      console.log(weightCounter);
    }
  }
  weightGrade = weightGrade/weightCounter;
  weightGrade = weightGrade.toFixed(2);
  document.getElementById("weight").innerHTML="Weighted Grade: " + weightGrade*100 + "%";

}

function meanGrade(){

  var grade = 0;
  var mean = 0;
  var actitivtiesCounter = 0;
  for (i=0;i<4;i++)
  {
    console.log("i=" +i);
    grade = percentageCalculate(document.getElementsByName("gradeNum")[i], document.getElementsByName("gradeDen")[i], i);
    console.log("grade=" +grade);
    if(grade == 3)
    {
      document.getElementById("mean").innerHTML="Error: illegal grade detected";
      console.log("error 3");
      return;
    }
    else if (grade == 2 && i == 0)
    {
      document.getElementById("mean").innerHTML="Error: no grades detected";
      return;
    }
    else if(grade !=2)
    {
      mean = mean + grade;
      actitivtiesCounter++;
    }
  }
  mean = mean/actitivtiesCounter;
  mean = mean.toFixed(2);
  console.log("no errors");
  document.getElementById("mean").innerHTML="Mean Grade: " + mean*100 + "%";
}
