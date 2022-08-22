const { src, dest, watch, series } = require("gulp");      
const sass = require("gulp-sass")(require("sass"));       
                                                          
function scssTask() {                                     
    return src("./scss/style.scss", { sourcemaps: true }) 
     .pipe(sass())                                     
        .pipe(dest("./css", { sourcemaps: "." }));        
}                                                         
                                                          
function watchTask() {                                    
    watch("./scss/*.scss", series(scssTask));             
}                                                         
                                                          
exports.default = series(scssTask, watchTask);            
