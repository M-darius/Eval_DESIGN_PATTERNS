import { CameraA, TemperatureSensorA, MotionSensorA } from "./CapteurA.js";
import { ThermalSensorB, ThermalSensorBAdapter } from "./CapteurB.js";
import { EmailNotif, LogNotif, DiscordNotif } from "./Notification.js";
import { Piece } from "./Piece.js";

let cam = new CameraA("Classe1");
let temperature = new TemperatureSensorA("25");
let motion = new MotionSensorA("Couloir");

let therm = new ThermalSensorB("10");
let thermAdapt = new ThermalSensorBAdapter("thermal");

let piece = new Piece("Principale");

piece.addSensor(cam);
piece.addSensor(temperature);
piece.addSensor(motion);
piece.addSensor(therm);
piece.addSensor(thermAdapt);

piece.addNotif(new EmailNotif("mariusdarras34@gmail.com"));
piece.addNotif(new LogNotif());
piece.addNotif(new DiscordNotif("discord..."));
piece.checkSensors();