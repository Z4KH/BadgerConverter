function convert(value) {
    // Initialize time
    let time = document.getElementById("timeInput").value;
    const selectEvent = document.getElementById("events");
    const event = selectEvent.options[selectEvent.selectedIndex].value;
    const course = value;
    let lcm_time = 0;
    let scy_time = 0;
    let badger_time = 0;
   
    // Convert time toseconds
    if (time.includes(":") === true) {
      // Convert time to seconds
      const timeArray = time.split(":");
      time = parseInt(timeArray[0]) * 60 + parseFloat(timeArray[1]);
    }
    else {
      time = parseFloat(time);
    }

    // Convert
    switch(course) {
      case "Badger":
        lcm_time = time * 1.11;
        badger_time = time;
        switch (event) {
          case "50 Free":
            scy_time = lcm_time * 0.870;
            break;
          case "100 Free":
            scy_time = lcm_time * 0.873;
            break;
          case "200 Free":
            scy_time = lcm_time * 0.875;
            break;
          case "400 Free":
            scy_time = lcm_time * 0.877;
            break;
          case "50 Back":
            scy_time = lcm_time * 0.852;
            break;
          case "100 Back":
            scy_time = lcm_time * 0.855;
            break;
          case "200 Back":
            scy_time = lcm_time * 0.869;
            break;
          case "50 Breast":
            scy_time = lcm_time * 0.863;
            break;
          case "100 Breast":
            scy_time = lcm_time * 0.866;
            break;
          case "200 Breast":
            scy_time = lcm_time * 0.868;
            break;
          case "50 Fly":
            scy_time = lcm_time * 0.875;
            break;
          case "100 Fly":
            scy_time = lcm_time * 0.878;
            break;
          case "200 Fly":
            scy_time = lcm_time * 0.876;
            break;
          case "200 IM":
            scy_time = lcm_time * 0.867;
            break;
          case "400 IM":
            scy_time = lcm_time * 0.865;
            break;
        }
        break;
      case "SCY":
        scy_time = time;
        switch (event) {
          case "50 Free":
            lcm_time = time / 0.870;
            badger_time = lcm_time / 1.11;
            break;
          case "100 Free":
            lcm_time = time / 0.873;
            badger_time = lcm_time / 1.11;
            break;
          case "200 Free":
            lcm_time = time / 0.875;
            badger_time = lcm_time / 1.11;
            break;
          case "400 Free":
            lcm_time = time / 0.877;
            badger_time = lcm_time / 1.11;
            break;
          case "50 Back":
            lcm_time = time / 0.852;
            badger_time = lcm_time / 1.11;
            break;
          case "100 Back":
            lcm_time = time / 0.855;
            badger_time = lcm_time / 1.11;
            break;
          case "200 Back":
            lcm_time = time / 0.869;
            badger_time = lcm_time / 1.11;
            break;
          case "50 Breast":
            lcm_time = time / 0.863;
            badger_time = lcm_time / 1.11;
            break;
          case "100 Breast":
            lcm_time = time / 0.866;
            badger_time = lcm_time / 1.11;
            break;
          case "200 Breast":
            lcm_time = time / 0.868;
            badger_time = lcm_time / 1.11;
            break;
          case "50 Fly":
            lcm_time = time / 0.875;
            badger_time = lcm_time / 1.11;
            break;
          case "100 Fly":
            lcm_time = time / 0.878;
            badger_time = lcm_time / 1.11;
            break;
          case "200 Fly":
            lcm_time = time / 0.876;
            badger_time = lcm_time / 1.11;
            break;
          case "200 IM":
            lcm_time = time / 0.867;
            badger_time = lcm_time / 1.11;
            break;
          case "400 IM":
            lcm_time = time / 0.865;
            badger_time = lcm_time / 1.11;
            break;
        }
        break;
      case "LCM":
        lcm_time = time;
        badger_time = time / 1.11;
        switch(event) {
          case "50 Free":
            scy_time = lcm_time * 0.870;
            break;
          case "100 Free":
            scy_time = lcm_time * 0.873;
            break;
          case "200 Free":
            scy_time = lcm_time * 0.875;
            break;
          case "400 Free":
            scy_time = lcm_time * 0.877;
            break;
          case "50 Back":
            scy_time = lcm_time * 0.852;
            break;
          case "100 Back":
            scy_time = lcm_time * 0.855;
            break;
          case "200 Back":
            scy_time = lcm_time * 0.869;
            break;
          case "50 Breast":
            scy_time = lcm_time * 0.863;
            break;
          case "100 Breast":
            scy_time = lcm_time * 0.866;
            break;
          case "200 Breast":
            scy_time = lcm_time * 0.868;
            break;
          case "50 Fly":
            scy_time = lcm_time * 0.875;
            break;
          case "100 Fly":
            scy_time = lcm_time * 0.878;
            break;
          case "200 Fly":
            scy_time = lcm_time * 0.876;
            break;
          case "200 IM":
            scy_time = lcm_time * 0.867;
            break;
          case "400 IM":
            scy_time = lcm_time * 0.865;
            break;
        }
        break;
      }

      // Move LCM time to proper format
      if (lcm_time > 60) {
        let minutes = Math.trunc(lcm_time / 60);
        let seconds = lcm_time % 60;
        seconds = seconds.toFixed(2);

        if (seconds < 10)
        {
          seconds = "0" + seconds;
        }

        lcm_time = "LCM: " + minutes + ":" + seconds;
      }
      else {
        lcm_time = "LCM: " + lcm_time.toFixed(2);
      }

      // Move SCY time to proper format
      if (scy_time > 60) {
        minutes = Math.trunc(scy_time / 60);
        seconds = scy_time % 60;
        seconds = seconds.toFixed(2);

        if (seconds < 10) {
          seconds = "0" + seconds;
        }

        scy_time = "SCY: " + minutes + ":" + seconds;
      }
      else {
        scy_time = "SCY: " + scy_time.toFixed(2);
      }

      // Move Badger time to proper format
      if (badger_time > 60) {
        minutes = Math.trunc(badger_time / 60);
        seconds = badger_time % 60;
        seconds = seconds.toFixed(2);

        if (seconds < 10) {
          seconds = "0" + seconds;
        }

        badger_time = "Badger: " + minutes + ":" + seconds;
      }
      else {
        badger_time = "Badger: " + badger_time.toFixed(2);
      }

    // Print times
    switch (course) {
      case "Badger":
        document.getElementById("time1").innerHTML = lcm_time;
        document.getElementById("time2").innerHTML = scy_time;
        break;
      case "SCY":
        document.getElementById("time1").innerHTML = lcm_time;
        document.getElementById("time2").innerHTML = badger_time;
        break;
      case "LCM":
        document.getElementById("time1").innerHTML = badger_time;
        document.getElementById("time2").innerHTML = scy_time;
        break;
    }
  }