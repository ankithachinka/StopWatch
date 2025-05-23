    let startTime, interval, elapsed = 0;

    function formatTime(ms) {
      const date = new Date(ms);
      const min = String(date.getUTCMinutes()).padStart(2, '0');
      const sec = String(date.getUTCSeconds()).padStart(2, '0');
      const msStr = String(date.getUTCMilliseconds()).padStart(3, '0');
      return `${min}:${sec}.${msStr}`;
    }

    function updateDisplay() {
      const now = Date.now();
      const time = elapsed + (now - startTime);
      document.getElementById("display").textContent = formatTime(time);
    }

    function start() {
      if (!interval) {
        startTime = Date.now();
        interval = setInterval(updateDisplay, 10);
      }
    }

    function pause() {
      if (interval) {
        elapsed += Date.now() - startTime;
        clearInterval(interval);
        interval = null;
      }
    }

    function reset() {
      clearInterval(interval);
      interval = null;
      elapsed = 0;
      document.getElementById("display").textContent = "00:00:00.000";
      document.getElementById("laps").innerHTML = '';
    }

    function lap() {
      if (interval) {
        const now = Date.now();
        const lapTime = elapsed + (now - startTime);
        const li = document.createElement("li");
        li.textContent = formatTime(lapTime);
        document.getElementById("laps").appendChild(li);
      }
    }
  