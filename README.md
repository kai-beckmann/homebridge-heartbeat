# homebridge-heartbeat

Um das Plugin zu nutzen, füge folgenden Abschnitt zu deiner Homebridge `config.json` hinzu. Eine vollständige Beispielkonfiguration findest du in der Datei [config.example.json](config.example.json).

```json
{
  "_comment": "Beispielkonfiguration für homebridge-heartbeat",
  "accessories": [
    {
      "accessory": "HeartbeatAccessory",
      "name": "Heartbeat",
      "interval": 60000
    }
  ]
}
