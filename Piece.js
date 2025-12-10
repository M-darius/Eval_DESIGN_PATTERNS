export class Piece {
  constructor(name) {
    this.name = name;
    this.sensors = [];
    this.observers = [];
  }

  addSensor(sensor) {
    this.sensors.push(sensor);
  }

  addNotif(notif) {
    this.notif.push(notif);
  }

  checkSensors() {
    for (const sensor of this.sensors) {
      const alertMessage = sensor.detect();
      this.notifierAll(alertMessage);
    }
  }

  notifierAll(message) {
    const fullMessage = this.name + " : " + message;
    for (const observer of this.observers) {
      observer.send(fullMessage);
    }
  }
}
