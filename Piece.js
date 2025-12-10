export class Piece {
    constructor(name) {
        this.name = name;
        this.sensors = [];
        this.observers = [];
    }

    addSensor(sensor) {
        this.sensors.push(sensor);
    }

    addNotif(observer) {
        this.observers.push(observer);
    }

    notifierAll(message) {
        const formatted = this.name + " : " + message;
        for (const obs of this.observers) {
            obs.send(formatted);
        }
    }

    checkSensors() {
        for (const sensor of this.sensors) {
            const message = sensor.detect();
            this.notifierAll(message);
        }
    }
}