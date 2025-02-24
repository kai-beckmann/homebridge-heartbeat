'use strict';

module.exports = (api) => {
  api.registerAccessory('HeartbeatAccessory', HeartbeatAccessory);
};

class HeartbeatAccessory {
  constructor(log, config, api) {
    this.log = log;
    this.name = config.name;
    // Lese das Intervall aus der Config; Standardwert 60000ms (1 Minute), falls nicht definiert.
    this.interval = config.interval || 60000;
    this.Service = api.hap.Service;
    this.Characteristic = api.hap.Characteristic;
    this.service = new this.Service.Switch(this.name);

    this.log(`Heartbeat initialisiert. Intervall: ${this.interval}ms`);

    // Starte den periodischen Puls mit dem konfigurierten Intervall
    this.startHeartbeat();
  }
  
  startHeartbeat() {
    setInterval(() => {
      //this.log('Heartbeat pulse');
      // Schalte den virtuellen Schalter kurz ein
      this.service.getCharacteristic(this.Characteristic.On).updateValue(true);
      setTimeout(() => {
        // Schalte ihn nach 500ms wieder aus
        this.service.getCharacteristic(this.Characteristic.On).updateValue(false);
      }, 500);
    }, this.interval);
  }

  getServices() {
    return [this.service];
  }
}
