const gulp = require('gulp');

const spawn = require('child_process').spawn;


gulp.task('makemigrations', cb => {
    spawn(
        'pipenv',
        [
            'run',
            'python',
            'manage.py',
            'makemigrations'
        ],
        {
            stdio: 'inherit'
        }
    ).on('exit', cb);
});


gulp.task('migrate', cb => {
    spawn(
        'pipenv',
        [
            'run',
            'python',
            'manage.py',
            'migrate'
        ],
        {
            stdio: 'inherit'
        }
    ).on('exit', cb);
});


gulp.task('createsuperuser', cb => {
    spawn(
        'pipenv',
        [
            'run',
            'python',
            'manage.py',
            'createsuperuser'
        ],
        {
            stdio: 'inherit'
        }
    ).on('exit', cb);
});
