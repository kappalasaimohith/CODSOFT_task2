
var taskList = document.getElementById("taskList");
var taskInput = document.getElementById("taskInput");
var taskDate = document.getElementById("taskDate");
var taskCounter = document.getElementById("taskCounter");
var counter = 0;

function addTask() {
 if (taskInput.value === "") {
  alert("Please enter a task.");
  return false;
 }

 var li = document.createElement("li");
 li.innerHTML = taskInput.value + " - " + taskDate.value;

 var actions = document.createElement("div");
 actions.classList.add("actions");

 var finishButton = document.createElement("button");
 finishButton.innerHTML = "Finish";
 finishButton.onclick = function() {
  li.classList.toggle("finished");
  updateCounter();
 };

 var changeDateButton = document.createElement("button");
 changeDateButton.innerHTML = "Change Date";
 changeDateButton.onclick = function() {
  var newDate = prompt("Enter new date:");
  if (newDate !== null) {
   li.innerHTML = taskInput.value + " - " + newDate;
  }
 };

 actions.appendChild(finishButton);
 actions.appendChild(changeDateButton);

 li.appendChild(actions);

 taskList.appendChild(li);

 taskInput.value = "";
 taskDate.value = "";

 counter++;
 updateCounter();
}

function updateCounter() {
 var unfinishedTasks = taskList.querySelectorAll("li:not(.finished)").length;
 taskCounter.innerHTML = "Tasks to complete: " + unfinishedTasks + " / " + counter;
}