import * as fs from "fs";

const siteName = process.argv[2];

fs.writeFileSync('config/default/site.yaml', 'siteName: ' + siteName);
