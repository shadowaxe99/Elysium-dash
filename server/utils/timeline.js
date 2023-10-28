```javascript
// server/utils/timeline.js

const moment = require('moment');

const timeline = {
  start: moment(),
  end: null,
  tasks: [],
  addTask: function(taskName, startDate, endDate) {
    this.tasks.push({
      name: taskName,
      start: startDate,
      end: endDate,
      duration: moment.duration(moment(endDate).diff(moment(startDate))).asDays()
    });
  },
  endTimeline: function() {
    this.end = moment();
    this.totalDuration = moment.duration(this.end.diff(this.start)).asDays();
  },
  getTimeline: function() {
    return {
      start: this.start,
      end: this.end,
      totalDuration: this.totalDuration,
      tasks: this.tasks
    };
  }
};

module.exports = timeline;
```