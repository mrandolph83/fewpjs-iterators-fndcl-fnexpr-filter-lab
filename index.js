// Code your solution here
function findMatching(drivers, string) {
    let matches = drivers.filter(driver => {
      return driver.toLowerCase() === string.toLowerCase();
    });
    return matches;
  };

  function fuzzyMatch(drivers, string) {
    let matches = drivers.filter(driver => {
      return driver.startsWith(string)
    })
    return matches;
  }

  function matchName(drivers, string) {
    let matches = drivers.filter(driver => {
      return driver.name === string
    })
    return matches;
  }