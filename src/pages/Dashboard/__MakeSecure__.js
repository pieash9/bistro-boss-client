/**
 * ------Basic security-----------
 * 1.  do not show the link who should not see it
 *  only show the person/user who should see it
 * 2. Do not allow to visit the link by typing on the url
 * User adminRoute to check whether user is admin or not . if not admin redirect them to any other pages. and you could logout them and send them to login pages.
 *
 *
 *
 * -------------to send data-----------
 * 1. verify jwt token token (send authorization token in the heder to the server). if possible use axios so send jwt token by intercepting the request.
 * 2. if it is admin activity. make sure only admin post the data by using verify admin
 * 3.
 */
