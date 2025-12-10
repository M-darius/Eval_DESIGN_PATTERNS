class ThermalSensorB {
 constructor(position) {
    this.position = position;
 } // position {
 scanHeatSignature() {
    return {
      sensor: "ThermalSensorB",
      detection: "thermal",
      date: new Date().toJSON()
    };
 } // Déclenche une donnée complexe json, voir ci dessous
}

class ThermalSensorBAdapter {
 constructor(thermalSensorB) {
    this.sensor = thermalSensorB;
 }
 detect() {
    const data = this.sensor.scanHeatSignature();
    return "Detection " + data.detection + " de " + data.sensor + " le " + data.date;
    }
}

