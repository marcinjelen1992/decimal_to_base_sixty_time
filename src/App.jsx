import { useState } from "react";
import "./App.css";

function App() {
  //  const [count, setCount] = useState(0);

  // comments

  //  const string1 = "{";
  //  const string2 = "}";

  function GetMinutes(event) {
    setMinuteValue(event.target.value);
  }

  const [minuteValue, setMinuteValue] = useState("");

  function secondsOutput(input) {
    const internalSeconds = input * 60;
    if (internalSeconds !== +internalSeconds) {
      return "One of characters is not a number";
    } else return internalSeconds;
  }

  function minutesOutput(input) {
    const twoDotString = ":";
    const twoDotAndZeroString = ":0";
    const twoDotAndTwoZeroString = ":00";
    const internalSeconds = input * 60;
    const numberAtCeiling = Math.ceil(input);
    const multiplyOfSixty = 60 * numberAtCeiling;
    const partAfterTwoDots = internalSeconds - (multiplyOfSixty - 60);
    if (partAfterTwoDots !== +partAfterTwoDots) {
      return "One of characters is not a number";
    }
    if (partAfterTwoDots === 60) {
      return numberAtCeiling + twoDotAndTwoZeroString;
    }
    // if (partAfterTwoDots <= 9 && partAfterTwoDots >= 1) does not encompass values above 9 and below 1
    // will not show properly at input 0.16 and 0.01
    // better use if (partAfterTwoDots < 10 && partAfterTwoDots > 0)
    if (partAfterTwoDots <= 9 && partAfterTwoDots >= 1) {
      return numberAtCeiling - 1 + twoDotAndZeroString + partAfterTwoDots;
    } else return numberAtCeiling - 1 + twoDotString + partAfterTwoDots;
  }

  function hoursOutput(input) {
    const twoDotString = ":";
    const twoDotAndZeroString = ":0";
    const twoDotAndTwoZeroString = ":00";
    const internalSeconds = input * 60;
    const numberAtCeiling = Math.ceil(input);
    const multiplyOfSixty = 60 * numberAtCeiling;
    const partAfterTwoDots = internalSeconds - (multiplyOfSixty - 60);
    //
    const numberAtFloor = Math.floor(input);
    const internalHours = numberAtFloor / 60;
    const hoursAtFloor = Math.floor(internalHours);
    const correctedMinutes = numberAtFloor - 60 * hoursAtFloor;
    if (partAfterTwoDots !== +partAfterTwoDots) {
      return "One of characters is not a number";
    }
    if (
      internalHours >= 1 &&
      correctedMinutes === 0 &&
      partAfterTwoDots === 60
    ) {
      return hoursAtFloor + twoDotAndTwoZeroString + twoDotAndTwoZeroString;
    }
    if (
      internalHours >= 1 &&
      correctedMinutes >= 10 &&
      partAfterTwoDots < 10 &&
      partAfterTwoDots > 0
    ) {
      return (
        hoursAtFloor +
        twoDotString +
        correctedMinutes +
        twoDotAndZeroString +
        partAfterTwoDots
      );
    }
    if (internalHours >= 1 && partAfterTwoDots < 10 && partAfterTwoDots > 0) {
      return (
        hoursAtFloor +
        twoDotAndZeroString +
        correctedMinutes +
        twoDotAndZeroString +
        partAfterTwoDots
      );
    }
    if (
      internalHours >= 1 &&
      correctedMinutes >= 0 &&
      correctedMinutes < 10 &&
      partAfterTwoDots < 60 &&
      partAfterTwoDots >= 10
    ) {
      return (
        hoursAtFloor +
        twoDotAndZeroString +
        correctedMinutes +
        twoDotString +
        partAfterTwoDots
      );
    }
    if (
      internalHours >= 1 &&
      correctedMinutes >= 0 &&
      correctedMinutes < 10 &&
      partAfterTwoDots === 60
    ) {
      return (
        hoursAtFloor +
        twoDotAndZeroString +
        correctedMinutes +
        twoDotAndTwoZeroString
      );
    }
    if (
      internalHours >= 1 &&
      correctedMinutes >= 10 &&
      correctedMinutes <= 59 &&
      partAfterTwoDots === 60
    ) {
      return (
        hoursAtFloor + twoDotString + correctedMinutes + twoDotAndTwoZeroString
      );
    }
    if (internalHours >= 1) {
      return (
        hoursAtFloor +
        twoDotString +
        correctedMinutes +
        twoDotString +
        partAfterTwoDots
      );
    }
    if (partAfterTwoDots === 60) {
      return numberAtCeiling + twoDotAndTwoZeroString;
    }
    if (partAfterTwoDots < 10 && partAfterTwoDots > 0) {
      return numberAtCeiling - 1 + twoDotAndZeroString + partAfterTwoDots;
    } else return numberAtCeiling - 1 + twoDotString + partAfterTwoDots;
  }

  function GetHours(event) {
    setHourValue(event.target.value);
  }

  const [hourValue, setHourValue] = useState("");

  function secondsOutputFromHoursInput(input) {
    const internalSeconds = input * 3600;
    if (internalSeconds !== +internalSeconds) {
      return "One of characters is not a number";
    } else return internalSeconds;
  }

  function minutesOutputFromHoursInput(input) {
    const twoDotString = ":";
    const twoDotAndZeroString = ":0";
    const twoDotAndTwoZeroString = ":00";
    const internalSeconds = input * 3600;
    const internalMinutes = input * 60;
    const numberAtCeiling = Math.ceil(internalMinutes);
    const multiplyOfSixty = 60 * numberAtCeiling;
    const partAfterTwoDots = internalSeconds - (multiplyOfSixty - 60);
    if (partAfterTwoDots !== +partAfterTwoDots) {
      return "One of characters is not a number";
    }
    if (partAfterTwoDots === 60) {
      return numberAtCeiling + twoDotAndTwoZeroString;
    }
    if (partAfterTwoDots < 10 && partAfterTwoDots > 0) {
      return numberAtCeiling - 1 + twoDotAndZeroString + partAfterTwoDots;
    } else return numberAtCeiling - 1 + twoDotString + partAfterTwoDots;
  }

  function hoursOutputFromHoursInput(input) {
    const twoDotString = ":";
    const twoDotAndZeroString = ":0";
    const twoDotAndTwoZeroString = ":00";
    const internalSeconds = input * 3600;
    const internalMinutes = input * 60;
    const numberAtCeiling = Math.ceil(internalMinutes);
    const multiplyOfSixty = 60 * numberAtCeiling;
    const partAfterTwoDots = internalSeconds - (multiplyOfSixty - 60);
    //
    const numberAtFloor = Math.floor(internalMinutes);
    const internalHours = numberAtFloor / 60;
    const hoursAtFloor = Math.floor(internalHours);
    const correctedMinutes = numberAtFloor - 60 * hoursAtFloor;
    if (partAfterTwoDots !== +partAfterTwoDots) {
      return "One of characters is not a number";
    }
    if (
      internalHours >= 1 &&
      correctedMinutes === 0 &&
      partAfterTwoDots === 60
    ) {
      return hoursAtFloor + twoDotAndTwoZeroString + twoDotAndTwoZeroString;
    }
    if (
      internalHours >= 1 &&
      correctedMinutes >= 10 &&
      partAfterTwoDots < 10 &&
      partAfterTwoDots > 0
    ) {
      return (
        hoursAtFloor +
        twoDotString +
        correctedMinutes +
        twoDotAndZeroString +
        partAfterTwoDots
      );
    }
    if (internalHours >= 1 && partAfterTwoDots < 10 && partAfterTwoDots > 0) {
      return (
        hoursAtFloor +
        twoDotAndZeroString +
        correctedMinutes +
        twoDotAndZeroString +
        partAfterTwoDots
      );
    }
    if (
      internalHours >= 1 &&
      correctedMinutes >= 0 &&
      correctedMinutes < 10 &&
      partAfterTwoDots < 60 &&
      partAfterTwoDots >= 10
    ) {
      return (
        hoursAtFloor +
        twoDotAndZeroString +
        correctedMinutes +
        twoDotString +
        partAfterTwoDots
      );
    }
    if (
      internalHours >= 1 &&
      correctedMinutes >= 0 &&
      correctedMinutes < 10 &&
      partAfterTwoDots === 60
    ) {
      return (
        hoursAtFloor +
        twoDotAndZeroString +
        correctedMinutes +
        twoDotAndTwoZeroString
      );
    }
    if (
      internalHours >= 1 &&
      correctedMinutes >= 10 &&
      correctedMinutes <= 59 &&
      partAfterTwoDots === 60
    ) {
      return (
        hoursAtFloor + twoDotString + correctedMinutes + twoDotAndTwoZeroString
      );
    }
    if (internalHours >= 1) {
      return (
        hoursAtFloor +
        twoDotString +
        correctedMinutes +
        twoDotString +
        partAfterTwoDots
      );
    }
    if (partAfterTwoDots === 60) {
      return numberAtCeiling + twoDotAndTwoZeroString;
    }
    if (partAfterTwoDots < 10 && partAfterTwoDots > 0) {
      return numberAtCeiling - 1 + twoDotAndZeroString + partAfterTwoDots;
    } else return numberAtCeiling - 1 + twoDotString + partAfterTwoDots;
  }

  function GetSecondsForAlternatives(event) {
    setSecondsForAltValue(event.target.value);
  }

  const [secondsForAltValue, setSecondsForAltValue] = useState("");

  function octalNumber(input) {
    const toNumberTypeConversion = input * 1;
    const secondsInOctal = toNumberTypeConversion.toString(8);
    if (toNumberTypeConversion !== +toNumberTypeConversion) {
      return "One of characters is not a number";
    } else return secondsInOctal;
  }

  function hexadecimalNumber(input) {
    const toNumberTypeConversion = input * 1;
    const secondsInHexadecimal = toNumberTypeConversion.toString(16);
    if (toNumberTypeConversion !== +toNumberTypeConversion) {
      return "One of characters is not a number";
    } else return secondsInHexadecimal;
  }

  function minutesOutputAltCode(input) {
    const twoDotString = ":";
    const twoDotAndZeroString = ":0";
    const twoDotAndTwoZeroString = ":00";
    const internalSeconds = input;
    const numberAfterDivision = input / 60;
    const numberAtCeiling = Math.ceil(numberAfterDivision);
    const multiplyOfSixty = 60 * numberAtCeiling;
    const partAfterTwoDots = internalSeconds - (multiplyOfSixty - 60);
    const numberAtCeilingMinusOne = numberAtCeiling - 1;
    if (partAfterTwoDots !== +partAfterTwoDots) {
      return "One of characters is not a number";
    }
    if (partAfterTwoDots === 60) {
      return numberAtCeiling + twoDotAndTwoZeroString;
    }
    if (partAfterTwoDots < 10 && partAfterTwoDots > 0) {
      return numberAtCeilingMinusOne + twoDotAndZeroString + partAfterTwoDots;
    } else return numberAtCeilingMinusOne + twoDotString + partAfterTwoDots;
  }

  function minInDecSecInHex(input) {
    const twoDotString = ":";
    const twoDotAndZeroString = ":0";
    const twoDotAndTwoZeroString = ":00";
    const internalSeconds = input;
    const numberAfterDivision = input / 64;
    const numberAtCeiling = Math.ceil(numberAfterDivision);
    const multiplyOfSixtyFour = 64 * numberAtCeiling;
    const partAfterTwoDots = internalSeconds - (multiplyOfSixtyFour - 64);
    const hexadecimalPartAfterTwoDots = partAfterTwoDots.toString(16);
    const numberAtCeilingMinusOne = numberAtCeiling - 1;
    if (partAfterTwoDots !== +partAfterTwoDots) {
      return "One of characters is not a number";
    }
    if (partAfterTwoDots === 64) {
      return numberAtCeiling + twoDotAndTwoZeroString;
    }
    if (partAfterTwoDots < 16 && partAfterTwoDots > 0) {
      return (
        numberAtCeilingMinusOne +
        twoDotAndZeroString +
        hexadecimalPartAfterTwoDots
      );
    } else
      return (
        numberAtCeilingMinusOne + twoDotString + hexadecimalPartAfterTwoDots
      );
  }

  function minInHexSecInHex(input) {
    // input 16384 gives result 100:00
    const twoDotString = ":";
    const twoDotAndZeroString = ":0";
    const twoDotAndTwoZeroString = ":00";
    const internalSeconds = input;
    const numberAfterDivision = input / 64;
    const numberAtCeiling = Math.ceil(numberAfterDivision);
    const multiplyOfSixtyFour = 64 * numberAtCeiling;
    const partAfterTwoDots = internalSeconds - (multiplyOfSixtyFour - 64);
    const hexadecimalPartAfterTwoDots = partAfterTwoDots.toString(16);
    //
    const numberAtCeilingMinusOne = numberAtCeiling - 1;
    const hexadecimalNumberAtCeiling = numberAtCeiling.toString(16);
    const hexadecimalNumberAtCeilingMinusOne =
      numberAtCeilingMinusOne.toString(16);
    if (partAfterTwoDots !== +partAfterTwoDots) {
      return "One of characters is not a number";
    }
    if (partAfterTwoDots === 64) {
      return hexadecimalNumberAtCeiling + twoDotAndTwoZeroString;
    }
    if (partAfterTwoDots < 16 && partAfterTwoDots > 0) {
      return (
        hexadecimalNumberAtCeilingMinusOne +
        twoDotAndZeroString +
        hexadecimalPartAfterTwoDots
      );
    } else
      return (
        hexadecimalNumberAtCeilingMinusOne +
        twoDotString +
        hexadecimalPartAfterTwoDots
      );
  }

  function hoursInDecRestInHex(input) {
    const twoDotString = ":";
    const twoDotAndZeroString = ":0";
    const twoDotAndTwoZeroString = ":00";
    const internalSeconds = input;
    const internalMinutes = input / 64;
    const numberAtCeiling = Math.ceil(internalMinutes);
    const multiplyOfSixtyFour = 64 * numberAtCeiling;
    const partAfterTwoDots = internalSeconds - (multiplyOfSixtyFour - 64);
    const hexadecimalPartAfterTwoDots = partAfterTwoDots.toString(16);
    const numberAtCeilingMinusOne = numberAtCeiling - 1;
    const hexadecimalNumberAtCeiling = numberAtCeiling.toString(16);
    const hexadecimalNumberAtCeilingMinusOne =
      numberAtCeilingMinusOne.toString(16);
    //
    const numberAtFloor = Math.floor(internalMinutes);
    const internalHours = numberAtFloor / 64;
    const hoursAtFloor = Math.floor(internalHours);
    const correctedMinutes = numberAtFloor - 64 * hoursAtFloor;
    const hexadecimalCorrectedMinutes = correctedMinutes.toString(16);
    if (partAfterTwoDots !== +partAfterTwoDots) {
      return "One of characters is not a number";
    }
    if (
      internalHours >= 1 &&
      correctedMinutes === 0 &&
      partAfterTwoDots === 64
    ) {
      return hoursAtFloor + twoDotAndTwoZeroString + twoDotAndTwoZeroString;
    }
    if (
      internalHours >= 1 &&
      correctedMinutes >= 16 &&
      partAfterTwoDots < 16 &&
      partAfterTwoDots > 0
    ) {
      return (
        hoursAtFloor +
        twoDotString +
        hexadecimalCorrectedMinutes +
        twoDotAndZeroString +
        hexadecimalPartAfterTwoDots
      );
    }
    if (internalHours >= 1 && partAfterTwoDots < 16 && partAfterTwoDots > 0) {
      return (
        hoursAtFloor +
        twoDotAndZeroString +
        hexadecimalCorrectedMinutes +
        twoDotAndZeroString +
        hexadecimalPartAfterTwoDots
      );
    }
    if (
      internalHours >= 1 &&
      correctedMinutes >= 0 &&
      correctedMinutes < 16 &&
      partAfterTwoDots < 64 &&
      partAfterTwoDots >= 16
    ) {
      return (
        hoursAtFloor +
        twoDotAndZeroString +
        hexadecimalCorrectedMinutes +
        twoDotString +
        hexadecimalPartAfterTwoDots
      );
    }
    if (
      internalHours >= 1 &&
      correctedMinutes >= 0 &&
      correctedMinutes < 16 &&
      partAfterTwoDots === 64
    ) {
      return (
        hoursAtFloor +
        twoDotAndZeroString +
        hexadecimalCorrectedMinutes +
        twoDotAndTwoZeroString
      );
    }
    if (
      internalHours >= 1 &&
      correctedMinutes >= 16 &&
      correctedMinutes <= 63 &&
      partAfterTwoDots === 64
    ) {
      return (
        hoursAtFloor +
        twoDotString +
        hexadecimalCorrectedMinutes +
        twoDotAndTwoZeroString
      );
    }
    if (internalHours >= 1) {
      return (
        hoursAtFloor +
        twoDotString +
        hexadecimalCorrectedMinutes +
        twoDotString +
        hexadecimalPartAfterTwoDots
      );
    }
    if (partAfterTwoDots === 64) {
      return hexadecimalNumberAtCeiling + twoDotAndTwoZeroString;
    }
    if (partAfterTwoDots < 16 && partAfterTwoDots > 0) {
      return (
        hexadecimalNumberAtCeilingMinusOne +
        twoDotAndZeroString +
        hexadecimalPartAfterTwoDots
      );
    } else
      return (
        hexadecimalNumberAtCeilingMinusOne +
        twoDotString +
        hexadecimalPartAfterTwoDots
      );
  }

  function minInDecAndInHexDiff(input) {
    const twoDotString = ":";
    const internalSeconds = input;
    const numberAfterDivision = input / 64;
    const internalMinutes = input / 60;
    const diffCalc = internalMinutes - numberAfterDivision;
    const diffFloor = Math.floor(diffCalc);
    const diffSubstract = diffCalc - diffFloor;
    const diffSec = diffSubstract * 60;
    const diffSecCeiling = Math.ceil(diffSec);
    const numberAtCeiling = Math.ceil(numberAfterDivision);
    const multiplyOfSixtyFour = 64 * numberAtCeiling;
    const partAfterTwoDots = internalSeconds - (multiplyOfSixtyFour - 64);
    if (partAfterTwoDots !== +partAfterTwoDots) {
      return "One of characters is not a number";
    } else return diffFloor + twoDotString + diffSecCeiling;
  }

  return (
    <>
      <div className="rit">
        <div className="secondDiv">
          <h1>Time calculators</h1>
        </div>
        <div className="section_content">
          <h3>
            Conversion of minutes in decimal format to base 60 time (for example
            1.5 input equals 90 seconds)
          </h3>
          <input type="text" value={minuteValue} onChange={GetMinutes} />
        </div>
        <div className="results_content">
          <div>
            <p>Seconds: </p>
            <p>Minutes: </p>
            <p>Hours: </p>
          </div>
          <div
            style={{
              padding: "0 0 0 8px",
            }}
          >
            <p>{secondsOutput(minuteValue)}</p>
            <p>{minutesOutput(minuteValue)}</p>
            <p>{hoursOutput(minuteValue)}</p>
          </div>
        </div>
        <div className="section_content">
          <h3>
            Conversion of hours in decimal format to base 60 time (for example
            1.5 input equals 1 hour and 30 seconds)
          </h3>
          <input type="text" value={hourValue} onChange={GetHours} />
        </div>
        <div className="results_content">
          <div>
            <p>Seconds: </p>
            <p>Minutes: </p>
            <p>Hours: </p>
          </div>
          <div
            style={{
              padding: "0 0 0 8px",
            }}
          >
            <p>{secondsOutputFromHoursInput(hourValue)}</p>
            <p>{minutesOutputFromHoursInput(hourValue)}</p>
            <p>{hoursOutputFromHoursInput(hourValue)}</p>
          </div>
        </div>
        <div className="section_content">
          <h3>Conversion of classical seconds to alternative timers</h3>
          <input
            type="text"
            value={secondsForAltValue}
            onChange={GetSecondsForAlternatives}
          />
        </div>
        <div className="results_content">
          <div>
            <p>Classical minutes: </p>
            <p>Octal: </p>
            <p>Hexadecimal: </p>
            <p>Decimal elongated (64s) minutes & Hex seconds: </p>
            <p>Hex elongated (64s) minutes & Hex seconds: </p>
            <p>Decimal elongated (64min) hours & rest in Hex: </p>
            <p>
              Decimal difference of elongated (64s) & standard (60s) minutes:{" "}
            </p>
          </div>
          <div
            style={{
              padding: "0 0 0 8px",
            }}
          >
            <p>{minutesOutputAltCode(secondsForAltValue)}</p>
            <p>{octalNumber(secondsForAltValue)}</p>
            <p>{hexadecimalNumber(secondsForAltValue)}</p>
            <p>{minInDecSecInHex(secondsForAltValue)}</p>
            <p>{minInHexSecInHex(secondsForAltValue)}</p>
            <p>{hoursInDecRestInHex(secondsForAltValue)}</p>
            <p>{minInDecAndInHexDiff(secondsForAltValue)}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
