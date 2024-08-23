function workingHoursMiddleware(req, res, next) {
    const currentDate = new Date();
    const day = currentDate.getDay();
    const hour = currentDate.getHours();
  
    // Check if the request is during working hours: Monday to Friday, 9am to 5pm
    if (day >= 1 && day <= 5 && hour >= 9 && hour <= 17) {
      next(); // Continue to the requested route
    } else {
      res.send("Sorry, the web application is only available during working hours (Monday to Friday, 9 am to 5 pm).");
    }
  }
  
  module.exports = workingHoursMiddleware;