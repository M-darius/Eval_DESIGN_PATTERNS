
class CameraA {
 constructor(location) {
    this.location = location;
 } // location = nom de la pièce
 detect() {
   return "Alterte dans la pièce" + this.location;
 } // Déclenche un message d’alerte (string)
}

class TemperatureSensorA {
 constructor(location, threshold) {
    this.location = location;
    this.threshold = threshold;
 } // location = nom de la pièce, threshold = température de déclenchement
 detect() {
   return "Température est de " + this.threshold + "dans la pièce " + this.location;
 } // Déclenche un message d’alerte (string)
}
class MotionSensorA {
 constructor(location) {
    this.location = location;
 }
 detect() {
   return "Mouvement repéré dans la pièce " + this.location;
 } // Déclenche un message d’alerte (string)
}