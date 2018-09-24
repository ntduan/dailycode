/**
 * https://leetcode.com/problems/subdomain-visit-count/description/
 */

var subdomainVisits = function(cpdomains) {
  const map = {};
  for (let i = 0; i < cpdomains.length; i++) {
    const no = Number(cpdomains[i].split(' ')[0]);
    const strArray = cpdomains[i].split(' ')[1].split('.');
    let str = '';
    for (let i = strArray.length - 1; i >= 0; i--) {
      str = strArray[i] + (str ? '.' + str : str);
      map[str] = (map[str] || 0) + no;
    }
  }

  let result = [];
  for (const domain of Object.keys(map)) {
    result.push(`${map[domain]} ${domain}`);
  }

  return result;
};
