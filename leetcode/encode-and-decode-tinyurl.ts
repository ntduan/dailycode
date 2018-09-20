/**
 * https://leetcode.com/problems/encode-and-decode-tinyurl/description/
 */

/**
 * 随机生成6位字母，存储在 map 里面
 */

const charTable = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const url2code = new Map();
const code2url = new Map();

const encode = longUrl => {
  let code = '';
  // 如果 url 被记录过了s
  while (!url2code.has(longUrl)) {
    code = '';
    for (let i = 0; i < 6; i++) {
      code += charTable[Math.floor(Math.random() * 62)];
    }
    // 如果该code以前没有出现过
    if (!code2url.has(code)) {
      code2url.set(code, longUrl);
      url2code.set(longUrl, code);
    }
  }
  return 'http://tinyurl.com/' + url2code.get(longUrl);
};

const decode = shortUrl => {
  return code2url.get((shortUrl.match(/[a-zA-Z0-9]{6}$/) || [])[0]);
};
