// Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

// Пути к папке с исходниками и папке с результатом
const buildFolder = `./dist`;
const srcFolder = `./src`;

// Пути к папкам и файлам проекта
export const path = {
   build: {
      html: `${buildFolder}/`,
      css: `${buildFolder}/css/`,
      js: `${buildFolder}/js/`,
      images: `${buildFolder}/img/`,
      fonts: `${buildFolder}/fonts/`,
      files: `${buildFolder}/files/`,
   },
   src: {
      html: `${srcFolder}/*.html`,
      scss: `${srcFolder}/scss/main.scss`,
      js: `${srcFolder}/js/main.js`,
      images: `${srcFolder}/img/**/**.{jpg,jpeg,png,svg,webp}`,
      svg: `${srcFolder}/img/svg/*.svg`,
      files: `${srcFolder}/files/**/*.*`,
   },
   watch: {
      html: `${srcFolder}/**/*.html`,
      scss: `${srcFolder}/scss/**/*.scss`,
      js: `${srcFolder}/**/*.js`,
      images: `${srcFolder}/img/**/*.{jpg,jpeg,svg,png,gif,ico,webp}`,
      svg: `${srcFolder}/img/svg/*.svg`,
      files: `${srcFolder}/files/**/*.*`,
   },
   clean: buildFolder,
   buildFolder: buildFolder,
   srcFolder: srcFolder,
   rootFolder: rootFolder,
   ftp: `` // Путь к нужной папке на удаленном сервере. gulp добавит имя папки проекта автоматически
};
