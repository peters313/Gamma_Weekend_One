$(document).ready(function(){
	//not allowing page refresh
	$("#generateEmployeeInfo").submit(function(event){
		event.preventDefault();

		var $inputs = $("#generateEmployeeInfo :input");
		var employee = {};
		
		$inputs.each(function(){
			employee[this.name] = $(this).val();
				
		});
		console.log(employee);
			newRow(employee);

			//generates the employees into the table
		function newRow(firstname, lastname, employeenumber, jobtitle, lastreviewscore, salary){
			$("tbody").append("<tr><td class=firstname>" + employee.firstname + "</td><td class=lastname>" + employee.lastname + "</td><td class=employeenumber>" + employee.employeenumber + "</td><td class=jobtitle>" + employee.jobtitle + "</td><td class=lastreviewscore>" + employee.lastreviewscore + "</td><td class=salary>" + employee.salary + "</td><td><button class='terminate'>" + "Terminate" + "</td></tr>");
		};
			//removes items from the table
	$(".employeeTable").on('click', '.terminate', function(){
			this.closest('tr').remove();
		});
		//random number generator
		function randomNumber(min, max) {
			return Math.floor(Math.random() * (1 + max - min) + min);
		}	


		//clicking to generate new random employee
	$(".randomEmployee").on('click', function(event){
		event.preventDefault();
		var randomemployee = new randomEmployee();
			randNewRow(randomemployee);
	});
		//random employee info
		var randEmpFirstName = ["Jim", "John", "Luke", "Matt", "Eric", "Scott", "Greg", "Chris"];
		var randEmpLastName = ["Perez", "Sampson", "Johnson", "Jackson", "James", "Anderson", "Baker"];
		var randEmpOccupation = ["Sales", "Artist", "Doctor", "Banker", "Pro Athlete", "Pilot"];
		var colorGenerator = {
			1 : 'Red',
			2 : 'Orange',
			3 : 'Yellow',
			4 : 'Blue',
			5 : 'Green',
		};
		//function generating the random employee
		function randomEmployee(){
			this.randEmpFirstName = randEmpFirstName[randomNumber(0, randEmpFirstName.length - 1)];
			this.randEmpLastName = randEmpLastName[randomNumber(0, randEmpLastName.length - 1)];
			this.randEmpID = randomNumber(0, 10000);
			this.randEmpOccupation = randEmpOccupation[randomNumber(0, randEmpOccupation.length - 1)];
			this.colorGenerator = randomNumber(1, 5);
			this.randEmpSalary = randomNumber(1, 200000);

		};
		
		console.log(randEmpOccupation);
	function randNewRow(randomEmployee){
			$("tbody").append("<tr><td class=firstname>" + randomEmployee.randEmpFirstName + "</td><td class=lastname>" + randomEmployee.randEmpLastName + "</td><td class=employeenumber>" + randomEmployee.randEmpID + "</td><td class=jobtitle>" + randomEmployee.randEmpOccupation + "</td><td class=lastreviewscore>" + randomEmployee.colorGenerator + "</td><td class=salary>" + randomEmployee.randEmpSalary + "</td><td><button class='terminate'>" + "Terminate" + "</td></tr>");
		};

	});

});	


