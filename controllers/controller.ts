let id_button: number;
let rocket: Rocket;
let rocket_list: Rocket[] = [];
function createRocket(code: string, nr_of_thrusters: number, thrusters: Thruster[]) {
	rocket = new Rocket(code, nr_of_thrusters, thrusters);
}

// get data from form
const rocket_form: HTMLFormElement  = (document.querySelector('#rocket_form') as HTMLFormElement);
rocket_form.onsubmit = () => {
	let code: HTMLInputElement = (document.getElementById("rocket_code") as HTMLInputElement);
	let thrusters: HTMLInputElement = (document.getElementById("nr_thrusters") as HTMLInputElement);
	let code_error: HTMLElement = (document.getElementById("code_error") as HTMLElement);

	let countErrors: number = 0;
	countErrors += checkCode(code, code_error);
	countErrors += checkNumberInput(thrusters);

	if (parseInt(thrusters.value) > 0) {
		for (let i: number = 0; i < parseInt(thrusters.value); i++) {
			let thruster_value: HTMLInputElement = document.getElementById("thruster" + i) as HTMLInputElement;
			countErrors += checkNumberInput(thruster_value);
		}
	}

	if (countErrors == 0) {
		let thruster_list: Thruster[] = [];
		for (let i: number = 0; i < parseInt(thrusters.value); i++){
			let thruster_value: HTMLInputElement = document.getElementById("thruster" + i) as HTMLInputElement;
			thruster_list.push(new Thruster(0, parseInt(thruster_value.value)));
		}
		createRocket(code.value, parseInt(thrusters.value), thruster_list);
		rocket_list[id_button] = rocket;
		code.value = "";
		code.classList.remove("is-invalid", "is-valid");
		thrusters.value = "";
		thrusters.classList.remove("is-invalid", "is-valid");
		modal_rocket.style.display = "none";
		(document.getElementById("input_thruster") as HTMLInputElement).innerHTML = "";
	}

	return false; // prevent reload
}

function checkCode(code: HTMLInputElement, code_error: HTMLElement) {
	let countErrors: number = 0;

	if (!validateCode(code.value)) {
		code.classList.add("is-invalid");
		code_error.textContent = "Please insert the code";
		countErrors ++;
	} else if (codeExists(code.value)) {
		code.classList.add("is-invalid");
		code_error.textContent = "This rocket already exists in our system.";
		countErrors ++;
	} else {
		code.classList.remove("is-invalid");
		code.classList.add("is-valid");
		code_error.textContent = "";
	}

  	return countErrors;
}

function checkNumberInput(number_input: HTMLInputElement) {
	let countErrors: number = 0;
	if (number_input.id == "nr_thrusters") {
		if (!number_input.value) {
			number_input.classList.add("is-invalid");
			(document.getElementById("thrusters_error") as HTMLElement).textContent = "Please insert the number of thrusters";
			countErrors ++; 
		} else {
			number_input.classList.remove("is-invalid");
			number_input.classList.add("is-valid");
			(document.getElementById("thrusters_error") as HTMLElement).textContent = "";
		}
	} else {
		if (!number_input.value) {
			number_input.classList.add("is-invalid");
			(document.getElementById("thruster_error" + getNrFromID(number_input.id)) as HTMLElement).textContent = "Please insert the value of power";
			countErrors ++; 
		} else {
			number_input.classList.remove("is-invalid");
			number_input.classList.add("is-valid");
			(document.getElementById("thruster_error" + getNrFromID(number_input.id)) as HTMLElement).textContent = "";
		}
	}
	
  	return countErrors;
}

function validateCode(codenr: string) {
	let code_format: RegExp = /^[a-zA-Z0-9]{8}$/;
	if (code_format.test(codenr)) {
		return true;
	} else {
		return false;
	}
}

function codeExists(codeex: string) {
	let verifyCode: boolean = false;
	for (let i: number = 0; i < rocket_list.length; i++) {
		if (codeex == rocket_list[i].code) {
			verifyCode = true;
		}
	}

	return verifyCode;
}

function createInput() {
  	let input_thruster: HTMLInputElement = (document.getElementById("input_thruster") as HTMLInputElement);
  	let thrusters: HTMLInputElement = (document.getElementById("nr_thrusters") as HTMLInputElement);
  	let nr_thruster: number = parseInt(thrusters.value);
  	input_thruster.innerHTML = ''; 
  	for (let i: number = 0; i < nr_thruster; i++) {
  		let create_input: HTMLInputElement = document.createElement("INPUT") as HTMLInputElement;
  		let create_div: HTMLInputElement = document.createElement("DIV") as HTMLInputElement;
 		create_input.setAttribute("id", "thruster" + i);
 		create_input.setAttribute("placeholder", "Insert value of thruster " + (i+1));
 		create_input.setAttribute("type", "number");
 		create_input.setAttribute("class", "form-control form-control-lg mb-2");
 		create_input.setAttribute("min", "10");
 		create_input.setAttribute("step", "10");
 		create_div.setAttribute("id", "thruster_error" + i);
 		create_div.setAttribute("class", "invalid-feedback");
 	 	input_thruster.appendChild(create_input);
 	 	input_thruster.appendChild(create_div);
  	}
}

// modal
let modal_rocket: HTMLElement = (document.getElementById("modal_rocket") as HTMLElement);
window.onclick = function(event: any) {
  	if (event.target == modal_rocket) {
    	modal_rocket.style.display = "none";
  	}
}

function checkButton(id: string) {
	id_button = getNrFromID(id);
	modal_rocket.style.display = "block";
}

function closeModal() {
	modal_rocket.style.display = "none";
}

function getNrFromID(id: string) {
	return parseInt(id.match(/\d+/g)[0]);
}

function printRocketInfo(id: string) {
	let id_info_button: number = getNrFromID(id);
	let show_data: HTMLElement = (document.getElementById("show_data") as HTMLElement);
	if (rocket_list[id_info_button]) {
		show_data.innerHTML = "Rocket " + rocket_list[id_info_button].code + " boosters max power: ";
		for (let i: number = 0; i < rocket_list[id_info_button].nr_of_thrusters; i++) {
			show_data.innerHTML += rocket_list[id_info_button].thrusters[i].max_power + ", ";
		}
		show_data.innerHTML = show_data.innerHTML.slice(0, -2);
	} else {
		show_data.innerHTML = "You need to create the rocket first!";
	}
}

function printAllRocketsInfo() {
	let show_data: HTMLElement = (document.getElementById("show_data") as HTMLElement);
	show_data.innerHTML = "";
	if (rocket_list.length > 0) {
		for (let i: number = 0; i < rocket_list.length; i++) {
			if (rocket_list[i]) {
				show_data.innerHTML += "Rocket " + rocket_list[i].code + " boosters max power: ";
				for (let j: number = 0; j < rocket_list[i].nr_of_thrusters; j++) {
					show_data.innerHTML += rocket_list[i].thrusters[j].max_power + ", ";
				}
				show_data.innerHTML = show_data.innerHTML.slice(0, -2);
				show_data.innerHTML += "<br>";
			}
		}
	} else {
		show_data.innerHTML = "You need to create the rockets first!";
	}
}

function accelerateRocket(id: string){
	let id_accelerate: number = getNrFromID(id);
	if (rocket_list[id_accelerate]){
		rocket_list[id_accelerate].accelerate_rocket();
	}
}

function breakRocket(id: string){
	let id_break: number = getNrFromID(id);
	if (rocket_list[id_break]) {
		rocket_list[id_break].break_rocket();
	}
}
