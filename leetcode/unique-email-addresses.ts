/**
 * https://leetcode.com/problems/unique-email-addresses/
 */

var numUniqueEmails = function(emails) {
  return Object.keys(
    emails.reduce(
      (result, email) => ({
        ...result,
        [email.split('@').reduce((a, b) => a.replace(/(\.)|(\+.*)/g, '') + '@' + b)]: true,
      }),
      {}
    )
  ).length;
};
