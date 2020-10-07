"use strict";
var Rocket = /** @class */ (function () {
    function Rocket(code, nr_of_thrusters, thrusters) {
        var _a;
        this.thrusters = new Array();
        this.code = code;
        this.nr_of_thrusters = nr_of_thrusters;
        (_a = this.thrusters).push.apply(_a, thrusters);
    }
    Rocket.prototype.accelerate_rocket = function () {
        for (var i = 0; i < this.nr_of_thrusters; i++) {
            if (this.thrusters[i].current_power != this.thrusters[i].max_power) {
                this.thrusters[i].current_power += 10;
            }
        }
    };
    Rocket.prototype.break_rocket = function () {
        for (var i = 0; i < this.nr_of_thrusters; i++) {
            if (this.thrusters[i].current_power != 0) {
                this.thrusters[i].current_power -= 10;
            }
        }
    };
    return Rocket;
}());
