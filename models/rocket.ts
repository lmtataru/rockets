class Rocket {
	public code: string;
	public nr_of_thrusters: number;
	public thrusters: Thruster[] = new Array();


 	constructor (code: string, nr_of_thrusters: number, thrusters: Thruster[]) {
    	this.code = code;
    	this.nr_of_thrusters = nr_of_thrusters;
    	this.thrusters.push(...thrusters);
    }

    accelerate_rocket(): void{
    	for (let i: number = 0; i < this.nr_of_thrusters; i++) {
    		if (this.thrusters[i].current_power != this.thrusters[i].max_power) {
    			this.thrusters[i].current_power += 10;
			}
    	}
    }

    break_rocket(): void{
    	for (let i: number = 0; i < this.nr_of_thrusters; i++) {
    		if (this.thrusters[i].current_power != 0) {
    			this.thrusters[i].current_power -= 10;
    		}
    	}
    }
}