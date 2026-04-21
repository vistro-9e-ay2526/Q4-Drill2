function showHeatIndex() {
    let temp = document.getElementById("temperature").value;
    let humidity = document.getElementById("humidity").value;

    let heatIndex = "";
    let status = "";

    switch (true) {
        case (temp >=20 && temp <=24 && humidity >=30 && humidity <=50):
            heatIndex = "≤ 27°C";
            status = "Comfortable / Cool";
            break;
        case (temp >=25 && temp <=27 && humidity >=40 && humidity <=60):
            heatIndex = "28°C - 32°C";
            status = "Warm";
            break;
        case (temp >=28 && temp <=31 && humidity >=50 && humidity <=70):
            heatIndex = "33°C - 37°C";
            status = "Hot";
            break;
        case (temp >=32 && temp <=35 && humidity >=60 && humidity <=80):
            heatIndex = "38°C - 41°C";
            status = "Very Hot (Caution)";
            break;
        case (temp >=36 && humidity >=70 && humidity >=100):
            heatIndex = "≥ 42°C";
            status = "Extreme Heat (Danger)";
            break;

        default:
            heatIndex = "n/a";
            status = "Out of range";
    }

    alert("Heat Index: " + heatIndex + "\nStatus" + status);
}