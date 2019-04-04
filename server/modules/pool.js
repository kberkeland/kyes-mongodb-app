const pg = require('pg');

const Pool = pg.Pool;

const pool = new Pool({
    database: 'people',
    host: 'localhose'
})