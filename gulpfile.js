// Импорт основного модуля
import gulp from "gulp";
// Импорт общих плагинов
import { plugins } from "./config/gulp-plugins.js";
// Импорт путей
import { path } from './config/gulp-settings.js';

// Передаем значения в глобальную переменную
global.app = {
   isBuild: process.argv.includes('--build'),
   isDev: !process.argv.includes('--build'),

   path: path,
   gulp: gulp,
   plugins: plugins
}

// Импорт задач //
import { copy } from "./config/gulp-tasks/copy.js";
import { reset } from "./config/gulp-tasks/reset.js";
import { html } from "./config/gulp-tasks/html.js";
import { server } from "./config/gulp-tasks/server.js";
import { scss } from "./config/gulp-tasks/scss.js";
import { js } from "./config/gulp-tasks/js.js";
import { images } from "./config/gulp-tasks/images.js";
import { otfToTtf, ttfToWoff, fonstStyle } from "./config/gulp-tasks/fonts.js";
import { svgSprive } from "./config/gulp-tasks/svgsprite.js";
import { zip } from "./config/gulp-tasks/zip.js";

// Наблюдатель за изменениями в файлах
function watcher() {
   gulp.watch(path.watch.files, copy);
   gulp.watch(path.watch.html, html);
   gulp.watch(path.watch.scss, scss);
   gulp.watch(path.watch.js, js);
   gulp.watch(path.watch.images, images);
   gulp.watch(path.watch.svg, svgSprive);
}

export { svgSprive }

const fonts = gulp.series(reset, otfToTtf, ttfToWoff, fonstStyle);

const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, js, images, svgSprive));

// Построение сценариев выполнения задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);
const deployZIP = gulp.series(reset, mainTasks, zip);


// Экспорт сценариев в package.json
export { dev }
export { build }
export { deployZIP }

// Выполнение сценария по умолчанию
gulp.task('default', dev);

