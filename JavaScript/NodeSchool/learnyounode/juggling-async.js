const http = require('http');
const log = console.log;

(async function() {
    const allUrls = ([url1, url2, url3] = process.argv.slice(2));

    for (let i = 0; i < allUrls.length; i++) {
        const html = await getHttp(allUrls[i]);
        log(html);
    }
})();

function getHttp(url) {
    return new Promise((resolve, reject) => {
        http.get(url, (res) => {
            res.setEncoding('utf8');
            let html = '';
            res.on('data', (chunk) => (html += chunk));
            res.on('end', () => resolve(html));
        });
    });
}
