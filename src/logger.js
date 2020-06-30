import debug from 'debug';

const BASE = 'Logger';
const COLOURS = {
  'TRACE ---> ': 'lightblue',
  'INFO ---> ' : 'white',
  'WARN --->': 'yellow',
  'ERROR --->': 'red'
}; // choose better colours :)

class Log {
  generateMessage(level, message, source) {
    // Set the prefix which will cause debug to enable the message
    const namespace = `${BASE}:${level}`;
    const createDebug = debug(namespace);
    
    // Set the colour of the message based on the level
    createDebug.color = COLOURS[level];
    
    if(source) { createDebug(source, message); }
    else { createDebug(message); }
  }
  
  trace(message, source) {
    return this.generateMessage('TRACE ---> ', message, source);
  }
  
  info(message, source) {
    return this.generateMessage('INFO ---> ', message,source);
  }
  
  warn(message, source) {
    return this.generateMessage('WARN --->', message, source);
  }
  
  error(message, source) {
    return this.generateMessage('ERROR --->', message, source);
  }
}

export default new Log();