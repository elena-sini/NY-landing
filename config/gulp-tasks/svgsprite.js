import svgSprite from 'gulp-svg-sprite';
import cheerio from 'gulp-cheerio';
import svgmin from 'gulp-svgmin';

export const svgSprive = () => {
   return app.gulp.src(`${app.path.src.svg}`, {})
      .pipe(
         svgmin({
            js2svg: {
               pretty: true,
            },
         })
      )

      .pipe(
         cheerio({
            run: function ($) {
               $('[fill]').removeAttr('fill');
               $('[stroke]').removeAttr('stroke');
               $('[style]').removeAttr('style');
            },
            parserOptions: {
               xmlMode: true
            },
         })
      )
      .pipe(app.plugins.replace('&gt;', '>'))
      .pipe(svgSprite({
         mode: {
            symbol: {
               sprite: "../svg/sprite.svg"
            }
         },
         shape: {
            id: {
               separator: '',
               generator: 'svg-'
            },
         },
      }))
      .pipe(app.gulp.dest(app.path.build.images));
}
