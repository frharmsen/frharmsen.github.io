var logger = {
    prefixes:  ["[ALL]  ", 
                "[TRACE]", 
                "[DEBUG]",
                "[INFO] ",
                "[WARN] ",
                "[ERROR]"],

    levels: {ALL: 0, TRACE: 1, DEBUG: 2, INFO: 3, WARN: 4, ERROR: 5, NONE: 6},

    state: {module: "", level: 6},

    isLoggable: function(level) {
        if (level >= this.state.level) {
            return true;
        }

        return false;
    },

    log: function(level, message) {
        if (this.isLoggable(level)) {
            console.log(this.prefixes[level] + " " + 
                        this.state.module + "\t" + 
                        message);
        } 
    },

    trace: function(message) {this.log(this.levels.TRACE, message);},
    debug: function(message) {this.log(this.levels.DEBUG, message);},
    info: function(message) {this.log(this.levels.INFO, message);},
    warn: function(message) {this.log(this.levels.WARN, message);},
    error: function(message) {this.log(this.levels.ERROR, message);},
}
